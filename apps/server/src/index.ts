import express from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import cors from 'cors';
import 'dotenv/config';
import { appRouter } from './router';
import { createContext } from './trpc';
import session from 'express-session';
import pgSession from 'connect-pg-simple';
import { Pool } from 'pg';

export type { AppRouter, RouterInputs, RouterOutputs } from './types';

const PORT = process.env.PORT || 3000;

const app = express();

const sessionPool = new Pool({
  max: 5,
  connectionString: process.env.DATABASE_URL
})

app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}))

app.use(
  session({
    store: new (pgSession(session))({
      pool: sessionPool,
      tableName: 'sessions',
      pruneSessionInterval: 60 * 60
    }),
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

