import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import { Icons } from "../ui/icons";

export default function Socail() {
  const year = new Date().getFullYear();
  const links = [
   
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <Icons.gitHub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Discord",
      icon: (
        <IconBrandDiscord className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-auto w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
      <p className="text-sm md:text-md text-opacity-50">
          &copy; {year},<span className="font-medium">Team Debug Dynasty</span>
        </p>
    </div>
  );
}
