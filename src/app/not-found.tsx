import Image from "next/image";
import React from "react";

type Props = {};

export default function NotFound({}: Props) {
  return (
    <main>
      <Image src="/images/404.svg" alt="404" width={600} height={600} />
      <h1 className="text-2xl text-center font-semibold text-slate-500">
        Content Unavailable!
      </h1>
    </main>
  );
}
