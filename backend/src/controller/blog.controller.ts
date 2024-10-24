import { Context } from "hono";

export const getBlog = async (c: Context) => {
  console.log(c.req.param("id"));
  c.text("get particular blog");
};

export const getAllBlogs = async (c: Context) => {
  c.text("get all blogs");
};

export const createNewBlog = async (c: Context) => {
  c.text("createNewBlog");
};

export const updateBlog = async (c: Context) => {
  c.text("createNewBlog");
  console.log(c.req.param("id"))
};
