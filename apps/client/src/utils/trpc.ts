import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter, RouterOutputs, RouterInputs } from '@spotify-social/api';

export const api = createTRPCReact<AppRouter>();
export type { RouterOutputs, RouterInputs };