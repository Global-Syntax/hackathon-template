import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  onlyProjectLogo?: boolean;
}

export default function ProjectLogo({ onlyProjectLogo }: Props) {
  return (
    <div className="flex items-center justify-center gap-8">
      {onlyProjectLogo ? null : (
        <>
          <Image src="/images/logo.png" alt="AWS Logo" width={90} height={90} />
          <div className="h-14 w-[2px] bg-white" />
        </>
      )}
      <Link href="/">
        <Image
          src="/images/amplify.png"
          alt="AWS Amplify Logo"
          width={120}
          height={120}
        />
      </Link>
    </div>
  );
}
