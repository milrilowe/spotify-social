import { table } from 'console';
import { relations } from 'drizzle-orm';
import { integer, pgTable, primaryKey, text, timestamp, varchar } from 'drizzle-orm/pg-core';

export const usersTable = pgTable('users', {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    spotify_id: varchar().notNull(),
    display_name: varchar({ length: 255 }).notNull(),
    email: varchar({ length: 255 }).notNull().unique(),
    avatar: text(),
    country: text(),
    bio: text()
});

export const userRelations = relations(usersTable, ({ many }) => ({
    followers: many(followsTable),
    following: many(followsTable)
}))

export const followsTable = pgTable('followers', {
    follower_id: integer()
        .notNull()
        .references(() => usersTable.id, { onDelete: 'cascade' }),
    following_id: integer()
        .notNull()
        .references(() => usersTable.id, { onDelete: 'cascade' }),
    created_at: timestamp()
        .notNull()
        .defaultNow()
}, (table) => ({
    pk: primaryKey({ columns: [table.follower_id, table.following_id] })
}))

export const followsRelations = relations(followsTable, ({ one }) => ({
    follower: one(usersTable, {
        fields: [followsTable.follower_id],
        references: [usersTable.id]
    }),
    following: one(usersTable, {
        fields: [followsTable.following_id],
        references: [usersTable.id]
    })
}))

export const sessionsTable = pgTable('sessions', {
    sid: text('sid').primaryKey().notNull(),
    sess: text('sess').notNull(),
    expire: timestamp('expire').notNull()
});