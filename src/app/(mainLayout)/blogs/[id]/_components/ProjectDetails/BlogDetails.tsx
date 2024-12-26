"use client";

import { Badge } from "@/components/ui/badge";
import { IBlog } from "@/types";
import Image from "next/image";
import styles from "./BlogDetails.module.css";

interface IBlogDetailsProps {
  blog: IBlog;
}

const BlogDetails = ({ blog }: IBlogDetailsProps) => {
  const { title, content, tags, images } = blog;

  return (
    <div className="w-full">
      <div className="mb-12">
        {images && images.length > 0 && (
          <Image
            src={images[0]}
            alt={`Blog image`}
            width={1920}
            height={1080}
            className="object-cover w-full h-auto rounded-md mb-8"
          />
        )}
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        {tags && tags.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge key={index} className="bg-emerald-700 text-white">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>

      <div
        className={styles.richText}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default BlogDetails;
