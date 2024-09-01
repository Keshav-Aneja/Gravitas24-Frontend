import { svgs } from "@/constants/svgs";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import { IoArrowForwardSharp } from "react-icons/io5";
import { HiArrowRight } from "react-icons/hi";
type Props = {
  className?: string;
  title: string;
  icon: StaticImageData;
  description: string;
};
const PremiumEventHoverCard = ({
  className,
  title,
  icon,
  description,
}: Props) => {
  return (
    <div
      className={cn(
        "p-6 border-[1px] bg-base border-black relative flex flex-col justify-between min-h-80 hover:bg-primary hover:text-white text-black transition-all duration-200 ease-linear group hover:translate-y-[30px] cursor-pointer",
        className
      )}
    >
      <div className="flex items-center gap-2">
        <Image
          src={svgs.IconSingleArrow}
          alt=""
          width={200}
          height={200}
          className={cn("w-10 h-auto hidden group-hover:block ")}
        />
        <Image
          src={icon}
          alt=""
          width={200}
          height={200}
          className={cn(
            "w-12 h-auto group-hover:invert ",
            title === "Workshops" && "invert group-hover:invert-0"
          )}
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="text-2xl font-auxMono font-medium">
          <h1>{title}</h1>
        </div>
        <p className="font-ibmPlex hidden group-hover:block">{description}</p>
      </div>
      <span
        className={cn(
          "w-[10px] aspect-square bg-outline absolute -top-[5px] -right-[5px]"
        )}
      ></span>
      <span
        className={cn(
          "w-[10px] aspect-square bg-outline absolute -bottom-[5px] -right-[5px]"
        )}
      ></span>
      <span
        className={cn(
          "w-[10px] aspect-square bg-outline absolute -top-[5px] -left-[5px]"
        )}
      ></span>
      <span
        className={cn(
          "w-[10px] aspect-square bg-outline absolute -bottom-[5px] -left-[5px]"
        )}
      ></span>
    </div>
  );
};

export default PremiumEventHoverCard;
