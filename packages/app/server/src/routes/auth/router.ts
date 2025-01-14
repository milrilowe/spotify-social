import 'dotenv/config'
import { generateRandomString } from './util';
import { publicProcedure, router } from '../../trpc';
import z from 'zod';
import { TRPCError } from '@trpc/server';

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

function buildSpotifyAuthURL() {
    let state = generateRandomString(16);
    const spotifyAuthUrl = new URL('https://accounts.spotify/authorize');

    spotifyAuthUrl.searchParams.append('client_id', SPOTIFY_CLIENT_ID);
    spotifyAuthUrl.searchParams.append('response_type', 'code');
    spotifyAuthUrl.searchParams.append('redirect_uri', SPOTIFY_REDIRECT_URI);
    spotifyAuthUrl.searchParams.append('scope', SCOPES.join(' '));
    spotifyAuthUrl.searchParams.append('state', state);

    return spotifyAuthUrl
}

const authRouter = router({
    login: publicProcedure.query(async ({ ctx }) => {
        ctx.res.redirect(buildSpotifyAuthURL().toString())
    }),
    callback: publicProcedure.input(z.object({ code: z.string() })).mutation(async ({ input, ctx }) => {
        try {
            // Exchange code for tokens
            const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Authorization: `Basic ${Buffer.from(
                        `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
                    ).toString('base64')}`,
                },
                body: new URLSearchParams({
                    grant_type: 'authorization_code',
                    code: input.code,
                    redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
                }),
            });

            if (!tokenResponse.ok) {
                throw new TRPCError({
                    code: 'UNAUTHORIZED',
                    message: 'Failed to exchange authorization code',
                });
            }

            const tokens: SpotifyTokenResponse = await tokenResponse.json();

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

            const user: SpotifyUser = await userResponse.json();

            // Store tokens and user ID in session
            ctx.session.spotifyToken = tokens;
            ctx.session.userId = user.id;

            return { success: true, user };
        } catch (error) {
            throw new TRPCError({
                code: 'INTERNAL_SERVER_ERROR',
                message: 'Authentication failed',
                cause: error,
            });
        }
    }),
})