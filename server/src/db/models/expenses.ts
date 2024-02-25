import { mysqlTable, timestamp, varchar, int, float } from "drizzle-orm/mysql-core";
import { expenseTypes } from "./expense_types";

export const expenses = mysqlTable("expenses", {
  id: int("expense_id").notNull().primaryKey().autoincrement(),
  amount: float("amount").notNull(),
  description: varchar("description", { length: 256 }).notNull(),
  incomeTypeId: int("expense_type_id")
    .notNull()
    .references(() => expenseTypes.id)
});

export type expensesModel = typeof expenses.$inferSelect;
