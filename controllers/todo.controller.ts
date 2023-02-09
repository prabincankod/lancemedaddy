import { Request, Response } from "express";

import { prismaClient } from "../prisma/client";

const createTodo = async (req: Request, res: Response) => {
  try {
    const { name, status } = req.body;
    // @ts-ignore
    console.log(req?.id);
    console.log(status);

    if (
      status !== ("DONE" || "INIT" || "PROGRESS" || "TEST") &&
      status !== undefined
    ) {
      return res.send({ message: `${status} is not a valid status` });
    }
    const todo = await prismaClient.todo.create({
      // @ts-ignore
      data: { name, userId: req.id, status },
    });
    res.send(todo);
  } catch (error) {
    res.status(401).send(error);
  }
};

const deleteTodo = async (req: Request, res: Response) => {
  try {
    const todo = await prismaClient.todo.findUnique({
      where: {
        id: parseInt(req.params.id),
      },
    });

    // @ts-ignore
    if (todo?.userId === req?.id) {
      await prismaClient.todo.delete({
        where: {
          id: parseInt(req.params.id),
        },
      });
      res.send({ message: "todo deleted suggesfully" });
    } else {
      return res.status(402).send({ message: "not your piece of cake" });
    }
  } catch (error) {
    res.status(401).send(error);
  }
};

export { createTodo, deleteTodo };
