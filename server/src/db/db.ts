// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { drizzle } from "drizzle-orm/mysql2";
import * as models from "./models";
import { poolConnection } from "./config/db.config";

export const db = drizzle(poolConnection, { schema: models, mode: "default" });
