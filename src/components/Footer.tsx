"use client"
import Image from "next/image";
import React from "react";
import AnimateText from "./AnimateText";
import { HoverProfile } from "./HoverProfile";

export default function Footer() {
  return (
    <footer className="w-full ">
      <AnimateText>
        <div className="px-10 sm:px-10 md:px-16 lg:px-20 py-10">
          <div className="flex flex-col lg:flex-row justify-between gap-10">
            <div className="flex flex-col gap-4">
              <div className="w-[64px] ml-3 rounded-xl overflow-hidden">
                <Image
                  src="/fitMaker.png"
                  alt="FitMaker logo"
                  width={100}
                  height={100}
                />
              </div>
              <div className="">
                <HoverProfile />
              </div>
            </div>

            <div className="flex flex-wrap justify-start gap-10 md:gap-16 text-sm md:text-base sm:pl-0 pl-4">
              <div className="flex flex-col gap-3 text-zinc-500 min-w-[120px]">
                <p className="font-bold text-gray-700">Social</p>
                <p>X</p>
                <p>LinkedIn</p>
              </div>

              <div className="flex flex-col gap-3 text-zinc-500 min-w-[120px]">
                <p className="font-bold text-gray-700">Support</p>
                <p>FAQs</p>
                <p>Contact Us</p>
              </div>

              <div className="flex flex-col gap-3 text-zinc-500 sm:min-w-[130px] max-w-[130px]">
                <p className="font-bold text-gray-700">Legal</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
                <p>Refund Policy</p>
                <p>Shipping & Delivery Policy</p>
              </div>

              <div className="flex flex-col gap-3 text-zinc-500 min-w-[120px]">
                <p className="font-bold text-gray-700">Company</p>
                <p>About Us</p>
                <p>Blog</p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center text-sm text-zinc-400">
            &copy; {new Date().getFullYear()} FitMaker. All rights reserved.
          </div>
        </div>
      </AnimateText>
    </footer>
  );
}
