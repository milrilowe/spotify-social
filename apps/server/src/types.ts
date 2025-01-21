import { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import { appRouter } from './router';
import type { Session } from "express-session";

export type AppRouter = typeof appRouter;
export type RouterInputs = inferRouterInputs<AppRouter>;
export type RouterOutputs = inferRouterOutputs<AppRouter>;

export interface AppSession extends Session {
    spotifyTokens?: SpotifyTokenResponse;
    userId?: string;
}

export interface SpotifyTokenResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
    refresh_token: string;
    scope: string;
}

export interface SpotifyUser {
    id: string;
    email: string;
    display_name: string;
    images: Image[];
    country: string;
}

export interface Image {
    url: string,
    height: number,
    width: number
}