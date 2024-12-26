"use client";

import { useGetAllBlogs } from "@/hooks/blog.hook";
import { IBlog } from "@/types";
import BlogCard from "./BlogCard";

const RecentBlogs = () => {
  const { data, isLoading, isError } = useGetAllBlogs([
    { name: "limit", value: 3 },
  ]);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="h-72 bg-neutral-900 rounded-lg animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <p className="text-center text-red-500">
        Something went wrong while fetching the blogs.
      </p>
    );
  }

  const blogs: IBlog[] = data?.data || [];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8">
      {blogs.map((blog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </div>
  );
};

export default RecentBlogs;
