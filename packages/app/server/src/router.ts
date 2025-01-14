import { router, publicProcedure } from './trpc';
import { userRouter } from './routes/user/router';

export const appRouter = router({
    user: userRouter
},
);

export type AppRouter = typeof appRouter;
