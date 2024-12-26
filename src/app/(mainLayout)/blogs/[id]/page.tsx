"use client";

import LoadingSpinner from "@/components/Shared/LoadingSpinner/LoadingSpinner";
import { useGetBlogById } from "@/hooks/blog.hook";
import { useParams } from "next/navigation";
import { Suspense } from "react";
import BlogDetails from "./_components/ProjectDetails/BlogDetails";

const BlogDetailsPage = () => {
  const { id } = useParams();
  const { data: blogData, error, isLoading } = useGetBlogById(id as string);

  if (isLoading) return <LoadingSpinner />;
  if (error || !blogData?.data)
    return (
      <div className="h-full flex-1 flex-col space-y-2 p-8 md:flex">
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">No blog found</h3>
        </div>
      </div>
    );

  const blog = blogData?.data;

  return (
    <div className="h-full flex-1 flex-col p-8 md:flex">
      <Suspense>
        <BlogDetails blog={blog} />
      </Suspense>
    </div>
  );
};

export default BlogDetailsPage;
