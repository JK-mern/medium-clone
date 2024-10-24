import { createMiddleware } from "hono/factory";
import { verify } from "hono/jwt";

export const jwtVerify = createMiddleware(async (c, next) => {
  const jwt = c.req.header("Authorization");
  if (!jwt) {
    return c.json({ status: false, msg: "Please Login" });
  }
  const token = jwt.split(" ")[1];
  const userId = await verify(token, c.env.SECRET_KEY);
  console.log(userId)
  if (!userId.id) {
    return c.json({ status: false, msg: "Please Login" });
  }
  c.set('userId',userId.id)
  
  await next()
});
