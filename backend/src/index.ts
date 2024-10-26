import { Hono } from "hono";
import authenticationRoute from "./routes/authentication.route";
import blogRoute from "./routes/blog.route";
import { cors } from "hono/cors";
const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    SECRET_KEY: string;
  };
}>();

app.use('/*', cors())
app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.route("/api/v1/auth", authenticationRoute);
app.route("/api/v1/blog", blogRoute);

export default app;
