import { Icons } from "@/components/ui/icons";
import Link from "next/link";
import React from "react";

type Props = {};

type IconKeys = keyof typeof Icons;

export default function Social({}: Props) {
  const socialLinks: { icon: IconKeys; href: string }[] = [
    { icon: "gitHub", href: "https://github.com/xanderbilla" },
  ];

  return (
    <div className="flex items-center justify-center">
      {socialLinks.map((social, index) => (
        <Link
          key={index}
          href={social.href}
          className="cursor-pointer m-2"
          passHref
          target="_blank"
          rel="noopener noreferrer"
        >
          {React.createElement(Icons[social.icon], { className: "h-8 w-8" })}
        </Link>
      ))}
    </div>
  );
}
