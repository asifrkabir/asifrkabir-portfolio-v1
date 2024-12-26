"use client";

import AppForm from "@/components/form/AppForm";
import AppInput from "@/components/form/AppInput";
import AppTextarea from "@/components/form/AppTextarea";
import { Button } from "@/components/ui/button";
import { useCreateInquiry } from "@/hooks/inquiry.hook";
import { createInquiryValidationSchema } from "@/schemas/inquiry.schema";
import { IApiResponse } from "@/types";
import { ICreateInquiry, IInquiry } from "@/types/inquiry.type";
import { zodResolver } from "@hookform/resolvers/zod";
import httpStatus from "http-status";
import { Loader2 } from "lucide-react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const InquiryForm = () => {
  const { mutate: createInquiry, isPending } = useCreateInquiry();

  const handleSubmit: SubmitHandler<FieldValues> = (data) => {
    const inquiryData: ICreateInquiry = {
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
    };

    createInquiry(inquiryData, {
      onSuccess: (res: IApiResponse<IInquiry>) => {
        if (res.statusCode === httpStatus.CREATED) {
          toast.success(
            "Thank you for your message. I will reach out to you soon."
          );
        } else {
          console.error(res);
          toast.error(
            res.message || "Failed to add inquiry. Please try again."
          );
        }
      },
      onError: (error) => {
        console.error(error);
        toast.error(
          error.message || "Failed to add inquiry. Please try again."
        );
      },
    });
  };

  return (
    <div className="flex items-center justify-center py-10">
      <div className="w-full max-w-2xl p-6 shadow-md rounded-lg border">
        <AppForm
          onSubmit={handleSubmit}
          resolver={zodResolver(createInquiryValidationSchema)}
        >
          <div className="space-y-4">
            <AppInput
              name="name"
              label="Name"
              type="text"
              placeholder="Enter your full name"
              required
            />
            <AppInput
              name="email"
              label="Email"
              type="email"
              placeholder="Enter your email address"
              required
            />
            <AppInput
              name="subject"
              label="Subject"
              type="text"
              placeholder="What's your inquiry about?"
              required
            />
            <AppTextarea
              name="message"
              label="Message"
              placeholder="Write your message here..."
              required
            />
            <Button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-700 text-white"
              disabled={isPending}
            >
              {isPending ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                "Submit Inquiry"
              )}
            </Button>
          </div>
        </AppForm>
      </div>
    </div>
  );
};

export default InquiryForm;
