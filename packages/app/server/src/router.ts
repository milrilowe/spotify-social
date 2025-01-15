import { router, publicProcedure } from './trpc';
import { userRouter } from './routes/user/router';
import { authRouter } from './routes/auth/router'
import { inferRouterInputs, inferRouterOutputs } from '@trpc/server';

export const appRouter = router({
    user: userRouter,
    auth: authRouter
},
);

export type AppRouter = typeof appRouter;
export type RouterInputs = inferRouterInputs<AppRouter>;
export type RouterOutputs = inferRouterOutputs<AppRouter>;