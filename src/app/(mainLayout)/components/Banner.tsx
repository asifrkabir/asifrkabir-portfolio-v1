"use client";

import profilePicture from "@/assets/images/asifrkabir_profile_picture.jpg";
import githubLogo from "@/assets/images/logo/github-logo.svg";
import linkedInLogo from "@/assets/images/logo/linkedin-logo.svg";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative text-gray-100 py-20 px-6 md:px-12 lg:px-24 rounded-md">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-6">
        <div className="flex justify-center">
          <Image
            src={profilePicture}
            alt="Profile Picture"
            width={200}
            height={200}
            className="rounded-full border-4 border-emerald-500 shadow-lg"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Hi, I’m <span className="text-emerald-500">Asif Rezwan Kabir</span>
        </h1>

        <p className="text-lg md:text-xl max-w-3xl text-gray-400">
          A Software Engineer and Business Analyst based out of Dhaka,
          Bangladesh{" "}
        </p>

        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <Button
            asChild
            size="lg"
            className="bg-emerald-500 hover:bg-emerald-600 text-white shadow-md"
          >
            <a
              href="https://drive.google.com/file/d/16TVBHe8_Z666M8RXG3S_zQHrwmLcIXsu/view?usp=sharing"
              target="_blank"
            >
              View Resume
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-emerald-500 text-emerald-500 hover:bg-emerald-600 hover:text-white"
          >
            <a href="#contact">Contact Me</a>
          </Button>
        </div>

        <div className="flex justify-center mt-10 space-x-4">
          <a
            href="https://github.com/asifrkabir"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <Image
              src={githubLogo}
              alt="GitHub"
              width={40}
              height={40}
              className="filter invert"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/asifrkabir"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <Image
              src={linkedInLogo}
              alt="LinkedIn"
              width={40}
              height={40}
              className="filter invert"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
