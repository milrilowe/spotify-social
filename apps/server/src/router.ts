import { router } from './trpc';
import { userRouter } from './routes/user/router';
import { authRouter } from './routes/auth/router';

export const appRouter = router({
    user: userRouter,
    auth: authRouter,
});

export type AppRouter = typeof appRouter;