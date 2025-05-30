import { CalendarIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export function HoverProfile() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link" className=" text-sm text-zinc-500">
          Crafted by
          <span className="font-semibold text-gray-700">Amar Biradar</span>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 sm:mt-10 mt-0 ml-10">
        <Link
          href="https://amarbiradar.ct.ws/"
          target="_blank"
          className="flex items-center gap-4 "
        >
          <div className="w-full">
            <Image
              src="/profile.png"
              alt="Amar Biradar Profile"
              width={300}
              height={300}
              className="rounded-full"
            />
          </div>
        </Link>
      </HoverCardContent>
    </HoverCard>
  );
}
