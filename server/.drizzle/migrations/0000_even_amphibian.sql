CREATE TABLE `accounts` (
	`account_id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(256) NOT NULL,
	`user_id` int NOT NULL,
	CONSTRAINT `accounts_account_id` PRIMARY KEY(`account_id`)
);
--> statement-breakpoint
CREATE TABLE `budgets` (
	`expense_id` int AUTO_INCREMENT NOT NULL,
	`goal_amount` float NOT NULL,
	`description` varchar(256) NOT NULL,
	`user_id` int NOT NULL,
	`account_id` int NOT NULL,
	`start_date` timestamp DEFAULT (now()),
	`end_date` timestamp DEFAULT (now()) NOT NULL,
	CONSTRAINT `budgets_expense_id` PRIMARY KEY(`expense_id`)
);
--> statement-breakpoint
CREATE TABLE `expenses` (
	`expense_id` int AUTO_INCREMENT NOT NULL,
	`amount` float NOT NULL,
	`description` varchar(256) NOT NULL,
	`expense_type_id` int NOT NULL,
	CONSTRAINT `expenses_expense_id` PRIMARY KEY(`expense_id`)
);
--> statement-breakpoint
CREATE TABLE `expense_types` (
	`expense_type_id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(256) NOT NULL,
	`user_id` int NOT NULL,
	CONSTRAINT `expense_types_expense_type_id` PRIMARY KEY(`expense_type_id`)
);
--> statement-breakpoint
CREATE TABLE `incomes` (
	`income_id` int AUTO_INCREMENT NOT NULL,
	`amount` float NOT NULL,
	`description` varchar(256) NOT NULL,
	`income_type_id` int NOT NULL,
	CONSTRAINT `incomes_income_id` PRIMARY KEY(`income_id`)
);
--> statement-breakpoint
CREATE TABLE `income_types` (
	`income_type_id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(256) NOT NULL,
	`user_id` int NOT NULL,
	CONSTRAINT `income_types_income_type_id` PRIMARY KEY(`income_type_id`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`user_id` int AUTO_INCREMENT NOT NULL,
	`first_name` varchar(256) NOT NULL,
	`last_name` varchar(50) NOT NULL DEFAULT '',
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `users_user_id` PRIMARY KEY(`user_id`)
);
--> statement-breakpoint
ALTER TABLE `accounts` ADD CONSTRAINT `accounts_user_id_users_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `budgets` ADD CONSTRAINT `budgets_user_id_users_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `budgets` ADD CONSTRAINT `budgets_account_id_accounts_account_id_fk` FOREIGN KEY (`account_id`) REFERENCES `accounts`(`account_id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `expenses` ADD CONSTRAINT `expenses_expense_type_id_expense_types_expense_type_id_fk` FOREIGN KEY (`expense_type_id`) REFERENCES `expense_types`(`expense_type_id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `expense_types` ADD CONSTRAINT `expense_types_user_id_users_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `incomes` ADD CONSTRAINT `incomes_income_type_id_income_types_income_type_id_fk` FOREIGN KEY (`income_type_id`) REFERENCES `income_types`(`income_type_id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `income_types` ADD CONSTRAINT `income_types_user_id_users_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`) ON DELETE no action ON UPDATE no action;