import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  makeAOrder,
  updateProduct,
} from "../controllers/product.controller";
import auth from "../middlewares/auth";

const productRouter = Router();

productRouter.post("/make-order", makeAOrder);
productRouter.post("/add", auth, createProduct);
productRouter.delete("/delete/:id", auth, deleteProduct);
productRouter.patch("/update/:id", auth, updateProduct);

export default productRouter;
