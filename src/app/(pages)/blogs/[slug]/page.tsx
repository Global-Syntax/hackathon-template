"use client";

import Bounded from "@/components/ui/bounded";
import Heading from "@/components/ui/heading";
import { formatDate } from "@/lib/formatDate";
import data from "@/static/data.json";
import { usePathname } from "next/navigation";
import React from "react";
import CommentSection from "../components/CommentSection";

type Props = {};

export default function Page({}: Props) {
  const path = usePathname().split("/").pop();
  const blogData = data.blogs.find((blog) => blog.id === path);

  const createdDate = formatDate(blogData?.date);

  return (
    <>
      <Bounded className="w-full">
        <div className="rounded-2xl bg-zinc-500/70 shadow-xl px-4 py-10 md:px-8 md:py-20'">
          <Heading
            size="lg"
            title={blogData?.title}
            tag="h1"
            className="col-start-1 text-zinc-800"
          />
          <div className="flex gap-4 text-yellow-300">
            {blogData?.tech.map((techItem, index) => (
              <span key={index} className="text-lg font-bold">
                {techItem}
              </span>
            ))}
          </div>
          <p className="mt-8 border-b border-zinc-600 text-xl font-medium text-zinc-800">
            {createdDate}
          </p>

          <div
            className="prose prose-lg prose-invert mt-12 w-full max-w-none md:mt-20 text-gray-800"
            dangerouslySetInnerHTML={
              blogData ? { __html: blogData.description } : undefined
            }
          />
        </div>
        <CommentSection />
      </Bounded>
    </>
  );
}
