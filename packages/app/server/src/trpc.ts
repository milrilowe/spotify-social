import { initTRPC } from "@trpc/server";
import { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import { Session } from "express-session";
import { SpotifyTokenResponse } from './routes/auth/types';

interface AppSession extends Session {
    spotifyTokens?: SpotifyTokenResponse;
    userId?: string;
}

export const createContext = ({
    req,
    res,
}: CreateExpressContextOptions) => ({ req, res, session: req.session as AppSession });

type Context = Awaited<ReturnType<typeof createContext>>;

const t = initTRPC.context<Context>().create();

export const createCallerFactory = t.createCallerFactory;
export const router = t.router;
export const middleware = t.middleware;
export const publicProcedure = t.procedure;