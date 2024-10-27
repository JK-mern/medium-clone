import { UserRound } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback} from "@radix-ui/react-avatar";

function BlogCard() {
  return (
    <div>
      <main>
        <div className="flex flex-col max-w-screen-md  mx-auto  mt-5 ">
          <Card className="border border-gray-200 shadow-none">
            <CardHeader className="flex  flex-row items-center gap-3 space-y-0">
              <Avatar className="bg-gray-50 rounded-full p-3  ">
               
                <AvatarFallback>
                  {" "}
                  <UserRound className="h-6 w-5 text-black" />
                </AvatarFallback>
              </Avatar>
              <div className="">
                <h4 className="text-md font-medium">Jayakrishnan S</h4>
                <p className="text-sm  text-muted-foreground">24-10-2000</p>
              </div>
            </CardHeader>
            <CardContent>
              <h2 className="text-xl mb-2  font-bold leading-tight ">
                How an Ugly Single-Page Website Makes $5,000 a Month with
                Affiliate Marketing
              </h2>
              <p className="text-sm  text-muted-foreground space-y-3">
                No need to create a fancy and modern website with hundreds of
                pages to make money online.Making money online is the dream for
                many...
              </p>
            </CardContent>
          </Card>
           <Card className="border border-gray-200 shadow-none">
            <CardHeader className="flex  flex-row items-center gap-3 space-y-0">
              <Avatar className="bg-gray-50 rounded-full p-3  ">
               
                <AvatarFallback>
                  {" "}
                  <UserRound className="h-6 w-5 text-black" />
                </AvatarFallback>
              </Avatar>
              <div className="">
                <h4 className="text-md font-medium">Jayakrishnan S</h4>
                <p className="text-sm  text-muted-foreground">24-10-2000</p>
              </div>
            </CardHeader>
            <CardContent>
              <h2 className="text-xl mb-2  font-bold leading-tight ">
                How an Ugly Single-Page Website Makes $5,000 a Month with
                Affiliate Marketing
              </h2>
              <p className="text-sm  text-muted-foreground space-y-3">
                No need to create a fancy and modern website with hundreds of
                pages to make money online.Making money online is the dream for
                many...
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

export default BlogCard;
