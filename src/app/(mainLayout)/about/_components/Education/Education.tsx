import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    id: 1,
    title: "Executive Master's in Information Technology",
    institution: "IIT, Dhaka University",
    startDate: "2022",
    endDate: "2023",
    technologies: ["Cloud Computing", "AWS", "Distributed Systems"],
  },
  {
    id: 2,
    title: "Bachelor of Science in Computer Science and Engineering",
    institution: "BRAC University",
    startDate: "2018",
    endDate: "2022",
    technologies: ["Java", "Data Structures", "Algorithms"],
  },
  {
    id: 3,
    title: "A Levels (Cambridge Curriculum)",
    institution: "South Point School and College",
    startDate: "2015",
    endDate: "2017",
    technologies: ["Java", "Data Structures", "Algorithms"],
  },
  {
    id: 4,
    title: "O Levels (Cambridge Curriculum)",
    institution: "South Point School and College",
    startDate: "2013",
    endDate: "2015",
    technologies: ["Java", "Data Structures", "Algorithms"],
  },
];

export default function Education() {
  return (
    <div className="space-y-12 relative">
      {/* Timeline vertical line */}
      <div className="absolute top-0 left-4 h-full w-1 bg-emerald-500"></div>

      {educationData.map((edu) => (
        <div key={edu.id} className="relative flex items-start">
          <div className="z-10 bg-emerald-500 text-white rounded-full p-2 flex items-center justify-center shadow-md">
            <GraduationCap size={20} />
          </div>

          <Card className="ml-12 p-6 shadow-md w-full">
            <h3 className="text-xl font-semibold">{edu.title}</h3>
            <p className="text-sm">{edu.institution}</p>
            {/* <div className="mt-2">
              <p>{edu.description}</p>
            </div> */}
            {/* <div className="mt-2 flex flex-wrap gap-2">
              {edu.technologies.map((tech, index) => (
                <Badge key={index} className="bg-emerald-700 text-white">
                  {tech}
                </Badge>
              ))}
            </div> */}
            <p className="text-gray-400 mt-2 text-sm">
              {edu.startDate} - {edu.endDate}
            </p>
          </Card>
        </div>
      ))}
    </div>
  );
}
