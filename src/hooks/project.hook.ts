/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAllProjects } from "@/services/ProjectService";
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
