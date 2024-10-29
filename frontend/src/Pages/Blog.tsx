import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import { useFetchBlogDetails } from "@/hooks/useFetchBlogDetails";

function Blog() {
  const blog = useFetchBlogDetails();
  return (
    <div>
      <main className="">
        <Navbar />
        {blog ? (
          <div className="flex flex-col max-w-screen-xl  mx-auto space-y-1  mt-8 mb-20" >
            <h1 className="  font-bold leading-tight text-3xl  ">
              {blog?.title}
            </h1>
            <p className="text-muted-foreground text-xs font-inter">
              Posted on {blog?.publishedDate}
            </p>
            <p className="pt-7">{blog?.content}</p>
          </div>
        ) : (
          <Loader />
        )}
      </main>
    </div>
  );
}

export default Blog;
