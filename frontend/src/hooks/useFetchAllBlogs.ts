import axios from "axios";
import { useState, useEffect } from "react";
import { BACKEND_URL } from "@/config";
import { Blogposts } from "@/types/types";

const useFetchAllBlogs = () => {
  const [blogData, setBlogData] = useState<Blogposts[]>([]);

  useEffect(() => {
    async function fetchAllBlogs() {
      const res = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`);
      if (res.data.status) {
        setBlogData(res.data.posts);
        console.log(res.data.posts);
      }
    }

    fetchAllBlogs();
  }, []);
  return blogData;
};

export default useFetchAllBlogs;
