"use client"
import React from "react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import AnimateText from "./AnimateText";

export default function Hero() {
  return (
    <div className="w-full h-fit flex flex-col justify-center items-center pt-40 pb-10">
      <div className="flex flex-col justify-center items-center sm:gap-8 gap-2">
        <div className="w-fit flex flex-col justify-center leading-none items-center">
          <AnimateText className="sm:text-[36px] text-[#374151] md:text-[50px] lg:text-[60px] text-[28px] font-bold w-fit">
            Smart Fitness,
          </AnimateText>
          <AnimateText className="sm:text-[36px] text-[#374151] md:text-[50px] lg:text-[60px] text-[28px] font-bold w-fit sm:leading-none leading-10">
            Filters for Smarter Results
          </AnimateText>
        </div>

        <AnimateText className="sm:flex flex-col justify-center items-center text-[#4B5563] hidden">
          <p>
            It uses intelligent filtering based on key personal attributes to
            create
          </p>
          <p>workouts, goals, and health insights that truly fit you.</p>
        </AnimateText>

        <AnimateText className="sm:hidden flex flex-col px-4 justify-center items-center mt-4 text-[#4B5563]">
          <p>It uses intelligent filtering based on key</p>
          <p>personal attributes to create workouts, goals,</p>
          <p>and health insights that truly fit you.</p>
        </AnimateText>

        <div className="md:flex justify-center items-center gap-4 hidden">
          <AnimateText>
            <Button className="w-[160px] transition shadow-md cursor-pointer duration-400 ease-in hover:-translate-y-1">
              Start Diet Plan
            </Button>
          </AnimateText>
          <AnimateText>
            <Button
              variant="secondary"
              className="w-[160px] cursor-pointer transition bg-white text-black shadow-md border duration-400 ease-in hover:-translate-y-1"
            >
              Explore Workouts
            </Button>
          </AnimateText>
        </div>
      </div>

      <div className="cursor-no-drop lg:mt-10 mt-5">
        <AnimateText>
          <div className="bg-[#e6e6e6] sm:my-10 sm:mr-10 sm:ml-10 my-10 mr-5 ml-5 rounded-2xl flex">
            <Image
              src="/wallpaper.png"
              alt="wallpaper"
              width="1220"
              height="692"
              className="border-2 rounded-2xl border-black/10 sm:my-5 sm:mr-5 sm:ml-5 p-2"
            />
          </div>
        </AnimateText>
      </div>

      <div className="flex flex-col justify-center items-center lg:px-10 sm:px-5 px-4 lg:py-20 sm:py-10 py-10">
        <div>
          <AnimateText className="sm:text-[26px] md:text-[40px] lg:text-[68px] text-[18px] font-bold w-fit sm:bg-gradient-to-r from-black/35 via-[#374151] to-black/35 sm:bg-clip-text sm:text-transparent text-[#374151] transition-opacity duration-500">
            Finally, the Complete Platform to Fuel
          </AnimateText>
        </div>
        <div>
          <AnimateText className="sm:text-[26px] md:text-[40px] lg:text-[68px] text-[18px] font-bold w-fit sm:leading-none leadin-0 text-[#374151]">
            Your Goals with the Ultimate Diet
          </AnimateText>
        </div>
      </div>
    </div>
  );
}
