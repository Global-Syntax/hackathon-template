"use client";

import ProjectLogo from "@/components/custom-ui/ProjectLogo";
import Social from "@/components/custom-ui/Social";
import { usePathname } from "next/navigation";
import React from "react";
type Props = {};

export default function Footer({}: Props) {

  const pathname = usePathname().split("/")[1] || "";

  return (
      <>
        <div className="w-full bg-slate-900 text-white h-auto md:h-28 lg:h-32 rounded-t-xl p-4 md:pb-0 flex flex-col md:flex-row items-center justify-between gap-4 animate-bg">
        {pathname !== "" ? <ProjectLogo /> : ""}
          <div className="flex flex-col items-center justify-center gap-2">
            <Social/>
          </div>
        </div>
      </>
  );
}
