import { svgs } from "@/constants/svgs";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import BorderBox from "../common/BorderBox";
import { IconType } from "react-icons";
type Props = {
  className?: string;
  icon: IconType;
  link: string;
  name: string;
};
const SocialsCard = (props : Props) => {
  return (
    <BorderBox
      className={cn(
        "bg-base relative flex flex-col justify-center items-center max-w-full w-[250px] max-h-full h-[230px] ",
        props.className
      )}
    >
      <a href={props.link} className="h-full w-full p-6">
        <div className="flex flex-col h-full justify-between items-start ">
          <props.icon 
            className="h-8 w-8"
            />
          <div className="text-2xl font-auxMono text-[#212121]">
            <h1>{props.name}</h1>
          </div>
        </div>
      </a>
    </BorderBox>
  );
};

export default SocialsCard;
