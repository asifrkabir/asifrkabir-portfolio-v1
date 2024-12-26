/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axiosInstance from "@/lib/AxiosInstance";
import { IApiResponse } from "@/types";
import { ICreateInquiry, IInquiry } from "@/types/inquiry.type";

export const createInquiry = async (inquiryData: ICreateInquiry) => {
  try {
    const { data } = await axiosInstance.post<IApiResponse<IInquiry>>(
      "/inquiries",
      inquiryData
    );

    return data;
  } catch (error: any) {
    if (error.response) {
      const responseData = error.response.data as IApiResponse<null>;
      const statusCode = error.response.status;

      console.error(`API Error (${statusCode}):`, responseData);

      return {
        ...responseData,
        statusCode,
      };
    }

    throw new Error(
      error.message || "Something went wrong. Please try again later."
    );
  }
};
