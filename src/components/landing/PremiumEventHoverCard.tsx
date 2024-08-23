import { svgs } from "@/constants/svgs";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
type Props = {
  className?: string;
};
const PremiumEventHoverCard = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "p-6 border-[2px] bg-base border-black relative flex flex-col justify-between min-h-80",
        className
      )}
    >
      <Image
        src={svgs.IconDiamond}
        alt=""
        width={200}
        height={200}
        className="w-12 h-auto"
      />
      <div className="text-2xl font-auxMono font-medium">
        <h1>Premium Events</h1>
      </div>
    </div>
  );
};

export default PremiumEventHoverCard;
