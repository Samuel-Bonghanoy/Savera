import { migrate } from "drizzle-orm/mysql2/migrator";
import path from "path";
import { poolConnection } from "./config/db.config";

migrate(poolConnection, {
  migrationsFolder: path.resolve(".drizzle", "migrations")
});
