import { table } from 'console';
import { integer, pgTable, primaryKey, text, timestamp, varchar } from 'drizzle-orm/pg-core';

export const usersTable = pgTable('users', {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    spotify_id: varchar().notNull(),
    display_name: varchar({ length: 255 }).notNull(),
    email: varchar({ length: 255 }).notNull().unique(),
});

export const sessionsTable = pgTable('sessions', {
    sid: text('sid').notNull(),
    sess: text('sess').notNull(),
    expire: timestamp('expire').notNull()
}, (table) => {
    return {
        pk: primaryKey({ columns: [table.sid] })
    }
})
