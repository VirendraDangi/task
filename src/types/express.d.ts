import jwt, { type JwtPayload } from "jsonwebtoken";
import type { JwtUserPayload } from "./jwtPayload.js";

declare global {
  namespace Express {
    interface Request {
      user?:JwtUserPayload
    }
  }
}
