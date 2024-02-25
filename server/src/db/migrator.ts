import { migrate } from "drizzle-orm/mysql2/migrator";
import { drizzle } from "drizzle-orm/mysql2";
import path from "path";
import { poolConnection } from "./config/db.config";

migrate(drizzle(poolConnection), {
  migrationsFolder: path.resolve(".drizzle", "migrations")
}).then(() => console.log("migration success"));
