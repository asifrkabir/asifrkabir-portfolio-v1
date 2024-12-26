"use client";

import { useGetAllSkills } from "@/hooks/skill.hook";
import { ISkill } from "@/types";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Skills = () => {
  const chunkSize = 12;

  const { data, isLoading, isError } = useGetAllSkills([
    { name: "limit", value: 10000 },
  ]);

  if (isLoading) {
    return (
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-6">
        {[...Array(20)].map((_, index) => (
          <div
            key={index}
            className="h-24 w-24 bg-gray-700 rounded-lg animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <p className="text-center text-red-500">
        Something went wrong while fetching skills.
      </p>
    );
  }

  const skills: ISkill[] = data?.data || [];

  const chunkedSkills = [];
  for (let i = 0; i < skills.length; i += chunkSize) {
    chunkedSkills.push(skills.slice(i, i + chunkSize));
  }

  return (
    <div className="py-12">
      <div className="space-y-8">
        {chunkedSkills.map((chunk, index) => (
          <Marquee
            key={index}
            gradient={false}
            direction={index % 2 === 0 ? "left" : "right"}
            speed={50}
            className="flex gap-8 items-center"
          >
            {chunk.map((skill) => (
              <div
                key={skill._id}
                className="h-32 w-32 flex flex-col items-center justify-center p-4 text-center rounded-lg shadow-lg hover:shadow-xl transition-shadow transform mx-10"
              >
                {skill.logo ? (
                  <Image
                    src={skill.logo}
                    alt={`${skill.name} Logo`}
                    width={60}
                    height={60}
                    className="mb-4"
                  />
                ) : (
                  <div className="h-20 w-20 flex items-center justify-center text-gray-300 mb-4">
                    <Sparkles size={32} />
                  </div>
                )}
                <h3 className="text-sm font-medium text-gray-100">
                  {skill.name}
                </h3>
              </div>
            ))}
            {chunk.map((skill) => (
              <div
                key={skill._id}
                className="h-32 w-32 flex flex-col items-center justify-center p-4 text-center rounded-lg shadow-lg hover:shadow-xl transition-shadow transform mx-10"
              >
                {skill.logo ? (
                  <Image
                    src={skill.logo}
                    alt={`${skill.name} Logo`}
                    width={60}
                    height={60}
                    className="mb-4"
                  />
                ) : (
                  <div className="h-20 w-20 flex items-center justify-center text-gray-300 mb-4">
                    <Sparkles size={32} />
                  </div>
                )}
                <h3 className="text-sm font-medium text-gray-100">
                  {skill.name}
                </h3>
              </div>
            ))}
          </Marquee>
        ))}
      </div>
    </div>
  );
};

export default Skills;
