"use client";
import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import BorderBox from "../common/BorderBox";
import Image from "next/image";
import images from "@/constants/images";
import { RiArrowRightUpLine, RiTeamLine } from "react-icons/ri";
import { svgs } from "@/constants/svgs";
import { CiCalendar, CiClock2 } from "react-icons/ci";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { GrCaretDown, GrGroup } from "react-icons/gr";
import { BiCaretDown } from "react-icons/bi";
import { getEventDetails } from "@/services/event.service";
import { eventType, slotType } from "@/constants/types/types";
import { cn } from "@/lib/utils";
import { EVENT_PAGE } from "@/constants/routes";
import Link from "next/link";
const DetailedEventCardSkeleton = () => {
  return (
    <BorderBox className=" py-10 w-full  flex flex-col gap-8 px-0">
      <div className="w-full  flex items-start justify-between gap-8 px-0">
        <div className="w-[40%] relative ">
          <Skeleton>
            <div className="w-full aspect-square border-[1px]"></div>
          </Skeleton>
        </div>
        <section className="--main flex flex-col font-auxMono w-full">
          <div className="flex items-start justify-between pr-6">
            <section className="w-[60%]">
              <Skeleton>
                <h1 className="text-4xl font-medium ">ForkThis CSI</h1>
              </Skeleton>
              <Skeleton>
                <p className="text-primary text-xs mt-1">
                  Computer Societey of India
                </p>
              </Skeleton>
            </section>
            <Skeleton>
              <Link href={EVENT_PAGE}>
                <Image
                  src={svgs.ArrowRedirect}
                  alt=""
                  width={200}
                  height={200}
                  className="w-10 h-auto float-end -rotate-[135deg]"
                />
              </Link>
            </Skeleton>
          </div>
          <div className="w-full h-[2px] bg-outline my-2 mb-4"></div>
          <section className=" flex items-center gap-0 min-w-fit text-xl mb-2">
            <Skeleton>
              <MdOutlineCurrencyRupee size={20} />
              <p>
                50000
                <span className="text-primary text-sm">(per person)</span>
              </p>
            </Skeleton>
          </section>
          <Skeleton>
            <section className="flex flex-col gap-2 text-[1rem]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              atque vero porro ipsa, id assumenda et rerum voluptatem nam
              blanditiis error quam, consequatur alias provident impedit,
              consequuntur totam est. Eligendi!
            </section>
          </Skeleton>
          <div className="flex items-stretch gap-16 mt-6">
            <ArrowBox className="text-black text-sm font-auxMono flex flex-col gap-1">
              <Skeleton>
                <h1 className="text-secondary text-lg font-semibold mb-2">
                  VENUE
                </h1>
              </Skeleton>
              {[1, 2, 3].map((slot, index) => (
                <Skeleton key={index}>
                  <h2>SLOT SLOT SLOT</h2>
                </Skeleton>
              ))}
            </ArrowBox>
            <ArrowBox className="text-black text-sm font-auxMono flex flex-col gap-2">
              <Skeleton>
                <h1 className="text-secondary text-lg font-semibold">
                  NO OF PARTICIPANTS
                </h1>
              </Skeleton>
              <Skeleton>
                <h2>SOLO MEMBER</h2>
              </Skeleton>
            </ArrowBox>
          </div>
        </section>
      </div>
      <div className="w-full bg-primaryLight flex items-center justify-between mt-6 font-auxMono">
        <span className="text-sm text-black flex items-center justify-center flex-grow">
          -
        </span>
        <span className="text-sm text-black flex items-center gap-2 p-4 px-6 border-x-[1px] border-primary flex-grow justify-center">
          <CiCalendar size={18} />
          <p>-</p>
        </span>
        <span className="text-sm text-black flex items-center gap-2 p-4 px-6 flex-grow justify-center">
          <GrGroup size={18} />
          <p>-</p>
        </span>
        <span className="text-sm text-black flex items-center gap-2 p-4 px-6 border-l-[1px] border-primary flex-grow justify-center">
          <MdOutlineCurrencyRupee size={18} />
          <p>-</p>
        </span>{" "}
        <span className="text-sm text-black flex items-center gap-2 p-4 px-6 flex-grow justify-center border-x-[1px] border-primary">
          <CiClock2 size={18} />-
        </span>
        <button
          className="text-white bg-primary h-full flex-grow p-4 px-8 cursor-not-allowed"
          disabled
        >
          REGISTER
        </button>
      </div>
    </BorderBox>
  );
};

export default DetailedEventCardSkeleton;

function ArrowBox({
  children,
  className,
  invert,
}: {
  children: ReactNode;
  className?: string;
  invert?: boolean;
}) {
  return (
    <div className={cn("w-fit relative p-3 px-6", className)}>
      <BiCaretDown className="absolute w-4 h-4 top-0 left-0 -rotate-45" />
      <BiCaretDown className="absolute w-4 h-4 top-0 right-0 -rotate-45" />
      <GrCaretDown className="absolute w-3 h-3 bottom-0 right-0 rotate-[135deg]" />
      <GrCaretDown className="absolute w-3 h-3 bottom-0 left-0 rotate-[135deg]" />
      {children}
    </div>
  );
}
type SlotProps = {
  data: slotType;
  setSlot: Dispatch<SetStateAction<string>>;
  selectedSlot: string;
};
function SlotBox({ data, setSlot, selectedSlot }: SlotProps) {
  const startDate = new Date(data.startDate);
  console.log(startDate, data.startDate);
  const endDate = new Date(data.endDate);
  return (
    <button
      className={cn(
        "w-full px-4 py-2 border-[1px] border-black text-xs hover:bg-primaryLight",
        selectedSlot === data.slotId && "bg-primaryLight"
      )}
      onClick={() => {
        setSlot(data.slotId);
      }}
    >
      {startDate.getDate()}{" "}
      {startDate.toLocaleString("default", { month: "short" })}-{" "}
      {startDate.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })}{" "}
      {" / "}
      {endDate.getDate()}{" "}
      {endDate.toLocaleString("default", { month: "short" })}
      {" - "}
      {endDate.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })}
      <br />
      <p>
        {"// "}
        {data.venue}
      </p>
    </button>
  );
}

function Skeleton({ children }: { children: ReactNode }) {
  return (
    <div className="bg-gray-200 animate-pulse rounded-md">
      <div className="opacity-0">{children}</div>
    </div>
  );
}
