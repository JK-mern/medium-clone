import { Context } from "hono"
export const signup =  async(c:Context) =>{
    c.text('signup')
}


export const signin = async (c:Context) =>{
    c.text('signin')
}