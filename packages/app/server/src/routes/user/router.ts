
import { publicProcedure, router } from '../../trpc';

export const userRouter = router({
    getUser: publicProcedure.query(async ({ ctx }) => {
        try {
            // Connect to the database
            // console.log(ctx.session.spotifyTokens, ctx.session.id)
            // Perform aggregation query
            return "Hello World!";
        } catch (error) {
            console.error('Error fetching users:', error);
            throw new Error('Failed to fetch users'); // Or use a custom TRPC error
        }
    }),
});
