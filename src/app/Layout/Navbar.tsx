"use client";

import NavButton from "@/components/custom-ui/NavButton";
import NavUser from "@/components/custom-ui/NavUser";
import ProjectLogo from "@/components/custom-ui/ProjectLogo";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

type Props = {};

export default function Navbar({}: Props) {
  const isActive = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isLogin = !true;

  const navItems = [
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-full h-20 flex items-center justify-between gap-4">
      <ProjectLogo onlyProjectLogo />
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-black">
          {isOpen ? "" : <FaBars size={24} />}
        </button>
      </div>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center gap-2 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:static md:flex md:flex-row md:bg-transparent md:translate-x-0 md:h-auto md:w-auto`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-8 right-8 text-black md:hidden"
        >
          <FaTimes size={24} />
        </button>
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`cursor-pointer px-2 py-1 text-lg font-medium transition-all duration-300 ease-in-out ${
              isActive.includes(item.href)
                ? "text-slate-500 border-b-2 border-b-slate-800 animate-out font-semibold"
                : "text-gray-800"
            }`}
            onClick={closeMenu}
          >
            {item.name}
          </Link>
        ))}
        {isLogin ? (
          <NavUser
            imageSrc="https://github.com/shadcn.png"
            imageTitle="John Doe"
          />
        ) : (
          <NavButton isActive={isActive} closeMenu={closeMenu} />
        )}
        <div className="mx-2 flex items-center justify-center gap-2">
          <Button variant="outline" className="h-10 w-10 rounded-full p-2 transition-all duration-300 ease-in-out">
            <Icons.search className="h-7 w-7 text-black" />
          </Button>
          <Link
            href="https://github.com/shadcn"
            className="hover:scale-105 rounded-full p-2 hover:bg-slate-300/50 transition-all duration-300 ease-in-out"
          >
            <Icons.gitHub className="h-7 w-7 text-black" />
          </Link>
        </div>
      </div>
    </div>
  );
}
