import { Router } from "express";
import {
  createTodo,
  deleteTodo,
  updateTodo,
} from "../controllers/todo.controller";
import auth from "../middlewares/auth";

const todoRouter = Router();

todoRouter.post("/add", auth, createTodo);
todoRouter.delete("/delete/:id", auth, deleteTodo);
todoRouter.patch("/update/:id", auth, updateTodo);

export default todoRouter;
