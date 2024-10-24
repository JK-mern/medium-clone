import { Hono } from "hono";
import { createNewBlog, getAllBlogs, getBlog, updateBlog } from "../controller/blog.controller";

const blog= new Hono()

blog.get('/:id', getBlog)
blog.get('/all',getAllBlogs)
blog.post('/newBlog',createNewBlog)
blog.put('/:id' , updateBlog)


export default blog