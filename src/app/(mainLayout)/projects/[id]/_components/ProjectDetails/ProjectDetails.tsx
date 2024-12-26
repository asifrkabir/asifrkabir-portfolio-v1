"use client";

import githubLogo from "@/assets/images/logo/github-logo.svg";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IProject } from "@/types";
import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectDetails.module.css";

interface IProps {
  project: IProject;
}

const ProjectDetails = ({ project }: IProps) => {
  const {
    title,
    description,
    images,
    repositoryUrls,
    technologies,
    liveDemoUrl,
  } = project;

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
        <div className="w-full">
          {images && images.length > 0 && (
            <Image
              src={images[0]}
              alt={`Project image`}
              width={1920}
              height={1080}
              className="object-cover w-full h-auto rounded-sm"
            />
          )}
        </div>

        <div className="w-full flex flex-col justify-between p-4">
          <h2 className="text-2xl font-semibold mb-8">{title}</h2>

          {technologies && technologies.length > 0 && (
            <div className="mb-8">
              <h4 className="font-semibold mb-2">Technologies Used:</h4>
              <div className="flex gap-2 flex-wrap">
                {technologies.map((tech, index) => (
                  <Badge key={index} className="bg-emerald-700 text-white">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          <div className="mt-auto flex gap-2">
            {liveDemoUrl && (
              <Link href={liveDemoUrl} passHref>
                <Button variant="outline" size="sm">
                  <Eye className="mr-2" /> View Demo
                </Button>
              </Link>
            )}

            {repositoryUrls && repositoryUrls.length > 0 && (
              <Link href={repositoryUrls[0]} target="_blank">
                <Button variant="outline" size="sm">
                  <Image
                    src={githubLogo}
                    alt="GitHub"
                    width={20}
                    height={20}
                    className="filter invert mr-2"
                  />
                  GitHub
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {description && (
        <div
          className={styles.richText}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
    </div>
  );
};

export default ProjectDetails;
