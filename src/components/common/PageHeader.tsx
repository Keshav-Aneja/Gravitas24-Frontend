import React from "react";
import BorderBox from "./BorderBox";
import { cn } from "@/lib/utils";
type Props = {
  color?: string;
  title: string;
  tagline?: string;
  breadcrumb?: string;
  breadcrumbColor?: string;
};
export const PageHeader = ({
  color = "#000000",
  title = "Events",
  tagline = "Tagline Tagline Tagline",
  breadcrumb = "Home // Internal Events",
  breadcrumbColor = "#0C5EFF",
}: Props) => {
  return (
    <div
      className={cn(`w-full flex flex-col font-clash relative`)}
      style={{ background: color }}
    >
      <span className="w-[90%] h-[0.5rem] lg:h-[2rem] mx-auto border-x-[1px] border-outline"></span>
      <div className="w-full border-y-[1px] border-outline">
        <BorderBox className="border-y-0 w-[90%] mx-auto">
          <h1 className="text-6xl lg:text-9xl text-white  text-center">
            {title}
          </h1>
        </BorderBox>
      </div>
      <div className="w-[90%] h-[4rem] lg:h-[6rem] mx-auto border-x-[1px] border-outline relative">
        <span className="absolute top-4 left-1/2 -translate-x-1/2 lg:left-[53%] lg:-translate-x-[47%] flex items-center gap-2">
          <div className="w-3 md:w-4 lg:w-6 aspect-square rounded-full bg-white "></div>
          <h1 className="text-white text-sm md:text-lg lg:text-2xl font-light text-nowrap">
            innoVate. sustaIn. Transform
          </h1>
        </span>
        <div className="w-[40%] bg-white h-2 md:h-3 absolute bottom-0 right-6 --clip-shape-pageheader-bottom"></div>
      </div>
      <div
        className="min-w-fit  h-4 md:h-6 absolute -bottom-4 md:-bottom-6 left-0 --clip-shape-pageheader-intro flex items-center justify-start pl-4 pr-8"
        style={{ background: breadcrumbColor }}
      >
        <h2 className="text-[0.6rem] md:text-xs text-white font-auxMono relative left-1">
          {breadcrumb}
        </h2>
      </div>
    </div>
  );
};
