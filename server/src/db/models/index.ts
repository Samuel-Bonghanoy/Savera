import { mysqlTable, text, time, timestamp, varchar, int } from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: int("user_id").notNull().primaryKey().autoincrement(),
  username: varchar("first_name", { length: 256 }).notNull(),
  email: varchar("first_name", { length: 256 }).notNull(),
  password: varchar("last_name", { length: 50 }).notNull().default(""),
  createdAt: timestamp("created_at").notNull().defaultNow()
});

export type UserModel = typeof users.$inferSelect;
