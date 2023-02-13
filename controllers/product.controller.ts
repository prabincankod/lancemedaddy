import { Request, Response } from "express";
import { prismaClient } from "../prisma/client";

const makeAOrder = async (req: Request, res: Response) => {
  try {
    const { address, orderedBy, products } = req.body;
    if (!address || !orderedBy || !products) {
      return res.status(400).send("Please provide all the required fields");
    }
    const order = await prismaClient.order.create({
      data: { address, orderedBy, products: { connect: products } },
    });
    res.send(order);
  } catch (error) {
    res.send(error);
  }
};
const createProduct = async (req: Request, res: Response) => {
  try {
    const { price, name } = req.body;
    if (!price || !name) {
      return res.status(400).send("Please provide all the required fields");
    }
    const product = await prismaClient.product.create({
      data: { price, name },
    });
    res.send(product);
  } catch (error) {
    res.status(401).send(error);
  }
};
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send("Please provide all the required fields");
    }
    const product = await prismaClient.product.delete({
      where: { id: parseInt(id) },
    });
    res.send(product);
  } catch (error) {
    res.status(401).send(error);
  }
};
const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { price, name } = req.body;
    if (!id || !price || !name) {
      return res.status(400).send("Please provide all the required fields");
    }
    const product = await prismaClient.product.update({
      where: { id: parseInt(id) },
      data: { price, name },
    });
    res.send(product);
  } catch (error) {
    res.status(401).send(error);
  }
};

export { makeAOrder, createProduct, deleteProduct, updateProduct };
