import Image from "next/image";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  onlyProjectLogo?: boolean;
  className?: string;
}

export default function ProjectLogo({ onlyProjectLogo, className }: Props) {
  return (
    <div className={twMerge(`flex items-center justify-center gap-8`, className)}>
      {onlyProjectLogo ? null : (
        <>
          <Image src="/images/logo.png" alt="AWS Logo" width={60} height={60} />
          <div className="h-10 w-[2px] bg-white" />
        </>
      )}
      <Link href="/">
        <Image
          src="/images/amplify.png"
          alt="AWS Amplify Logo"
          width={90}
          height={90}
        />
      </Link>
    </div>
  );
}
