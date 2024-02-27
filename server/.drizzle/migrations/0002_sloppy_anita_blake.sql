ALTER TABLE `budgets` MODIFY COLUMN `account_id` int NOT NULL;--> statement-breakpoint
ALTER TABLE `expenses` MODIFY COLUMN `expense_type_id` int NOT NULL;--> statement-breakpoint
ALTER TABLE `incomes` MODIFY COLUMN `income_type_id` int NOT NULL;--> statement-breakpoint
ALTER TABLE `incomes` MODIFY COLUMN `amount` int NOT NULL;