import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { createPost } from "@jayakrishnan_s/medium-common-app";
import { useToast } from "@/hooks/use-toast";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import axios from "axios";
import { BACKEND_URL } from "@/config";
import { useNavigate } from "react-router-dom";

function PublishBlog() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<createPost>({
    title: "",
    content: "",
  });

  const handleChange = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const textarea = e.currentTarget;
    textarea.style.height = "auto"; // Reset height to auto
    textarea.style.height = `${textarea.scrollHeight}px`;
    setFormData({ ...formData, [e.currentTarget.id]: e.currentTarget.value });
  };

  const handlePublish = async () => {
    try {
      const { success, error } = createPost.safeParse(formData);
      if (error) {
        toast({
          className: cn(
            "top-4 left-1/2 transform -translate-x-1/2 justify-center flex fixed md:max-w-[420px]"
          ),
          variant: "destructive",
          title: error.errors[0].message,
          duration: 3000,
        });
      }
      if (success) {
        const res = await axios.post(
          `${BACKEND_URL}/api/v1/blog/newBlog`,
          formData,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        navigate(`/`);
      }
    } catch (error) {}
  };
  return (
    <div>
      <Navbar />
      <Toaster />
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
            className="w-full min-h-96 p-4 text-xl border-none resize-none focus:outline-none focus:ring-0"
          />
        </div>
        <div className="mt-4 ml-10">
          <Button className="bg-green-600" onClick={handlePublish}>
            Publish
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PublishBlog;
