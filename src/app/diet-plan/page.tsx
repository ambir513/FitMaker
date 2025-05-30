import Diet_data from "@/components/Diet_data";
import Diet_filter from "@/components/Diet_filter";
import React from "react";

export default function page() {
  return (
    <div className="flex justify-center items-center mt-25 ">
      <div className="w-fit flex lg:flex-row flex-col justify-center items-center gap-5 bg-[#e7e7e7] sm:px-5 sm:py-5 py-4 px-2 rounded-md animate-fade ">
        <Diet_filter />
        <Diet_data />
      </div>
    </div>
  );
}
