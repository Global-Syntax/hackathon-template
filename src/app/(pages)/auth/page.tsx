"use client";

import Bounded from "@/components/ui/bounded";
import Heading from "@/components/ui/heading";
import { formatDate } from "@/lib/formatDate";
import data from "@/static/data.json";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

export default function Page({}: Props) {
  const path = usePathname().split("/").pop();
  const blogData = data.blogs.find((blog) => blog.id === path);

  const createdDate = formatDate(blogData?.date);

  return (
    <Bounded className="w-full">
      <Heading size="lg" title="Login" tag="h1" className="col-start-1 mb-12" />
      <div className="w-[560px] rounded-2xl border-2 border-slate-800 bg-gradient-to-r from-slate-900 to-slate-700 px-4 py-10 md:px-8 md:py-20 shadow-lg transform transition-transform">
        <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
        <div className="mt-6">
          <button
            type="button"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Sign in with Google
          </button>
        </div>
        <div className="mt-4">
          <button
            type="button"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Sign in with GitHub
          </button>
        </div>
      </div>
    </Bounded>
  );
}
