import { Suspense } from "react";
import AllBlogs from "./_components/AllBlogs";

export default function BlogsPage() {
  return (
    <div className="h-full flex-1 flex-col p-8 md:flex">
      <div className="flex items-center justify-center mb-8 mt-20">
        <h1 className="text-lg font-semibold md:text-2xl text-center">
          All Blogs
        </h1>
      </div>
      <Suspense>
        <AllBlogs />
      </Suspense>
    </div>
  );
}
