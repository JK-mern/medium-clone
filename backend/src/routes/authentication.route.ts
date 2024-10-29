import { Hono } from "hono";
import { signup,signin, getUser} from "../controller/auth.controller";
import { jwtVerify } from "../../utils/jwtverify";

const auth= new Hono()


auth.post('/signup', signup)
auth.post('/signin',signin)
auth.get('/me',jwtVerify,getUser)


export default auth