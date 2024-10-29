import { Blogposts } from "@/types/types";
import { Card, CardContent } from "./ui/card";
import { Pencil, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import axios from "axios";
import { BACKEND_URL } from "@/config";
import { Toaster } from "./ui/toaster";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface UserBlogsProps {
  blogs: Blogposts[];
}

function UserBlogs({ blogs }: UserBlogsProps) {
  const navigate = useNavigate()
  const { toast } = useToast();
  const [userBlogs, setUserBlogs] = useState(blogs);

  const handleEdit = (id: string) => {
    navigate(`/edit/${id}`)
  };

  const handleDelete = async (id: string) => {
    try {
      const result = await axios.delete(
        `${BACKEND_URL}/api/v1/blog/delete/${id}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      
      if (result.data.status) {
        setUserBlogs(userBlogs.filter(blog => blog.id !== id));
        toast({
          className: cn(
            "top-4 left-1/2 transform -translate-x-1/2 justify-center flex fixed md:max-w-[420px] bg-green-600 text-white"
          ),
          variant: "default",
          title: "Delete Successful",
          duration: 3000,
        });
      }
    } catch (error) {
      toast({
        className: cn(
          "top-4 left-1/2 transform -translate-x-1/2 justify-center flex fixed md:max-w-[420px] bg-red-600 text-white"
        ),
        variant: "default",
        title: "Delete Failed",
        duration: 3000,
      });
    }
  };

  return (
    <div className="mt-5">
      <Toaster />
      <h2 className="text-xl font-semibold mb-4 ml-2">Blog Posts</h2>
      <div className="space-y-4">
        {userBlogs &&
          userBlogs.map((blog) => (
            <Card key={blog.id}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold">{blog.title}</h3>
                    <p className="text-sm text-gray-500">{blog.publishedDate}</p>
                  </div>
                  <div className="mt-4 flex justify-end space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEdit(blog.id)}
                    >
                      <Pencil className="h-4 w-4 mr-2" />
                      Edit
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(blog.id)}
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  );
}

export default UserBlogs;
