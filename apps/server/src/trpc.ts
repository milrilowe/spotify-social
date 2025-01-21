import { initTRPC } from "@trpc/server";
import type { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import type { AppSession } from './types';

export type Context = {
    req: CreateExpressContextOptions["req"];
    res: CreateExpressContextOptions["res"];
    session: AppSession;
};

export const t = initTRPC
    .context<Context>()
    .create();

export const router = t.router;
export const middleware = t.middleware;
export const publicProcedure = t.procedure;