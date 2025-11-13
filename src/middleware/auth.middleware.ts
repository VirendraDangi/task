import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import type { JwtUserPayload } from "../types/jwtPayload.js";


export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {

  const token = req.cookies.token || req.headers.authorization?.split(" ")[1] ;

   console.log(token,"token");
   
  if (!token) {
    return res.status(401).json({
      message: "Unauthorized"
    })
  }

  try {

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtUserPayload;


    const user = decoded;


    req.user = user;

    next();

  } catch (err) {
    return res.status(401).json({
      message: "Invalid token"
    })
  }



}