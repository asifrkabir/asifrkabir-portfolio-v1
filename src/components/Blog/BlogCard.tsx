"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { IBlog } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface IBlogCardProps {
  blog: IBlog;
}

const BlogCard = ({ blog }: IBlogCardProps) => {
  const { _id, title, tags, images } = blog;

  return (
    <Card className="relative flex flex-col rounded-lg border w-full h-full transition-shadow hover:shadow-md">
      <CardHeader className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <div className="mt-2 flex flex-wrap gap-2">
          {tags?.map((tag, index) => (
            <Badge key={index} className="bg-emerald-700 text-white">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent className="p-4">
        {images && images.length > 0 ? (
          <div className="relative mb-4">
            <Image
              src={images[0]}
              alt={`Blog image`}
              width={1920}
              height={1080}
              className="object-cover rounded-md"
            />
          </div>
        ) : (
          <div className="h-72 bg-gray-500 rounded-md" />
        )}
      </CardContent>

      <CardFooter className="mt-auto p-4 flex justify-end">
        <Link href={`/blogs/${_id}`}>
          <Button variant="outline" size="sm">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
