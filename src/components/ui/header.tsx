import React, { useState } from "react";
import NavButton from "@/components/custom-ui/NavButton";
import NavUser from "@/components/custom-ui/NavUser";
import ProjectLogo from "@/components/custom-ui/ProjectLogo";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

type NavItem = {
  href: string;
  name: string;
};

type DesktopNavbarProps = {
  navItems: NavItem[];
  isActive: string;
  isLogin: boolean;
  closeMenu: () => void;
};

const DesktopNavbar: React.FC<DesktopNavbarProps> = ({
  navItems,
  isActive,
  isLogin,
  closeMenu,
}) => (
  <div className="hidden md:h-20 md:flex items-center justify-between">
    <ProjectLogo onlyProjectLogo />
    <div className="hidden md:flex items-center gap-4">
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
      <div className="ml-2 flex items-center justify-center gap-2">
        <Button
          variant="outline"
          className="h-10 w-10 rounded-full p-2 transition-all duration-300 ease-in-out"
        >
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

type MobileNavbarProps = {
  navItems: NavItem[];
  isActive: string;
  isOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
  isLogin: boolean;
};

const MobileNavbar: React.FC<MobileNavbarProps> = ({
  navItems,
  isActive,
  isOpen,
  toggleMenu,
  closeMenu,
  isLogin,
}) => (
  <div className="h-20 flex md:hidden items-center justify-between">
    <ProjectLogo onlyProjectLogo />

    <div className="ml-2 flex items-center justify-center gap-2">
      <Button
        variant="outline"
        className="h-10 w-10 rounded-full p-2 transition-all duration-300 ease-in-out"
      >
        <Icons.search className="h-7 w-7 text-black" />
      </Button>
      <Link
        href="https://github.com/shadcn"
        className="hover:scale-105 rounded-full p-2 hover:bg-slate-300/50 transition-all duration-300 ease-in-out"
      >
        <Icons.gitHub className="h-7 w-7 text-black" />
      </Link>

      <button onClick={toggleMenu} className="text-black">
        {isOpen ? "" : <FaBars size={24} />}
      </button>
    </div>
    <div
      className={`fixed top-0 left-0 w-full z-50 h-full bg-white flex flex-col items-center justify-center gap-2 transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button
        onClick={toggleMenu}
        className="absolute top-8 right-8 text-black"
      >
        <FaTimes size={24} />
      </button>

      <div className="h-96 flex flex-col items-center justify-between gap-4">
        <div className="flex flex-col items-center justify-center gap-4">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`cursor-pointer px-2 py-1 text-4xl font-medium transition-all duration-300 ease-in-out ${
                isActive.includes(item.href)
                  ? "text-slate-500 border-b-2 border-b-slate-800 animate-out font-semibold"
                  : "text-gray-800"
              }`}
              onClick={closeMenu}
            >
              {item.name}
            </Link>
          ))}
        </div>
        {isLogin ? (
          <NavUser
            imageSrc="https://github.com/shadcn.png"
            imageTitle="John Doe"
            className="h-16 w-16"
          />
        ) : (
          <NavButton isActive={isActive} closeMenu={closeMenu} />
        )}
      </div>
    </div>
  </div>
);

export { DesktopNavbar, MobileNavbar };
