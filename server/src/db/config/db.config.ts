import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

export const poolConnection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});
