import { publicProcedure, router } from '../../trpc';
import { z } from 'zod'; // Add if not already imported

// Add a type for what getUser returns
export const userRouter = router({
    getUser: publicProcedure
        .output(z.object({  // Add output validation
            id: z.string(),
            name: z.string(),
            email: z.string()
            // add other fields you expect
        }))
        .query(async ({ ctx }) => {
            try {
                // Your implementation...
                return {
                    id: "1",
                    name: "Test User",
                    email: "test@example.com"
                };
            } catch (error) {
                console.error('Error fetching users:', error);
                throw new Error('Failed to fetch users');
            }
        }),
});