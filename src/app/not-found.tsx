import { Metadata } from "next";
import Image from "next/image";
import React from "react";

type Props = {};

export const metadata: Metadata = {
  title: "Error!",
  description: "This is an error page.",
};

export default function NotFound({}: Props) {
  return (
    <main>
      <Image src="/images/not-found.png" alt="404" width={480} height={480} />
    </main>
  );
}
