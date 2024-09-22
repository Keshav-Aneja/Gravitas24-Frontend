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
const PatronCard = ({ className, image, name, desig, label }: Props) => {
  return (
    <BorderBox
      className={cn(
        "bg-base p-0 relative m-2 border-primary gap-2 flex flex-col justify-between items-center w-[250px] lg:w-[300px] max-w-full",
        className
      )}
      classNameSquares="bg-primary"
    >
      {image ? (
        <>
          <Image
            src={image}
            alt=""
            width={200}
            height={200}
            className="w-full object-cover aspect-square"
          />
          <div className="text-xl p-1 md:p-2 w-full text-left font-auxMono font-medium">
            <h1 className="h-[2lh]">{name}</h1>
            <h2 className="text-[1rem] text-primary">{desig}</h2>
          </div>
          {label && (
            <div className="absolute --patron-floater bg-primary right-0 top-[10%] p-1 px-2 text-center text-white font-auxMono font-normal ">
              <h3 className="text-[0.65rem] lg:text-sm ">{label}</h3>
            </div>
          )}
        </>
      ) : (
        <div className="text-2xl font-auxMono font-medium">
          <h1>Coming Soon</h1>
        </div>
      )}
    </BorderBox>
  );
};

export default PatronCard;
