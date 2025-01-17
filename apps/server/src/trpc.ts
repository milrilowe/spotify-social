import { initTRPC, type inferRouterInputs, type inferRouterOutputs } from "@trpc/server";
import type { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import type { Session } from "express-session";
import type { SpotifyTokenResponse } from './routes/auth/types';

interface AppSession extends Session {
    spotifyTokens?: SpotifyTokenResponse;
    userId?: string;
}


export type Context = {
    req: CreateExpressContextOptions["req"];
    res: CreateExpressContextOptions["res"];
    session: AppSession;
};

const t = initTRPC.context<Context>().create();

type ContextType = {
    req: CreateExpressContextOptions['req'];
    res: CreateExpressContextOptions['res'];
    session: AppSession;
}

export const createContext = ({
    req,
    res,
}: CreateExpressContextOptions): ContextType => ({
    req,
    res,
    session: (req as any).session as AppSession
});

export const router = t.router;
export const middleware = t.middleware;
export const publicProcedure = t.procedure;

// Add these exports for type inference
export type { CreateExpressContextOptions };