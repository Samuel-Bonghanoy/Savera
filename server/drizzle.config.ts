import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db/models",
  out: "./.drizzle/migrations",
  driver: "mysql2"
} satisfies Config;
