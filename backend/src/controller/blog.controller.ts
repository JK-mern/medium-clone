import { Context } from "hono";
import { prismaConnection } from "../../utils/prismaClient";

export const getBlog = async (c: Context) => {
  const prisma = prismaConnection(c);
  try {
    const id = c.req.param("id");
    const result = await prisma.post.findUnique({
      where: {
        id: id,
      },
    });

    return c.json({ status: true, post: result });
  } catch (error) {}
  return c.json({ success: false, message: "Internal server error" });
};

export const getAllBlogs = async (c: Context) => {
  const prisma = prismaConnection(c);
  try {
    const result = await prisma.post.findMany({
      take: 5,
    });
    return c.json({ status: true, posts: result });
  } catch (error) {
    return c.json({ status: false, msg: "internal Server error" }, 500);
  }
};

export const createNewBlog = async (c: Context) => {
  const body = await c.req.json();
  const prisma = prismaConnection(c);
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: c.get("userId"),
      },
    });
    if (!user) {
      return c.json({ status: false, msg: "Unauthorized user" });
    }
    const result = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        published: body.published,
        authorId: user.id,
      },
    });

    if (!result)
      return c.json({ status: false, msg: "Unauthorized user" }, 403);

    return c.json({ status: true, msg: "Post created successfully" });
  } catch (error) {
    return c.json({ status: false, msg: "internal Server error" }, 500);
  }
};

export const updateBlog = async (c: Context) => {
  const id = c.req.param("id");
  const userId = c.get("userId");
  const prisma = prismaConnection(c);
  try {
    const body = await c.req.json();
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      return c.json({ status: false, msg: "Please Login to update Details" });
    }

    const update = await prisma.post.update({
      where : {
        id : id
      }, 
      data : {
        title : body.title || undefined,
        content : body.content || undefined,
        published : body.published || undefined
      }
    })
    return c.json({status : true, msg:"Post updated Successfully"})
  } catch (error) {
    return c.json({ status: false, msg: "Please Login to update Details" });
  }
};
