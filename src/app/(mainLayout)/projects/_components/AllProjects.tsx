"use client";

import ProjectCard from "@/components/Project/ProjectCard";
import { useGetAllProjects } from "@/hooks/project.hook";
import { IProject } from "@/types/project.type";

const AllProjects = () => {
  const { data, isLoading, isError } = useGetAllProjects([
    { name: "limit", value: 10000 },
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
        Something went wrong while fetching the projects.
      </p>
    );
  }

  const projects: IProject[] = data?.data || [];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  );
};

export default AllProjects;
