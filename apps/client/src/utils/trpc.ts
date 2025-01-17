import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter, RouterOutputs, RouterInputs } from '../../../server/src/router';

export const api = createTRPCReact<AppRouter>();
export type { RouterOutputs, RouterInputs };