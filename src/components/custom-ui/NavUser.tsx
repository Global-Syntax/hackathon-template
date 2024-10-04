import React from 'react'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

type Props = {
    imageSrc: string;
    imageTitle: string;
}

export default function NavUser({
    imageSrc,
    imageTitle,
}: Props) {
  return (
    <div className="flex items-center gap-4">
          <Button
            variant="destructive"
            type="button"
            className="border-slate-600 flex gap-2 items-center justify-center hover:scale-105 transition-all ease-in-out duration-300 border-1 border bg-transparent w-auto px-4 py-2 font-medium rounded-sm"
          >
            Logout
          </Button>
          <Avatar>
            <AvatarImage src={imageSrc} />
            <AvatarFallback>{imageTitle}</AvatarFallback>
          </Avatar>
        </div>
  )
}