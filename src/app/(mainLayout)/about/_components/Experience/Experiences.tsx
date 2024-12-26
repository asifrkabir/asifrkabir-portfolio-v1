"use client";

import { Badge } from "@/components/ui/badge"; // Badge for technologies
import { Card } from "@/components/ui/card"; // You might have a UI card component
import { useGetAllExperiences } from "@/hooks/experience.hook";
import { IExperience } from "@/types";
import styles from "./Experience.module.css";

const Experiences = () => {
  const { data, isLoading, isError } = useGetAllExperiences([
    { name: "limit", value: 10000 },
    { name: "sort", value: "-startDate" },
  ]);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-8">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="h-72 bg-neutral-900 rounded-lg animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (isError) {
    return <p>Something went wrong while fetching experiences.</p>;
  }

  const experiences: IExperience[] = data?.data || [];

  return (
    <div className="grid grid-cols-1 gap-8">
      {experiences.length > 0 ? (
        experiences.map((experience) => (
          <Card
            key={experience._id}
            className="bg-neutral-900 shadow-lg rounded-lg p-6"
          >
            <h3 className="text-xl font-semibold ">{experience.title}</h3>
            <p className="text-sm">{experience.company}</p>
            <p className="text-sm">
              {new Date(experience.startDate).toLocaleDateString()} -{" "}
              {experience.endDate
                ? new Date(experience.endDate).toLocaleDateString()
                : "Present"}
            </p>

            <div className="mt-4 flex flex-wrap gap-2 mb-8">
              {experience.technologies?.map((tech, index) => (
                <Badge key={index} className="bg-emerald-700 text-white">
                  {tech}
                </Badge>
              ))}
            </div>

            {experience.description && (
              <div
                className={styles.richText}
                dangerouslySetInnerHTML={{ __html: experience.description }}
              />
            )}
          </Card>
        ))
      ) : (
        <p>No experiences found.</p>
      )}
    </div>
  );
};

export default Experiences;
