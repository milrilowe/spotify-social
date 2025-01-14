import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';


if (!process.env.DATABASE_URL) throw new Error('Must declare DATABASE_URL in .local.env');

const db = drizzle(process.env.DATABASE_URL);
