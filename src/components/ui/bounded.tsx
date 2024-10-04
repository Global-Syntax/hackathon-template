import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export default function Bounded({ className, children }: Props) {
  return (
    <div
      className={twMerge(`px-4 py-10 md:px-6 md:py-14 lg:py-16 ${className}`)}
    >
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </div>
  );
}
