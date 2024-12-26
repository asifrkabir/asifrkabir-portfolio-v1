import { Suspense } from "react";
import InquiryForm from "./_components/InquiryForm";

export default function ContactPage() {
  return (
    <div className="h-full flex-1 flex-col p-8 md:flex">
      <div className="flex items-center justify-center mb-8">
        <h1 className="text-lg font-semibold md:text-2xl text-center">
          Send me a message
        </h1>
      </div>
      <Suspense>
        <InquiryForm />
      </Suspense>
    </div>
  );
}
