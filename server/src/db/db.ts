import { drizzle } from "drizzle-orm/postgres-js";
import * as models from "./models";
import { poolConnection } from "./config/db.config";

export const db = drizzle(poolConnection, { schema: models, logger: true });
