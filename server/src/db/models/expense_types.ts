import { mysqlTable, timestamp, varchar, int, float } from "drizzle-orm/mysql-core";
import { users } from "./users";

export const expenseTypes = mysqlTable("expense_types", {
  id: int("expense_type_id").notNull().primaryKey().autoincrement(),
  name: varchar("name", { length: 256 }).notNull(),
  userId: int("user_id")
    .notNull()
    .references(() => users.id)
});

export type expenseTypeModel = typeof expenseTypes.$inferSelect;
