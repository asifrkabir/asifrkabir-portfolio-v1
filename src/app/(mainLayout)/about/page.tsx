import { Suspense } from "react";
import Experiences from "./_components/Experience/Experiences";

export default function AboutPage() {
  return (
    <div className="h-full flex-1 flex-col p-8 md:flex">
      <div className="flex items-center justify-center mb-8">
        <h1 className="text-lg font-semibold md:text-2xl text-center">
          My Experience
        </h1>
      </div>
      <Suspense>
        <Experiences />
      </Suspense>
    </div>
  );
}
