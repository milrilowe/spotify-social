
import { publicProcedure, router } from '../../trpc';

export const userRouter = router({
    getUser: publicProcedure.query(async () => {
        try {
            // Connect to the database

            // Perform aggregation query
            return "Hello World!";
        } catch (error) {
            console.error('Error fetching users:', error);
            throw new Error('Failed to fetch users'); // Or use a custom TRPC error
        }
    }),
});
