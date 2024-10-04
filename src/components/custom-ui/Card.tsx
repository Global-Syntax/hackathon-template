"use client";

import { Icons } from "@/components/ui/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  title: string;
  url: string;
  tags: string[];
};

export default function Card({ title, url, tags }: Props) {
  const path = usePathname();
  const linkTitle = path.startsWith("/projects") ? "View Project" : "View More";

  return (
    <>
      <div className="content-list-item">
        <div className="flex flex-col justify-between border-t border-t-slate-100 py-10 text-slate-200 md:flex-row">
          <div className="flex flex-col">
            <span className="text-2xl md:text-3xl font-bold">{title}</span>
            <div className="flex gap-3 text-yellow-400">
              {tags.map((techItem, index) => (
                <span key={index} className="text-lg font-bold">
                  {techItem}
                </span>
              ))}
            </div>
          </div>
          <Link
            href={url}
            className="ml-auto flex items-center gap-2 text-xl font-medium md:ml-0"
          >
            {linkTitle} <Icons.chevronRightIcon />
          </Link>
        </div>
      </div>
    </>
  );
}
