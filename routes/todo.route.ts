import { Router } from "express";
import { createTodo, deleteTodo } from "../controllers/todo.controller";
import auth from "../middlewares/auth";

const todoRouter = Router();

todoRouter.post("/add", auth, createTodo);
todoRouter.delete("/delete/:id", auth, deleteTodo);

export default todoRouter;
