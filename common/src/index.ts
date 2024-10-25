import { string, z } from "zod";


export const signupInput = z.object({
  email: z.string().email({ message: "invalid email Address" }).toLowerCase(),
  name: z.string({
    required_error: "Name is required",
  }),
  password: z
    .string()
    .min(8, { message: "Password should have atleast 8 charachter" }),
});

export type signupInput = z.infer<typeof signupInput>

export const signinInput = z.object({
  email: z.string().email({ message: "invalid email Address" }).toLowerCase(),
  password: z.string( {required_error: "password is required"}),
});

export type signinInput = z.infer<typeof signinInput>


export const createPost = z.object({
    title : z.string(),
    content : z.string()
})

export type createPost = z.infer<typeof createPost>


export const updatePost = z.object({
    title: z.string().optional(),
    content: z.string().optional(),
    published : z.boolean().optional()
    
})


export type updatePost = z.infer<typeof updatePost>

