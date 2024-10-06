import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "@/app/Layout/Footer";
import Navbar from "@/app/Layout/Navbar";
import { cn } from "@/lib/utils";
import React from "react";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  title: "Home",
  description: "This is the home page of the project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`max-h-screen relative min-h-screen text-zinc-900 ${urbanist.className}`}
      >
        <div className="background-gradient absolute inset-0 z-40 py-8 px-8 md:px-24">
          <Navbar />
          <div
            className={cn(
              `min-h-[calc(100vh-16rem)] lg:min-h-[calc(100vh-13rem)] md:min-h-[calc(100vh-11rem)] flex flex-col items-center justify-center gap-8 ${cn}`
            )}
          >
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
