import React from "react";
import Bounded from "@/components/ui/bounded";
import Heading from "@/components/ui/heading";

type Props = {};

export default function page({}: Props) {
  return (
    <Bounded className="w-full">
      <div className="w-full flex flex-col max-w-auto h-auto items-start justify-between gap-4 pb-4">
        <Heading title="Welcome!" size="xl" tag="h1" className="mb-2" />
      </div>
    </Bounded>
  );
}
