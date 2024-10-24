import { Context } from "hono";
import { Prisma } from "@prisma/client";
import { prismaConnection } from "../../utils/prismaClient";
import { jwt, sign } from "hono/jwt";

export const signup = async (c: Context) => {
  const body = await c.req.json();
  const prisma = prismaConnection(c);
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });
    if (user) {
      c.status(403);
      return c.json({ status: false, msg: "email already exist" });
    }

    const result = await prisma.user.create({
      data: {
        email: body.email,
        name: body.name,
        password: body.password,
      },
    });
    if (result) {
      const token = await sign({ id: result.id }, c.env.SECRET_KEY);
      c.status(201);
      return c.json({ status: true, jwt: token });
    }
  } catch (error) {
    console.log(error);
    c.status(403);
    return c.json({ status: false });
  }
};

export const signin = async (c: Context) => {
  const body = await c.req.json();
  const prisma = prismaConnection(c);
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });
    if (!user) {
      c.status(403);
      return c.json({ status: false, msg: "username or password wrong" });
    }

    if (user.password !== body.password) {
      c.status(403);
      return c.json({ status: false, msg: "username or password wrong" });
    }

    const token = await sign({ id: user.id }, c.env.SECRET_KEY);
    c.status(201);
    return c.json({ status: true, jwt: token });
  } catch (error) {
    c.status(500)
    console.log(error)
    return c.json({status:false, msg:"internal server error"})
  }
};
