import { Context } from "hono";
import { prismaConnection } from "../../utils/prismaClient";
import { createPost, updatePost } from "@jayakrishnan_s/medium-common-app";
import { getFormattedDate } from "../../utils/getDate";

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
      include: {
        author: {
          select: {
            name: true,
          },
        },
      },
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
    const { success, error } = createPost.safeParse(body);
    if (!success) {
      return c.json({ status: false, msg: error.errors[0].message });
    }
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
        publishedDate: getFormattedDate(),
      },
    });

    if (!result)
      return c.json({ status: false, msg: "Unauthorized user" }, 403);

    return c.json({ status: true, msg: "Post created successfully",id : result.id});
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
    const { success, error } = updatePost.safeParse(body);
    if (!success) {
      return c.json({ status: false, msg: error.errors[0].message });
    }
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      return c.json({ status: false, msg: "Please Login to update Details" });
    }

    const update = await prisma.post.update({
      where: {
        id: id,
        authorId: user.id,
      },
      data: {
        title: body.title || undefined,
        content: body.content || undefined,
        published: body.published || undefined,
      },
    });
    return c.json({ status: true, msg: "Post updated Successfully", id : update.id});
  } catch (error) {
    return c.json({ status: false, msg: "Please Login to update Details" });
  }
};

export const deleteBlog = async (c: Context) => {
  try {
    const userId = c.get("userId");
    const deleteId = c.req.param("id")
    const prisma = prismaConnection(c);
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      return c.json({ status: false, msg: "Please Login to update Details" });
    }

    const deleted = await prisma.post.delete({
      where :{
        id : deleteId
      }
    })

    return c.json({status : true , id : deleted.id})
  } catch (error) {
    return c.json({ status: false, msg: "Please Login to update Details" });
  }
};
