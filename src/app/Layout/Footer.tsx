"use client";

import ProjectLogo from "@/components/custom-ui/ProjectLogo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
type Props = {};

export default function Footer({}: Props) {
  const displayTitle = [
    { path: "/", title: "Homepage" },
    { path: "/blogs", title: "My Blogs" },
    { path: "/auth", title: "Authentication" },
    { path: "/contact", title: "Contact Me" },
    { path: "/about", title: "About Me" },
    { path: "/projects", title: "Projects" },
  ];

  const year = new Date().getFullYear();
  const pathname = usePathname().split("/")[1] || "";
  const path = pathname.charAt(0).toUpperCase() + pathname.slice(1);

  const pageName = displayTitle.find(
    (title) => title.path === `/${pathname}`
  )?.title;

  return (
      <>
        <div className="w-full h-auto md:h-28 py-4 md:pb-0 flex flex-col md:flex-row items-center justify-between gap-4">
        {pathname !== "" ? <ProjectLogo /> : ""}
          <div className="flex flex-col items-center justify-center gap-2">
            <h3 className="text-lg md:text-2xl">{pageName}</h3>
            <p className="text-sm md:text-xs text-opacity-50">
              &copy; {year}, Developed by{" "}
              <Link className="underline" href="https://xanderbilla.com">
                Xander Billa
              </Link>
            </p>
          </div>
        </div>
      </>
  );
}
