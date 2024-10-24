import { Context } from "hono";
import { prismaConnection } from "../../utils/prismaClient";

export const getBlog = async (c: Context) => {
  const prisma = prismaConnection(c)
  try {
    const id = c.req.param('id') 
    const result = await prisma.post.findUnique({
      where :{
        id : id
      }
    })

    return c.json({status : true ,  post : result})
  } catch (error) {}
  return c.json({ success: false, message: "Internal server error" });
};

export const getAllBlogs = async (c: Context) => {
  const prisma = prismaConnection(c);
  try {
    const result = await prisma.post.findMany({
      take:5  
    })
    return c.json({status :true, posts : result})
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
  c.text("createNewBlog");
  console.log(c.req.param("id"));
};
