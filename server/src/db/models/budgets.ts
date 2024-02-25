import { mysqlTable, timestamp, varchar, int, float } from "drizzle-orm/mysql-core";
import { accounts } from "./accounts";
import { users } from "./users";

export const budgets = mysqlTable("budgets", {
  id: int("expense_id").notNull().primaryKey().autoincrement(),
  goalAmount: float("goal_amount").notNull(),
  name: varchar("description", { length: 256 }).notNull(),
  userId: int("user_id")
    .notNull()
    .autoincrement()
    .references(() => users.id),
  accountId: int("account_id")
    .notNull()
    .autoincrement()
    .references(() => accounts.id),
  startDate: timestamp("start_date").defaultNow(),
  endDate: timestamp("end_date").notNull()
});

export type budgetsModel = typeof budgets.$inferSelect;
