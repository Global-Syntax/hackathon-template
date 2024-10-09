import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import Bounded from "@/components/ui/bounded";
import Heading from "@/components/ui/heading";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "You can contact me here.",
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
      <Bounded className="w-full">
        <div className="w-full flex flex-col max-w-auto h-auto items-start justify-between gap-4 pb-4">
          <Heading title="Contact" size="xl" tag="h1" className="mb-2" />
          <span className="mb-8 text-lg">
            You can contact me here.
          </span>
        </div>
        {children}
      </Bounded>
    </div>
  );
}
