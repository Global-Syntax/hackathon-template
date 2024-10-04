"use client";

import ProjectLogo from "@/components/custom-ui/ProjectLogo";
import Social from "@/components/custom-ui/Social";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

export default function Navbar({}: Props) {
  const isActive = usePathname();

  const navItems = [{ name: "Blogs", href: "/blogs" }];

  return (
    <div className="w-full h-20 flex items-center justify-between gap-4">
      <ProjectLogo onlyProjectLogo />
      <div className="flex items-center justify-center gap-4">
        {/* Nav Menu here... */}
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`cursor-pointer px-2 py-1 text-lg font-medium transition-all duration-300 ease-in-out
              ${
                isActive.includes(item.href)
                  ? "text-zinc-300 border-b-2 border-b-zinc-400 animate-out font-semibold"
                  : "text-white"
              }`}
          >
            {item.name}
          </Link>
        ))}
        <Button className="flex gap-2 items-center justify-center hover:scale-105 transition-all ease-in-out duration-300 border-1 border bg-transparent w-auto px-4 py-2 font-medium rounded-sm">
          Sign In
        </Button>
        <Social />
      </div>
    </div>
  );
}
