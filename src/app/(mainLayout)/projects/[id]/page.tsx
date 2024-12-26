"use client";

import LoadingSpinner from "@/components/Shared/LoadingSpinner/LoadingSpinner";
import { useGetProjectById } from "@/hooks/project.hook";
import { useParams } from "next/navigation";
import { Suspense } from "react";
import ProjectDetails from "./_components/ProjectDetails/ProjectDetails";

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const {
    data: projectData,
    error,
    isLoading,
  } = useGetProjectById(id as string);

  if (isLoading) return <LoadingSpinner />;
  if (error || !projectData?.data)
    return (
      <div className="h-full flex-1 flex-col space-y-2 p-8 md:flex">
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            No project found
          </h3>
        </div>
      </div>
    );

  const project = projectData?.data;

  return (
    <div className="h-full flex-1 flex-col p-8 md:flex">
      <Suspense>
        <ProjectDetails project={project} />
      </Suspense>
    </div>
  );
};

export default ProjectDetailsPage;
