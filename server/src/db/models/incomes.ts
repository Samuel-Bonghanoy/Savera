import { mysqlTable, timestamp, varchar, int, float } from "drizzle-orm/mysql-core";

export const incomes = mysqlTable("incomes", {
  id: int("income_id").notNull().primaryKey().autoincrement(),
  amount: float("amount").notNull(),
  description: varchar("first_name", { length: 256 }).notNull(),
  incomeTypeId: int("income_type_id").notNull().autoincrement()
});

export type UserModel = typeof incomes.$inferSelect;
