/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAllProjects, getProjectById } from "@/services/ProjectService";
import { IQueryParam } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const getAllProjectsQuery = (params?: IQueryParam[]) => ({
  queryKey: ["PROJECTS", params],
  queryFn: async () => await getAllProjects(params),
});

export const useGetAllProjects = (params?: IQueryParam[]) => {
  return useQuery({
    ...getAllProjectsQuery(params),
  });
};

export const getProjectByIdQuery = (id: string) => ({
  queryKey: ["PROJECT", id],
  queryFn: async () => await getProjectById(id),
});

export const useGetProjectById = (id: string) => {
  return useQuery({
    ...getProjectByIdQuery(id),
  });
};
