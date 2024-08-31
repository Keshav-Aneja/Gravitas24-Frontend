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
  breadcrumbColor = "#0c5eff",
}: Props) => {
  return (
    <div
      className={cn(`w-full flex flex-col font-clash relative`)}
      style={{ background: color }}
    >
      <span className="w-[90%] h-[2rem] mx-auto border-x-[1px] border-outline"></span>
      <div className="w-full border-y-[1px] border-outline">
        <BorderBox className="border-y-0 w-[90%] mx-auto">
          <h1 className="text-9xl text-white  text-center">{title}</h1>
        </BorderBox>
      </div>
      <div className="w-[90%] h-[6rem] mx-auto border-x-[1px] border-outline relative">
        <span className="absolute top-4 left-[53%] -translate-x-[47%] flex items-center gap-2">
          <div className="w-6 aspect-square rounded-full bg-white "></div>
          <h1 className="text-white text-2xl font-light">{tagline}</h1>
        </span>
        <div className="w-[40%] bg-white h-3 absolute bottom-0 right-6 --clip-shape-pageheader-bottom"></div>
      </div>
      <div
        className="w-[15%]  h-6 absolute -bottom-6 left-0 --clip-shape-pageheader-intro flex items-center justify-center"
        style={{ background: breadcrumbColor }}
      >
        <h2 className="text-xs text-white font-auxMono relative -left-2">
          {breadcrumb}
        </h2>
      </div>
    </div>
  );
};
