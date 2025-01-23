import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import { publicProcedure, router } from '../../trpc';
import { SpotifyUser } from '../../types';
import { refreshToken } from '../../utils/refreshToken';

export const userRouter = router({
    me: publicProcedure.query(async ({ ctx }) => {
        if (!ctx.session.spotifyTokens) {
            throw new TRPCError({
                code: 'UNAUTHORIZED',
                message: 'Not authenticated'
            });
        }


        const spotifyUser = await fetch("https://api.spotify.com/v1/me", {
            headers: {
                Authorization: `Bearer ${ctx.session.spotifyTokens.access_token}`
            }
        });

        if (spotifyUser.status === 401) {
            throw new TRPCError({
                code: 'UNAUTHORIZED',
                message: 'unable to fetch /me (401) UNAUTHORIZED'
            })
        }

        if (!spotifyUser.ok) {
            throw new TRPCError({
                code: 'INTERNAL_SERVER_ERROR',
                message: 'error fetching /me'
            })
        }

        return await spotifyUser.json();
    }),
    getUser: publicProcedure.input(z.object({
        userId: z.string()
    })).query(async ({ ctx, input }) => {
        if (!ctx.session.spotifyTokens) {
            throw new TRPCError({
                code: 'UNAUTHORIZED',
                message: 'Not authenticated'
            });
        }

        try {
            const spotifyUserResponse = await fetch(`https://api.spotify.com/v1/users/${input.userId}`, {
                headers: {
                    Authorization: `Bearer ${ctx.session.spotifyTokens.access_token}`
                }
            });

            if (!spotifyUserResponse.ok) {
                throw new TRPCError({
                    code: 'INTERNAL_SERVER_ERROR',
                    message: 'Failed to fetch Spotify user data'
                });
            }

            const spotifyUser = await spotifyUserResponse.json() as SpotifyUser;
            return spotifyUser;
        } catch (error) {
            throw new TRPCError({
                code: 'INTERNAL_SERVER_ERROR',
                message: 'Failed to fetch user data',
                cause: error
            });
        }
    }),
});