import { twMerge } from "tailwind-merge";
import React from "react";

type Props = {
  size: "xs" | "sm" | "md" | "lg" | "xl";
  title: string | undefined;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

type DefaultProps = {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export default function Heading({
  size,
  title,
  className,
  tag = "h1",
}: Props & DefaultProps) {
  const headingClasses = twMerge(
    `font-[800] leading-tight tracking-tight text-slate-500
        ${
          size === "sm"
            ? "text-2xl md:text-3xl"
            : size === "md"
            ? "text-5xl md:text-6xl"
            : size === "lg"
            ? "text-6xl md:text-8xl"
            : size === "xl"
            ? "text-7xl md:text-9xl"
            : size === "xs"
            ? "text-xl md:text-2xl"
            : ""
        }`,
    className
  );

  return React.createElement(
    tag as keyof JSX.IntrinsicElements,
    { className: headingClasses },
    title
  );
}
