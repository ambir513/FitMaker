
"use client"
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import AnimateText from "./AnimateText";

export default function Header() {
  const { user } = useUser();

  return (
    <header className="w-full h-[58px] sm:pl-10 sm:pr-10 pl-5 py-2 backdrop-blur-md bg-white/30 border-b-2 border-stone-100 fixed top-0 z-50">
      <div className="h-[40px] flex justify-between items-center sm:px-24 px-5">
        <Link href="/">
          <AnimateText>
            <h1 className="flex justify-center items-center sm:text-[24px] text-[20px] font-semibold relative">
              <p>💪</p>
              <p className="absolute left-7 top-1 sm:left-8">FitMaker</p>
            </h1>
          </AnimateText>
        </Link>
        {user ? (
          <AnimateText className="mt-1">
            <UserButton />
          </AnimateText>
        ) : (
          <AnimateText className="pb-1 bg-[#BBBBBB] rounded-md active:pb-0 border overflow-hidden">
            <Link href="/sign-in">
              <Button
                variant="secondary"
                size="sm"
                className="cursor-pointer  px-7 text-md  bg-white text-[#464646] border rounded-tl-sm rounded-tr-sm"
              >
                Sign in
              </Button>
            </Link>
          </AnimateText>
        )}
      </div>
    </header>
  );
}
