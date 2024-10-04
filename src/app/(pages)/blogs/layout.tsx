import type { Metadata } from "next";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blogs | Xander Billa",
  description: "I write what I've learned so other people can learn from it too.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <div
      className={cn(
        `min-h-[calc(100vh-14rem)] w-full flex flex-col items-start justify-start gap-8 my-8 ${cn}`
      )}
    >
      {children}
    </div>
  );
}
