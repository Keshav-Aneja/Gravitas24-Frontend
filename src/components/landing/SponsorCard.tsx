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
          src={svgs.IconDiamond}
          alt=""
          width={200}
          height={200}
          className="w-12 h-auto"
        />
      ) : (
        <div className="text-2xl font-auxMono font-medium">
          <h1>Coming Soon</h1>
        </div>
      )}
    </BorderBox>
  );
};

export default SponsorCard;
