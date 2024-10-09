import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import Link from "next/link";

type Props = {
  imageSrc: string;
  imageTitle: string;
  className?: string;
};

export default function NavUser({ imageSrc, imageTitle, className }: Props) {
  return (
    <div className="flex gap-4 items-center justify-center">
      <Button
        variant="destructive"
        size="lg"
        className="border-slate-600 flex gap-2 items-center justify-center hover:scale-105 transition-all ease-in-out duration-300 border-1 border bg-transparent w-auto px-4 py-2 font-medium rounded-sm"
      >
        Logout
      </Button>
      <Link href="/profile">
        <Avatar className={clsx("cursor-pointer", className)}>
          <AvatarImage src={imageSrc} alt={imageTitle} />
          <AvatarFallback>{imageTitle}</AvatarFallback>
        </Avatar>
      </Link>
    </div>
  );
}
