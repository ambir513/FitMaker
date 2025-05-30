"use client"
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const fallbackImage = "/default.png";
type CardProps = {
  title: string;
  description: string;
  images: string;
};

export function HomeCard({ title, description, images }: CardProps) {
  return (
    <Card className="w-[320px] h-[171px] shadow-lg hover:shadow-xl duration-400 ease-in hover:-translate-y-1 cursor-pointer rounded-2xl ">
      <CardHeader className="flex justify-center items-center gap-4 text-center">
        <div className="flex flex-col justify-center items-center gap-3">
          <CardTitle className="text-md font-semibold flex items-center gap-3">
            <div className="w-[50px]">
              <Image
                src={images || fallbackImage}
                alt="card image"
                width={100}
                height={300}
              />
            </div>
            <p>{title}</p>
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
}
