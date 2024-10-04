import React from "react";
import PostBtn from "./components/PostBtn";
import Bounded from "@/components/ui/bounded";
import Card from "@/components/custom-ui/Card";

import data from "@/static/data.json";

type Props = {};

export default function page({}: Props) {
  return (
    <Bounded className="w-full">
      <PostBtn />
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
    </Bounded>
  );
}
