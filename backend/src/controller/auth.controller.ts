import { Context } from "hono";
import { Prisma } from "@prisma/client";
import { prismaConnection } from "../../utils/prismaClient";
import { jwt, sign } from "hono/jwt";
import { signinInput, signupInput } from "@jayakrishnan_s/medium-common-app";

export const signup = async (c: Context) => {
  const body = await c.req.json();
  const prisma = prismaConnection(c);
  try {
    const { success, error } = signupInput.safeParse(body);
    if (!success) {
      return c.json({ status: false, msg: error.errors[0].message });
    }
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
    c.status(403);
    return c.json({ status: false });
  }
};

export const signin = async (c: Context) => {
  const body = await c.req.json();
  const prisma = prismaConnection(c);
  try {
    const { success, error } = signinInput.safeParse(body);
    if (!success) {
      return c.json({ status: false, msg: error.errors[0].message });
    }
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
    c.status(500);
    return c.json({ status: false, msg: "internal server error" });
  }
};

export const getUser = async (c: Context) => {
  const prisma = prismaConnection(c);
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: c.get("userId"),
      },
    });
    if (!user) {
      return c.json({ status: false, msg: "Please Login" });
    }
    const userData = await prisma.user.findUnique({
      where: {
        id: c.get("userId"),
      },
      select: {
        id: true,
        email: true,
        name: true,
        posts: true,
      },
    });

    if (userData) {
      return c.json({ status: true, user: userData });
    }
  } catch (error) {
    c.status(500);
    return c.json({ status: false, msg: "internal server error" });
  }
};
