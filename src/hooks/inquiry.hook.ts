/* eslint-disable @typescript-eslint/no-explicit-any */
import { createInquiry } from "@/services/InquiryService";
import { ICreateInquiry } from "@/types/inquiry.type";
import { useMutation } from "@tanstack/react-query";

export const useCreateInquiry = () => {
  return useMutation<any, Error, ICreateInquiry>({
    mutationFn: createInquiry,
  });
};
