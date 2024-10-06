import Link from 'next/link'
import React from 'react'

type Props = {
    isActive: string;
    closeMenu: () => void;
}

export default function NavButton({
    isActive,
    closeMenu
}: Props) {
  return (
    <Link
          href={isActive === "/auth" ? "/auth/register" : "/auth"}
          className="border-slate-600 flex gap-2 items-center justify-center hover:scale-105 transition-all ease-in-out duration-300 border-1 border bg-transparent w-auto px-4 py-2 font-medium rounded-sm"
          onClick={closeMenu}
        >
            {isActive === "/auth" ? "Sign Up" : "Sign In"}
        </Link>
  )
}