import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

export const createUser = asyncHandler(async (req, res) => {
  let { email } = req.body;
  const userExists = await prisma.user.findUnique({ where: { email } });
  if (!userExists) {
    const user = await prisma.user.create({ data: req.body });
    res.status(200).send({
      message: "User created successfully",
      user: user,
    });
  } else res.status(201).send({ message: "User already created" });
});
