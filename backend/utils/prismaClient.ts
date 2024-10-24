import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Context } from "hono";



export const prismaConnection = (c: Context) => {
 
    const prisma = new PrismaClient({
      datasources: {
        db: {
          url: c.env.DATABASE_URL,  // Correct way to pass datasource URL
        },
      },
    }).$extends(withAccelerate());
  
  return prisma;
};
