/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAllSkills } from "@/services/SkillService";
import { IQueryParam } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const getAllSkillsQuery = (params?: IQueryParam[]) => ({
  queryKey: ["SKILLS", params],
  queryFn: async () => await getAllSkills(params),
});

export const useGetAllSkills = (params?: IQueryParam[]) => {
  return useQuery({
    ...getAllSkillsQuery(params),
  });
};
