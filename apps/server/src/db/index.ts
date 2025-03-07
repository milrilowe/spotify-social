import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema'

if (!process.env.DATABASE_URL) throw new Error('Must declare DATABASE_URL in .local.env');

export const db = drizzle(process.env.DATABASE_URL, { schema });
