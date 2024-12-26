import { z } from "zod";

const requiredString = z.string().trim().min(1);

export const createInquiryValidationSchema = z.object({
  name: requiredString,
  email: requiredString,
  subject: requiredString,
  message: requiredString,
});
