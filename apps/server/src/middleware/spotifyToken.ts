import { TRPCError } from "@trpc/server";
import { Context, middleware, publicProcedure } from "../trpc";
import { refreshToken } from "../utils/refreshToken";

const spotifyTokenMiddleware = middleware(async ({ ctx, next }) => {
    if (!ctx.session.spotifyTokens) {
        throw new TRPCError({
            code: 'UNAUTHORIZED',
            message: 'Not authenticated'
        });
    }
    try {
        return await next()
    } catch (error) {
        if (error instanceof TRPCError && error.code === 'UNAUTHORIZED') {
            try {
                // Refresh tokens
                const newTokens = await refreshToken(ctx.session.spotifyTokens);
                ctx.session.spotifyTokens = newTokens;

                // Retry the original call with updated tokens
                return await next()
            } catch (refreshError) {
                // If token refresh fails, throw the original error
                throw new TRPCError({
                    code: 'UNAUTHORIZED',
                    message: 'Token refresh failed',
                });
            }
        }
        throw error; // Rethrow to allow tRPC to handle it
    }
})

export const spotifyTokenProcedure = publicProcedure.use(spotifyTokenMiddleware)