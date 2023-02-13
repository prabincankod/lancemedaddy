import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRouter from "./routes/auth.route";
import todoRouter from "./routes/todo.route";
import productRouter from "./routes/product.route";
dotenv.config();

const port = process.env.PORT || 3000;
const app: Express = express();
app.use(express.json());
app.use(cors());

app.get("/", async (req: Request, res: Response) => {
  res.status(200).json({ message: "alive" });
});
app.use("/auth", authRouter);
app.use("/todo", todoRouter);
app.use("/product", productRouter);

app.listen(port, () => {
  console.log(`💻[server]: Server is running at http://localhost:${port}`);
});
