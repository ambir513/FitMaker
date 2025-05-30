import { CalendarIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface User {
  title: string;
  hoverTitle: string;
  description: string;
  subDescription: string;
  image: string;
  CSS: string;
}
export function HoverCards({
  title,
  hoverTitle,
  description,
  subDescription,
  image,
  CSS,
}: User) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link" className="font-bold">
          {title}
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className={`w-80 ${CSS}`}>
        <div className="flex justify-between gap-4">
          <Avatar>
            <AvatarImage src={image} />
            <AvatarFallback>LOGO</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{hoverTitle}</h4>
            <p className="text-sm">{description}</p>
            <div className="text-muted-foreground text-xs">
              {subDescription}
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
