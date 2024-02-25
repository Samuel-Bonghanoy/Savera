import { mysqlTable, timestamp, varchar, int, float } from "drizzle-orm/mysql-core";
import { users } from "./users";

export const accounts = mysqlTable("accounts", {
  id: int("account_id").notNull().primaryKey().autoincrement(),
  name: varchar("name", { length: 256 }).notNull(),
  userId: int("user_id")
    .notNull()
    .references(() => users.id)
});

export type accountModel = typeof accounts.$inferSelect;
