"use client";

import ProjectLogo from "@/components/custom-ui/ProjectLogo";
import Social from "@/components/custom-ui/Social";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

type Props = {};

export default function Navbar({}: Props) {
  const isActive = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [{ name: "Blogs", href: "/blogs" }];

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
        className={`fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center gap-4 transition-transform duration-300 ease-in-out ${
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
        <Link
          href={isActive === "/auth/login" ? "/auth/register" : "/auth/login"}
          className="border-slate-600 flex gap-2 items-center justify-center hover:scale-105 transition-all ease-in-out duration-300 border-1 border bg-transparent w-auto px-4 py-2 font-medium rounded-sm"
          onClick={closeMenu}
        >
            {isActive === "/auth/login" ? "Sign Up" : "Sign In"}
        </Link>
        <Social />
      </div>
    </div>
  );
}
