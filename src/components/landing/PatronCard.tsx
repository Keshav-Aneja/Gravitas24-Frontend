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
        "bg-base p-0 relative border-primary flex flex-col justify-between items-center w-[175px] md:w-[250px] lg:w-[300px] max-w-full",
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
            className="w-full h-auto max-h-[320px] top-0"
          />
          <div className="text-sm lg:text-2xl p-1 md:p-2 w-full text-left font-auxMono font-medium">
            <h1>{name}</h1>
            <h2 className="text-xs md:text-xl text-primary">{desig}</h2>
          </div>
          {label && (
            <div className="absolute --patron-floater bg-primary w-[60px] lg:w-[100px] right-0 top-[10%] p-1 px-2 text-center text-white font-auxMono font-normal ">
              <h3 className="text-xs lg:text-base ">{label}</h3>
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
