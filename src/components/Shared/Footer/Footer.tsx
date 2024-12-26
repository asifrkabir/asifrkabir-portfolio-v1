"use client";

import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-center gap-6 mb-6">
          <Link href="https://github.com/your-username" target="_blank">
            <Github
              className="text-white hover:text-emerald-500 transition-colors"
              size={24}
            />
          </Link>
          <Link href="https://linkedin.com/in/your-profile" target="_blank">
            <Linkedin
              className="text-white hover:text-emerald-500 transition-colors"
              size={24}
            />
          </Link>
        </div>

        <div className="text-center mb-6">
          <Link href="/" className="text-white hover:text-emerald-500 mx-2">
            Home
          </Link>
          <Link
            href="/projects"
            className="text-white hover:text-emerald-500 mx-2"
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-emerald-500 mx-2"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-emerald-500 mx-2"
          >
            Contact
          </Link>
        </div>

        <div className="text-center text-sm">
          <p>
            © {new Date().getFullYear()} Asif Rezwan Kabir. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
