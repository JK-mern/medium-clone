import { Blogposts } from "@/types/types";
import { Card, CardContent } from "./ui/card";
import { Badge, Pencil, Trash2 } from "lucide-react";
import { Button } from "./ui/button";

interface userBlogsProps {
  blogs: Blogposts[];
}

function UserBlogs({ blogs }: userBlogsProps) {
  const handleEdit = (id: string) => {};

  const handleDelete = (id: string) => {};
  return (
    <div className="mt-5 ">
      <h2 className="text-xl font-semibold mb-4">Blog Posts</h2>
      <div className="space-y-4">
        {blogs &&
          blogs.map((blog) => (
            <Card key={blog.id}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold">{blog.title}</h3>
                    <p className="text-sm text-gray-500">
                      {blog.publishedDate}
                    </p>
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
