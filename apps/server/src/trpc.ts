import { initTRPC, MiddlewareFunction, TRPCError, type inferRouterInputs, type inferRouterOutputs } from "@trpc/server";
import type { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import type { Session } from "express-session";
import { refreshToken } from "./utils/refreshToken";

export interface SpotifyTokenResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
    refresh_token: string;
    scope: string;
}

export interface AppSession extends Session {
    spotifyTokens?: SpotifyTokenResponse;
    userId?: string;
}

export type Context = CreateExpressContextOptions & {
    session: AppSession;
};

export const t = initTRPC.context<Context>().create();

export const router = t.router;
export const middleware = t.middleware;
export const publicProcedure = t.procedure;

export const createContext = ({
    req,
    res,
}: CreateExpressContextOptions): Context => {
    return {
        req,
        res,
        session: (req as any).session as AppSession
    }
};