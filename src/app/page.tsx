import ProjectLogo from "@/components/custom-ui/ProjectLogo";
import Heading from "@/components/ui/heading";
import Image from "next/image";

export default function Home() {
  return (
    <main
      className="w-full min-h-[calc(100vh-12rem)] h-auto flex flex-col items-center 
    justify-center gap-4 transition-all duration-300 ease-in-out"
    >
      <Heading tag="h4" size="lg" title="Roll Out!!"/>
      <span className="mb-8 text-lg">
        This template will help you get started with our project.
      </span>
      <ProjectLogo/>
    </main>
  );
}
