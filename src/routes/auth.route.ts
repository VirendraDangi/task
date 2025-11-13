import express from "express" ;
import { LoginController, logoutController, RegisterController } from "../controllers/auth.controller.js";

export const router = express() ;

router.post("/register",RegisterController) ,

router.post("/login",LoginController)

router.get("/logout",logoutController)