/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAllBlogs, getBlogById } from "@/services/BlogService";
import { IQueryParam } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const getAllBlogsQuery = (params?: IQueryParam[]) => ({
  queryKey: ["BLOGS", params],
  queryFn: async () => await getAllBlogs(params),
});

export const useGetAllBlogs = (params?: IQueryParam[]) => {
  return useQuery({
    ...getAllBlogsQuery(params),
  });
};

export const getBlogByIdQuery = (id: string) => ({
  queryKey: ["BLOG", id],
  queryFn: async () => await getBlogById(id),
});

export const useGetBlogById = (id: string) => {
  return useQuery({
    ...getBlogByIdQuery(id),
  });
};
