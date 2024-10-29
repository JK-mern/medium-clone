    import { Hono } from "hono";
    import { createNewBlog, deleteBlog, getAllBlogs, getBlog, updateBlog } from "../controller/blog.controller";
    import { jwtVerify } from "../../utils/jwtverify";

    const blog= new Hono()

    blog.get('/bulk',getAllBlogs)
    blog.get('/:id',jwtVerify, getBlog)
    blog.post('/newBlog',jwtVerify,createNewBlog)
    blog.put('/:id',jwtVerify,updateBlog)
    blog.delete('/delete/:id',jwtVerify,deleteBlog)


    export default blog