import React from "react";
import PostBtn from "./components/PostBtn";
import Bounded from "@/components/ui/bounded";
import Card from "@/components/custom-ui/Card";

import data from "@/static/data.json";
import { Metadata } from "next";

type Props = {};

export const metadata: Metadata = {
  title: "Blogs",
  description: "I write what I've learned so other people can learn from it too.",
};

export default function page({}: Props) {
  return (
      <div className="grid border-b border-b-slate-100">
        {data.blogs.map((blog, index) => (
          <Card
            key={index}
            title={blog.title}
            url={blog.url}
            tags={blog.tech}
          />
        ))}
      </div>
  );
}
