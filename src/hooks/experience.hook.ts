/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAllExperiences } from "@/services/ExperienceService";
import { IQueryParam } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const getAllExperiencesQuery = (params?: IQueryParam[]) => ({
  queryKey: ["EXPERIENCES", params],
  queryFn: async () => await getAllExperiences(params),
});

export const useGetAllExperiences = (params?: IQueryParam[]) => {
  return useQuery({
    ...getAllExperiencesQuery(params),
  });
};
