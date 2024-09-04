import { svgs } from "@/constants/svgs";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import BorderBox from "../common/BorderBox";
type Props = {
  className?: string;
  image?: string;
};
const SponsorCard = ({ className, image }: Props) => {
  return (
    <BorderBox
      className={cn(
        "bg-base relative flex flex-col justify-center items-center max-w-full w-[250px] min-h-80",
        className
      )}
    >
      {image ? (
        <Image
          src={image}
          alt=""
          width={200}
          height={200}
          className="w-full h-auto"
        />
      ) : (
        <Image
          src={svgs.IconDiamond}
          alt=""
          width={200}
          height={200}
          className="w-12 h-auto"
        />
      )}
    </BorderBox>
  );
};

export default SponsorCard;
