import { Router } from "express";
import auth from "../middlewares/auth";

const productRouter = Router();
productRouter.post("/make-order");
productRouter.post("/add", auth);
productRouter.delete("/delete/:id", auth);
productRouter.patch("update/:id", auth);

export default productRouter;
