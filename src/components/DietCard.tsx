"use <client></client>";
import { Card } from "./ui/card";
import Image from "next/image";

export default function DietCard() {
  return (
    <Card className="w-fit pt-0 ">
      <div className="flex flex-col justify-center  gap-3">
        <div className="flex justify-center items-center ">
          <Image
            src="/diet2.jpg"
            alt="Vegetarian Diet Plan"
            width="300"
            height="100"
            className="rounded-tl-md"
          />
          <Image
            src="/diet1.webp"
            alt="Vegetarian Diet Plan"
            width="300"
            height="100"
            className="rounded-tr-sm"
          />
        </div>
        <ul className="px-4 text-[16px]">
          <li>
            <b>Breakfast:</b> Oats with milk, banana, and 4 almonds
          </li>
          <li>
            <b>Mid-morning:</b> Seasonal fruit (apple/orange) + 1 glass of lemon
            water
          </li>
          <li>
            <b>Lunch:</b> 2 chapatis, dal, mixed veg sabzi, and salad
          </li>
          <li>
            <b>Evening Snack:</b> Roasted chana or sprouts + green tea
          </li>
          <li>
            <b>Dinner:</b> Vegetable khichdi or paneer curry + 1 roti + cucumber
            raita
          </li>
        </ul>
        <p className="text-[18px] pl-4 font-bold">
          🧮 Total Protein: ~45–53g/day
        </p>
      </div>
    </Card>
  );
}
