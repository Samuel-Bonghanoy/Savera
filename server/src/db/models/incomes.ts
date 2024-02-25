import { mysqlTable, timestamp, varchar, int, float } from "drizzle-orm/mysql-core";
import { incomeTypes } from "./income_types";

export const incomes = mysqlTable("incomes", {
  id: int("income_id").notNull().primaryKey().autoincrement(),
  amount: float("amount").notNull(),
  description: varchar("description", { length: 256 }).notNull(),
  incomeTypeId: int("income_type_id")
    .notNull()
    .autoincrement()
    .references(() => incomeTypes.id)
});

export type incomeModel = typeof incomes.$inferSelect;
