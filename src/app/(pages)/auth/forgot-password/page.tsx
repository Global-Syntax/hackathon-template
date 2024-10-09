"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/ui/icons";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import Heading from "@/components/ui/heading";

export default function Page() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Simulating successful login
    setIsLoading(false);
    toast({
      title: "Success",
      description: "Email sent successfully!",
    });
    setTimeout(() => router.push("/auth/login"), 2000);
  };

  return (
    <div className="w-full flex min-h-96 items-center justify-center dark:bg-gray-900 p-4">
      <div className="w-full max-w-4xl flex flex-col-reverse md:flex-row rounded-lg shadow-md overflow-hidden">
        <div className="w-full md:w-2/2 bg-white dark:bg-gray-800 p-8">
          <div className="space-y-2 text-center">
            <Heading title="Forgot Password!" size="lg" tag="h1" className="mb-2" />
            <span className="text-sm md:text-base text-gray-500 dark:text-gray-400">
                Enter your email below to reset your password
            </span>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4 mt-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="user@email.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <Button className="w-full text-lg h-12 font-medium" type="submit" disabled={isLoading}>
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              {isLoading ? "Processing..." : "Send me a reset link"}
            </Button>
          </form>
        </div>
        <div className="w-full md:w-1/2 bg-gray-600 p-8 flex items-center justify-center">
          <div className="text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Oh! No!!!!
            </h2>
            <p className="text-base md:text-lg">
            You forgot your password? No worries!
            </p>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
