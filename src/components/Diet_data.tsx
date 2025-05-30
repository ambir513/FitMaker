"use client";
import { Card, CardFooter } from "@/components/ui/card";
import ShimmerUI from "./ShimmerUI";
import PaginationPage from "@/components/PaginationPage";
import DietCard from "./DietCard";

export default function Diet_data() {
  return (
    <Card className="lg:w-[800px] md:w-[700px] lg:h-[520px] h-fit flex flex-col justify-between animate-fade ">
      <div className="flex lg:flex-row flex-col justify-center items-center gap-4 p-2 h-fit">
        <DietCard />
      </div>
      <CardFooter className="relative mt-4">
        <div className="absolute right-20 mb-20">
          <PaginationPage />
        </div>
      </CardFooter>
    </Card>
  );
}
