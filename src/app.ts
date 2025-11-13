import dotenv from"dotenv" ;
dotenv.config()
import express from "express" ;
import { router as todoRoutes } from "./routes/todo.route.js";
import { router as authRoutes } from "./routes/auth.route.js";
import cors from "cors"
import cookieParser from "cookie-parser";


export const app = express() ;

app.use(cors({
     origin:"http://localhost:5173",
     credentials:true
}))

app.use(express.json())
app.use(cookieParser());

app.use("/api/v1/auth",authRoutes)
app.use("/api/v1/todo",todoRoutes)

