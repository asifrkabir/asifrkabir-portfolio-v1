import logo from "@/assets/images/logo/nextjs-logo.svg";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MainMobileNavbar() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <AlignJustify />
        </SheetTrigger>
        <VisuallyHidden>
          <SheetHeader>
            <SheetTitle>Nav</SheetTitle>
            <SheetDescription>Nav</SheetDescription>
          </SheetHeader>
        </VisuallyHidden>

        <SheetContent side="left">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <Image src={logo} alt="logo" width={40} height={40} priority />
          </Link>
          <nav className="flex flex-col gap-3 lg:gap-4 mt-6">
            <Link href="/">Home</Link>
            <Link href="/about">About Me</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/blogs">Blogs</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
