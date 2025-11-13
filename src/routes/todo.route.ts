import express from "express" ;
import { createTodoController, deleteTodoController, getTodoController, updateTodoContorller } from "../controllers/todo.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

export const router = express.Router()

router.post("/",authMiddleware,createTodoController)

router.patch("/:id",authMiddleware,updateTodoContorller)

router.delete("/:id",authMiddleware,deleteTodoController)

router.get("/",authMiddleware,getTodoController)