import { Hono } from 'hono'
import authenticationRoute from './routes/authentication.route'
import blogRoute from './routes/blog.route'
const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})


app.route('/api/v1/auth' ,authenticationRoute)
app.route('/api/v1/blog' ,blogRoute)


export default app
