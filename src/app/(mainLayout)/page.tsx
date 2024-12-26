import RecentBlogs from "@/components/Blog/RecentBlogs";
import RecentProjects from "@/components/Project/RecentProjects";
import { Suspense } from "react";
import Banner from "./components/Banner";
import Skills from "./components/Skill/Skills";

export default function HomePage() {
  return (
    <div className="h-full flex-1 flex-col p-8 md:flex">
      <div className="mb-40">
        <Banner />
      </div>

      <div className="flex items-center justify-center mb-8">
        <h1 className="text-lg font-semibold md:text-2xl text-center">
          Skills & Technologies I Work With
        </h1>
      </div>
      <Suspense>
        <Skills />
      </Suspense>

      <div className="flex items-center justify-center mb-8 mt-20">
        <h1 className="text-lg font-semibold md:text-2xl text-center">
          Recent Projects
        </h1>
      </div>
      <Suspense>
        <RecentProjects />
      </Suspense>

      <div className="flex items-center justify-center mb-8 mt-20">
        <h1 className="text-lg font-semibold md:text-2xl text-center">
          Recent Blogs
        </h1>
      </div>
      <Suspense>
        <RecentBlogs />
      </Suspense>
    </div>
  );
}
