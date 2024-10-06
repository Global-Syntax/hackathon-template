"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/ui/icons";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import Heading from "@/components/ui/heading";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      description: "You have successfully logged in!",
    });
    setTimeout(() => router.push("/profile"), 2000);
  };

  return (
    <div className="w-full flex min-h-96 items-center justify-center dark:bg-gray-900 p-4">
      <div className="w-full max-w-4xl flex flex-col-reverse md:flex-row rounded-lg shadow-md overflow-hidden">
        <div className="w-full md:w-2/2 bg-white dark:bg-gray-800 p-8">
          <div className="space-y-2 text-center">
            <Heading title="Get Started!" size="lg" tag="h1" className="mb-2" />
            <span className="text-sm md:text-base text-gray-500 dark:text-gray-400">Enter your email below to login to your account
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
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                placeholder="*******"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-end">
              <Link
                href="/auth/forgot-password"
                className="text-sm text-blue-800 font-semibold"
              >
                Forgot password?
              </Link>
            </div>
            <Button className="w-full text-lg h-12 font-medium" type="submit" disabled={isLoading}>
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>
          <div className="relative mt-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white z-20 dark:bg-gray-800 px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <div className="w-full flex flex-col sm:flex-row gap-2 mt-6">
            <Button
              variant="outline"
              type="button"
              disabled={isLoading}
              className="w-full"
            >
              <Icons.gitHub className="mr-2 h-4 w-4" />
              Github
            </Button>
            <Button
              variant="outline"
              type="button"
              disabled={isLoading}
              className="w-full"
            >
              <Icons.google className="mr-2 h-4 w-4" />
              Google
            </Button>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-gray-600 p-8 flex items-center justify-center">
          <div className="text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Welcome Back!
            </h2>
            <p className="text-base md:text-lg">
              We&apos;re glad to see you again. Login to access your account.
            </p>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
