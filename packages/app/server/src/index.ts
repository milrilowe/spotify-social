import express from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import cors from 'cors';
import 'dotenv/config';
import { appRouter } from './router';
import { createContext } from './trpc';
import session from 'express-session';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}))

app.use(
  session({
    secret: 'dev-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === 'production',
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    },
  })
);


app.use(
  '/api',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext
  })
)

app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});

export type AppRouter = typeof appRouter;