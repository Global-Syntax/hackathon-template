"use client";

import ProjectLogo from "@/components/custom-ui/ProjectLogo";
import Social from "@/components/custom-ui/Social";
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

  const pathname = usePathname().split("/")[1] || "";
  const path = pathname.charAt(0).toUpperCase() + pathname.slice(1);

  const pageName = displayTitle.find(
    (title) => title.path === `/${pathname}`
  )?.title;

  return (
      <>
        <div className="w-full bg-slate-900 text-white h-auto md:h-40 rounded-t-xl p-4 md:pb-0 flex flex-col md:flex-row items-center justify-between gap-4 animate-bg">
        {pathname !== "" ? <ProjectLogo /> : ""}
          <div className="flex flex-col items-center justify-center gap-2">
            <Social/>
          </div>
        </div>
      </>
  );
}
