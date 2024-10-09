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
  const [password, setPasword] = useState("");
  const [cnfPassword, setCnfPasword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== cnfPassword) {
        toast({
            title: "Error",
            description: "Passwords do not match!",
        });
        return;
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Simulating successful login
    setIsLoading(false);
    toast({
      title: "Success",
      description: "Your password has been reset successfully!",
    });
    setTimeout(() => router.push("/auth/login"), 2000);
  };

  return (
    <div className="w-full flex min-h-96 items-center justify-center dark:bg-gray-900 p-4">
      <div className="w-full max-w-4xl flex flex-col-reverse md:flex-row rounded-lg shadow-md overflow-hidden">
        <div className="w-full md:w-2/2 bg-white dark:bg-gray-800 p-8">
          <div className="space-y-2 text-center">
            <Heading
              title="Reset Password!"
              size="lg"
              tag="h1"
              className="mb-2"
            />
            <span className="text-sm md:text-base text-gray-500 dark:text-gray-400">
              Enter a new password and get back to your account
            </span>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4 mt-6">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="********"
                required
                value={password}
                onChange={(e) => setPasword(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cnf-password">Confirm Password</Label>
              <Input
                id="cnf-password"
                type="password"
                placeholder="********"
                required
                value={cnfPassword}
                onChange={(e) => setCnfPasword(e.target.value)}
              />
            </div>
            <Button
              className="w-full text-lg h-12 font-medium"
              type="submit"
              disabled={isLoading}
            >
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              {isLoading ? "Working..." : "Reset Password"}
            </Button>
          </form>
        </div>
        <div className="w-full md:w-1/2 bg-gray-600 p-8 flex items-center justify-center">
          <div className="text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Keep calm</h2>
            <p className="text-base md:text-lg">
              Create a new password and remember it this time.
            </p>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
