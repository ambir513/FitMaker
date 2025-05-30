"use client";
import React from "react";
import AnimateText from "./AnimateText";
import { TbMessageCircleQuestion } from "react-icons/tb";
import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from "./ui/button";
import { HoverCards } from "./HoverCards";

export default function About() {
  return (
    <div className="w-full">
      <AnimateText>
        <div className="flex lg:flex-row flex-col justify-center items-center gap-10 bg-gradient-to-r from-zinc-50 border-x-2 border-x-secondary lg:m-20 md:m-14 sm:m-10 m-7 py-10">
          <div className="lg:w-[580px] sm:w-[600px] w-[300px] flex flex-col justify-center gap-7 px-3">
            <div className="">
              <h1 className="lg:text-2xl font-semibold sm:text-lg text-zinc-500 text-lg">
                Try <span className="text-black font-bold">FitMaker</span> For
                Free Today
              </h1>
            </div>
            <div className="">
              <h1 className="lg:text-2xl font-semibold sm:text-lg text-zinc-500 text-lg">
                Since we both care about your{" "}
                <span className="text-orange-500">fitness journey, </span>
                let’s set the foundation for a strong
                <span className="text-blue-700"> partnership.</span>
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-t from-indigo-700 to-indigo-400 font-bold cursor-pointer relative pl-24 hover:pl-[100px] active:pl-[100px]  w-[125px]"
              >
                <span className="absolute left-4">About us</span>
                <span>
                  <FaArrowRightLong />
                </span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className=" font-bold cursor-pointer relative pl-24 hover:pl-[100px] active:pl-[100px] w-[128px]"
              >
                <span className="absolute left-4">Talk to us</span>
                <span>
                  <TbMessageCircleQuestion />
                </span>
              </Button>
            </div>
          </div>
          <div className="lg:w-[320px] sm:w-[300px] w-[300px] flex flex-col justify-center  gap-4 px-3">
            <div className="">
              <span className=" text-zinc-500">
                "Fitness isn’t just part of my routine - it’s the foundation of
                everything I do. It fuels my discipline, sharpens my focus, and
                keeps me one step ahead. This isn’t a phase; it’s a lifelong
                commitment."
              </span>
            </div>
            <div className="">
              <HoverCards
                title="- Virat Kohli"
                hoverTitle="Virat Kohli"
                description="Virat Kohli is an Indian international cricketer renowned for his fitness and widely regarded as the GOAT of modern cricket."
                subDescription="Wikipedia"
                image="https://upload.wikimedia.org/wikipedia/commons/e/ef/Virat_Kohli_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023.jpg"
                CSS="ml-9"
              />
            </div>
          </div>
        </div>
      </AnimateText>
    </div>
  );
}
