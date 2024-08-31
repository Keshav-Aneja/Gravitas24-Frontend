import React from "react";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import BorderBox from "../common/BorderBox";
type Props = {
  className?: string;
  image?: StaticImageData;
  name?: string;
  desig?: string;
  label?: string;
};
const PatronCard = ({ className, image, name, desig, label }: Props) => {
  return (
    <BorderBox
      className={cn(
        "bg-base p-0 relative border-primary flex flex-col justify-between items-center max-w-full w-[320px] min-h-[400px]",
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
          <div className="text-2xl p-2 w-full text-left font-auxMono font-medium">
            <h1>{name}</h1>
            <h2 className="text-xl text-primary">{desig}</h2>
          </div>
          <div className="text-lg bg-primary w-full p-2 text-white font-auxMono font-normal">
            <h3>{label}</h3>
          </div>
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
