import BlogCard from "@/components/BlogCard";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import useFetchAllBlogs from "@/hooks/useFetchAllBlogs";
import { Blogposts } from "@/types/types";

function Blogs() {
  const blogposts : Blogposts[]  = useFetchAllBlogs();
  return (
    <div>
      <Navbar />
      {blogposts.length ===0 && <Loader size="large" />}
      {blogposts.length > 0 &&
        blogposts.map((blogpost) => (
          <BlogCard   key={blogpost.id}  blogpost={blogpost}/>
        ))}
    </div>
  );
}

export default Blogs;
