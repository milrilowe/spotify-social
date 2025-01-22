import 'dotenv/config'
import { generateRandomString } from './util';
import { publicProcedure, router } from '../../trpc';
import z from 'zod';
import { TRPCError } from '@trpc/server';
import { SpotifyTokenResponse, SpotifyUser } from '../../types';
import { db } from '../../db';
import { usersTable } from '../../db/schema';

const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const SPOTIFY_REDIRECT_URI = process.env.SPOTIFY_REDIRECT_URI;
const CLIENT_URL = process.env.CLIENT_URL;

const SCOPES = [
    'ugc-image-upload',
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-currently-playing',
    'streaming',
    'playlist-read-collaborative',
    'playlist-modify-public',
    'playlist-modify-private',
    'user-read-email',
    'user-read-private',
    'user-top-read'
];


export const authRouter = router({
    login: publicProcedure.input(z.object({ redirect: z.string() })).mutation(async ({ ctx, input }) => {
        const { redirect } = input;
        let state = encodeURIComponent(JSON.stringify({
            redirect: redirect
        }))
        const spotifyAuthUrl = new URL('https://accounts.spotify.com/authorize');
        spotifyAuthUrl.searchParams.append('client_id', SPOTIFY_CLIENT_ID!);
        spotifyAuthUrl.searchParams.append('response_type', 'code');
        //batch callback url here
        spotifyAuthUrl.searchParams.append('redirect_uri', SPOTIFY_REDIRECT_URI!);
        spotifyAuthUrl.searchParams.append('scope', SCOPES.join(' '));
        // spotifyAuthUrl.searchParams.append('show_dialog', 'true');
        spotifyAuthUrl.searchParams.append('state', state);

        return { url: spotifyAuthUrl.toString(), state }
    }),
    callback: publicProcedure.input(z.object({ code: z.string(), state: z.string() })).mutation(async ({ input, ctx }) => {

        try {
            // Exchange code for tokens
            const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Authorization: `Basic ${Buffer.from(
                        `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
                    ).toString('base64')}`,
                },
                body: new URLSearchParams({
                    grant_type: 'authorization_code',
                    code: input.code,
                    redirect_uri: SPOTIFY_REDIRECT_URI!,
                }),
            });

            if (!tokenResponse.ok) {
                throw new TRPCError({
                    code: 'UNAUTHORIZED',
                    message: 'Failed to exchange authorization code',
                    cause: tokenResponse.status
                });
            }

            const tokens = await tokenResponse.json() as SpotifyTokenResponse;

            // Get user profile
            const userResponse = await fetch('https://api.spotify.com/v1/me', {
                headers: {
                    Authorization: `Bearer ${tokens.access_token}`,
                },
            });

            if (!userResponse.ok) {
                throw new TRPCError({
                    code: 'UNAUTHORIZED',
                    message: 'Failed to fetch user profile',
                });
            }

            const user = await userResponse.json() as SpotifyUser

            const existingUser = await db.query.usersTable.findFirst({
                where: (usersTable, { eq }) => eq(usersTable.spotify_id, user.id)
            })

            if (!existingUser) {
                await db.insert(usersTable).values({
                    spotify_id: user.id,
                    email: user.email,
                    display_name: user.display_name,
                    avatar: user.images[0].url || null,
                    country: user.country
                }).catch((e) => console.error(e))
            }

            ctx.session.spotifyTokens = tokens;
            ctx.session.userId = user.id;

            return { success: true, user };
        } catch (error) {
            console.error(error)
            throw new TRPCError({
                code: 'INTERNAL_SERVER_ERROR',
                message: 'Authentication failed:',
                cause: error,
            });
        }
    }),
    getSession: publicProcedure.mutation(async ({ ctx }) => {
        if (!ctx.session.spotifyTokens && !ctx.session.userId) return {
            user: null,
            spotify_id: null,
            isAuthenticated: false
        }

        const user = await db.query.usersTable.findFirst({
            where: (usersTable, { eq }) => eq(usersTable.spotify_id, ctx.session.userId)
        })

        return {
            user: user,
            spotify_id: ctx.session.userId,
            isAuthenticated: !!ctx.session.spotifyTokens
        }
    })
})