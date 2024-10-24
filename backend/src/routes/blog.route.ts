    import { Hono } from "hono";
    import { createNewBlog, getAllBlogs, getBlog, updateBlog } from "../controller/blog.controller";
    import { jwtVerify } from "../../utils/jwtverify";

    const blog= new Hono()

    blog.get('/bulk',getAllBlogs)
    blog.get('/:id',jwtVerify, getBlog)
    blog.post('/newBlog',jwtVerify,createNewBlog)
    blog.put('/:id',jwtVerify,updateBlog)


    export default blog