import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const users = sqliteTable('users', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	login: text('login').notNull().unique(),
	password: text('password').notNull(),
	roles: text().default("ROLE_USER"),
})

export const edt = sqliteTable('edt', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	name: text('name').notNull().unique(),
	url: text('url').notNull().unique(),
})
