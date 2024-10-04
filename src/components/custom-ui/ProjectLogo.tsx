import Image from "next/image";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  onlyProjectLogo?: boolean;
  className?: string;
  width?: number;
  height?: number;
}

export default function ProjectLogo({
  onlyProjectLogo,
  className,
  width,
  height,
}: Props) {
  return (
    <div
      className={twMerge(
        `flex flex-row-reverse items-center justify-center gap-8`,
        className
      )}
    >
      {onlyProjectLogo ? null : (
        <>
          <Image
            src="/images/logo.png"
            alt="AWS Logo"
            width={width || 80}
            height={height || 80}
          />
          <div className="h-10 w-[2px] bg-white" />
        </>
      )}
      <Link href="/">
        <Image
          src="/images/amplify.png"
          alt="AWS Amplify Logo"
          width={width || 80}
          height={height || 80}
        />
      </Link>
    </div>
  );
}
