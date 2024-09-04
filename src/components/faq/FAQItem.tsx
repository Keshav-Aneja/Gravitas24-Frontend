import React, { ReactNode } from "react";
import { useState } from "react";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { RxCaretDown } from "react-icons/rx";
interface FAQListProps {
  que: string;
  ans: string;
  index: number;
  list?: string[];
  styleClass?: string;
  openItem: number;
  setOpenItem: React.Dispatch<React.SetStateAction<number>>;
  condition?: string;
}

const FAQItem: React.FC<FAQListProps> = ({
  que,
  ans,
  index,
  list,
  styleClass,
  openItem,
  setOpenItem,
  condition,
}) => {
  return (
    <div
      className={cn(
        `w-full p-4 lg:p-6 font-manrope border-y-[1px] bg-white dark:bg-dark_comp border-outline ${
          openItem === index
            ? `${styleClass ?? "h-40"}`
            : "h-24  md:h-24 overflow-hidden"
        } transition-height duration-200`,
        condition
      )}
      onClick={() => {
        if (openItem === index) {
          setOpenItem(-1);
        } else {
          setOpenItem(index);
        }
      }}
    >
      <div
        className={`text-xs md:text-[1rem] lg:text-lg flex justify-between cursor-pointer items-start`}
      >
        <div className="flex gap-6 items-center">
          <p className="font-auxMono uppercase">{que}</p>
        </div>
        <span
          className={cn(
            "p-2 duration-300 transition-all ease-linear scale-75 md:scale-100 --clip-shape-faq-btn dealy-300",
            openItem === index
              ? "  bg-primary text-white"
              : "bg-primaryLight   text-black"
          )}
        >
          <RxCaretDown
            style={{
              transform: `rotate(${openItem === index ? "180" : "0"}deg)`,
            }}
            className={"w-6 h-6  duration-300 transition-all ease-linear"}
          />
        </span>
      </div>
      <div
        className={`mt-4 text-xs text-content md:text-[1rem]  flex flex-col gap-2  ${
          openItem === index
            ? " mt-2 transition-opacity duration-300 delay-200 "
            : "mt-20 opacity-0"
        }  `}
      >
        <p className="font-ibmPlex">{ans}</p>
        {list?.map((listItem, i) => (
          <p key={i} className="text-content">
            {listItem}
          </p>
        ))}
      </div>
    </div>
  );
};
export default FAQItem;
