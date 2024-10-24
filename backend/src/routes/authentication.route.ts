import { Hono } from "hono";
import { signup,signin} from "../controller/auth.controller";

const auth= new Hono()


auth.post('/signup', signup)
auth.post('/signin',signin)


export default auth