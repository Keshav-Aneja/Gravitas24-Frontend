import React from "react";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import BorderBox from "../common/BorderBox";

type Props = {
  className?: string;
  image?: StaticImageData | string;
  name?: string;
  desig?: string;
  label?: string;
};
const TeamCard = ({ className, image, name, desig, label }: Props) => {
  return (
    <BorderBox
      className={cn(
        "bg-base p-0 relative border-primary flex flex-col justify-between items-center max-w-full w-[260px] md:w-[320px] h-full",
        className
      )}
      classNameSquares="bg-primary"
    >
      <>
        {image && (
          <Image
            src={image}
            alt=""
            width={200}
            height={200}
            className="w-full aspect-square object-cover"
          />
        )}
        <div className="text-lg md:text-2xl w-full flex flex-col h-full text-left font-auxMono font-medium">
          <h1 className="p-1 line-clamp-2 h-[2lh] flex items-center text-center justify-center">{name}</h1>
          <h2 className="text-[0.8rem] md:text-lg p-2 border border-primary bg-primaryLight text-black">
            {desig}
          </h2>
        </div>
      </>
    </BorderBox>
  );
};

export default TeamCard;
