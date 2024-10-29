import { UserRound } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { BlogCardProps } from "@/types/types";
import { Link } from "react-router-dom";

function BlogCard({ blogpost }: BlogCardProps) {
  return (
    <div>
      <main>
        <div className="flex flex-col max-w-screen-md  mx-auto  mt-5 space-y-8  ">
          <Card className="border border-gray-200 shadow-none ">
            <CardHeader className="flex  flex-row items-center gap-3 space-y-0">
              <Avatar className="bg-gray-50 rounded-full p-3  ">
                <AvatarFallback>
                  {" "}
                  <UserRound className="h-6 w-5 text-black" />
                </AvatarFallback>
              </Avatar>
              <div className="">
                <h4 className="text-md font-medium">{blogpost.author.name}</h4>
                <p className="text-sm  text-muted-foreground">
                  {blogpost.publishedDate}
                </p>
              </div>
            </CardHeader>
            <CardContent className="">
              <Link to={`/blog/${blogpost.id}`}>
                <h2 className="text-xl mb-2  font-bold leading-tight cursor-pointer hover:underline ">
                  {blogpost.title}
                </h2>
              </Link>
              <p className="text-sm  text-muted-foreground space-y-3 line-clamp-3">
                {blogpost.content}.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

export default BlogCard;
