"use client";

import Heading from "@/components/ui/heading";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

export default function PostBtn({}: Props) {
  const router = useRouter();
  return (
    <div
      className="w-full flex flex-col max-w-auto h-auto items-start justify-between gap-4 border-b border-[#f0f0f0] pb-4
      "
    >
      <Heading title="Blogs" size="xl" tag="h1" className="mb-2"/>
      <span className="mb-8 text-lg">
        I write what I&apos;ve learned so other people can learn from it too.
      </span>
    </div>
  );
}
