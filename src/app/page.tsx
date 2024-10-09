import ProjectLogo from "@/components/custom-ui/ProjectLogo";
import Heading from "@/components/ui/heading";
import Image from "next/image";

export default function Home() {
  return (
    <main
      className="w-full min-h-[calc(100vh-12rem)] h-auto flex flex-col items-center 
    justify-center gap-4 transition-all duration-300 ease-in-out"
    >
      <Heading tag="h4" size="lg" title="Roll Out!!" />
      <span className="mb-8 text-lg text-center">
        This template will help you get started with our project.
      </span>

      <div className="relative w-full h-48 lg:h-64">
        <Image
          src="/images/banner.jpg"
          alt="Banner"
          layout="fill"
          objectFit="cover"
          className="object-center rounded-lg z-0 shadow-2xl"
        />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <ProjectLogo 
            width={120} 
            height={120} 
            className="sm:w-75 sm:h-75 md:w-100 md:h-100 lg:w-150 lg:h-150"
          />
        </div>
      </div>
    </main>
  );
}
