"use client";

import { DesktopNavbar, MobileNavbar } from "@/components/ui/header";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

type Props = {};

export default function Navbar({}: Props) {
  const isActive = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isLogin = true;

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
    <>
      <DesktopNavbar
        navItems={navItems}
        isActive={isActive}
        isLogin={isLogin}
        closeMenu={closeMenu}
      />
      <MobileNavbar
        navItems={navItems}
        isActive={isActive}
        isOpen={isOpen}
        toggleMenu={toggleMenu}
        closeMenu={closeMenu}
        isLogin={isLogin}
      />
    </>
  );
}
