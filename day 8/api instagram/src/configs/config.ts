/** @format */

import { CorsOptions } from "cors";
import "dotenv/config";
export const PORT = process.env.PORT || 8000;
export const SECRET_KEY = process.env.SECRET_KEY || "";

export const corsOptions: CorsOptions = {
  origin: ["http://localhost:3000"],
  credentials: true,
};
