import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { BACKEND_URL } from "@/config";
import { useFetchBlogDetails } from "@/hooks/useFetchBlogDetails";
import { Blogposts } from "@/types/types";
import { createPost } from "@jayakrishnan_s/medium-common-app";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditBlog() {
  let { id } = useParams();
  const navigate = useNavigate()
  const blogDetails: Blogposts = useFetchBlogDetails() as Blogposts;
  const [formData, setFormData] = useState<createPost>({
    title: "",
    content: "",
  });

  useEffect(() => {
    if (blogDetails) {
      setFormData({
        title: blogDetails.title,
        content: blogDetails.content,
      });
    }
  }, [blogDetails]);

  const handleChange = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const textarea = e.currentTarget;
    textarea.style.height = "auto"; 
    textarea.style.height = `${textarea.scrollHeight}px`;
    setFormData({ ...formData, [e.currentTarget.id]: e.currentTarget.value });
  };

  const handleUpdate = async () => {
    try {
      const res = await axios.put(`${BACKEND_URL}/api/v1/blog/${id}`,formData,{
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });

      if(res.data.status)
      {
        navigate(`/blog/${res.data.id}`)
      }


    } catch (error) {}
  };

  return (
    <div>
      <Navbar />
      
      {blogDetails ? (
        <div className="mt-8 max-w-screen-xl mx-auto">
          <input
            type="text"
            placeholder="Title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full pl-12 pr-4 py-2 text-4xl font-bold border-none focus:outline-none focus:ring-0 overflow-auto"
          />
          <div className="mt-4 ml-8">
            <textarea
              placeholder="Tell your story..."
              id="content"
              onChange={handleChange}
              value={formData.content}
              className="w-full min-h-[96px] p-4 text-xl border-none overflow-hidden resize-none focus:outline-none focus:ring-0"
            />
          </div>
          <div className="mt-4 ml-10">
            <Button className="bg-green-600" onClick={handleUpdate}>
              Update
            </Button>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default EditBlog;
