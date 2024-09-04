import { svgs } from "@/constants/svgs";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import { IoArrowForwardSharp } from "react-icons/io5";
import { HiArrowRight } from "react-icons/hi";
import { EVENT_PAGE } from "@/constants/routes";
import Link from "next/link";
import { useGlobalContext } from "@/context/GlobalContext";
type Props = {
  className?: string;
  title: string;
  icon: StaticImageData;
  description: string;
  glow?: boolean;
};
const PremiumEventHoverCard = ({
  className,
  title,
  icon,
  description,
  glow,
}: Props) => {
  const { setEventType, eventType } = useGlobalContext();
  return (
    <Link
      href={EVENT_PAGE}
      onClick={() => {
        setEventType(title);
      }}
    >
      <div
        className={cn(
          "p-3 md:p-6 border-[1px] bg-base border-black relative flex flex-col justify-between min-h-80 hover:bg-primary hover:text-white text-black transition-all duration-200 ease-linear group md:hover:translate-y-[30px] cursor-pointer",
          className,
          glow && "bg-primary text-white "
        )}
      >
        <div className="flex items-center gap-2">
          <Image
            src={svgs.IconSingleArrow}
            alt=""
            width={200}
            height={200}
            className={cn(
              "w-6 md:w-10 h-auto invert group-hover:invert-0 md:invert-0  md:hidden group-hover:block ",
              glow && "block invert-0"
            )}
          />
          <Image
            src={icon}
            alt=""
            width={200}
            height={200}
            className={cn(
              "w-6 md:w-12 h-auto group-hover:invert ",
              title === "Workshops" && "invert group-hover:invert-0",
              glow && (title === "Workshops" ? "invert-0" : "invert")
            )}
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-[1rem] md:text-2xl font-auxMono font-medium select-none">
            <h1>{title}</h1>
          </div>
          <p
            className={cn(
              "font-ibmPlex hidden group-hover:block text-xs md:text-[1rem] select-none",
              glow && "block"
            )}
          >
            {description}
          </p>
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
    </Link>
  );
};

export default PremiumEventHoverCard;
