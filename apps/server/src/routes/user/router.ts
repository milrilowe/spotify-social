
import { z } from 'zod';
import { publicProcedure, router } from '../../trpc';
import { SpotifyUser } from '../auth/types';

export const userRouter = router({
    me: publicProcedure.query(async ({ ctx }) => {
        try {
            const spotifyUser = await fetch("https://api.spotify.com/v1/me", {
                headers: {
                    Authorization: `Bearer ${ctx.session.spotifyTokens?.access_token}`
                }
            })
            return await spotifyUser.json()
        } catch (error) {
            console.error(error)
        }
    }),
    getUser: publicProcedure.input(z.object({
        userId: z.string()
    })).query(async ({ ctx, input }) => {
        try {
            const spotifyUserResponse = await fetch(`https://api.spotify.com/v1/users/${input.userId}`, {
                headers: {
                    Authorization: `Bearer ${ctx.session.spotifyTokens?.access_token}`
                }
            })

            const spotifyUser = await spotifyUserResponse.json() as SpotifyUser
            return spotifyUser

        } catch (error) {
            console.error('Error fetching users:', error);
            throw new Error('Failed to fetch users'); // Or use a custom TRPC error
        }
    }),
});
