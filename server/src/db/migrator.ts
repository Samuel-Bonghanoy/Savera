import { migrate } from "drizzle-orm/mysql2/migrator";
import { poolConnection } from "./config/db.config";
import path from "path";
import { db } from "./db";

migrate(db, {
  migrationsFolder: path.resolve(".drizzle", "migrations")
}).then(() => {
  poolConnection.end();
  console.log("migration success");
});
