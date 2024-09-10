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
import { CiCalendar, CiClock2 } from "react-icons/ci";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { GrCaretDown, GrGroup } from "react-icons/gr";
import { BiCaretDown } from "react-icons/bi";
import { getEventDetails } from "@/services/event.service";
import { eventType, slotType } from "@/constants/types/types";
import { cn } from "@/lib/utils";
import Cookie from "js-cookie";
import axiosInstance from "@/config/axios";
import { CreateTransactionResponse } from "@/constants/types/transaction";
import Scroller from "../common/Scroller";
import { toast } from "@/hooks/use-toast";
import images from "@/constants/images";
import Skeleton from "../common/Skeleton";

const DetailedEventCardSkeleton = () => {
  return (
    <BorderBox className=" md:py-10 py-0 w-full  flex flex-col gap-8 px-0">
      <div className="w-full   flex flex-col md:flex-row items-start md:justify-between gap-4 md:gap-8 px-0">
        <div className="w-full md:w-[40%] relative ">
          <Skeleton>
            <Image
              className="w-full aspect-square border-[1px] border-black"
              src={images.gravitasLogo}
              alt=""
              width={1000}
              height={1000}
            />
          </Skeleton>
        </div>
        <section className="--main flex flex-col font-auxMono w-full md:w-[60%] px-2 md:px-0 gap-4">
          <h1 className="text-3xl md:text-4xl font-medium">
            <Skeleton>FORK THIS EVENT</Skeleton>
          </h1>
          <p className="text-primary text-sm md:text-lg">
            <Skeleton>COMPUTER SOCIETEY OF INDIA</Skeleton>
          </p>
          <div className="w-full h-[2px] bg-outline my-2 mb-4"></div>
          <section className=" flex items-center gap-0 min-w-fit text-[1rem] md:text-xl">
            <MdOutlineCurrencyRupee size={20} />
            <Skeleton>
              <p>
                10000
                <span className="text-primary text-sm">(per person)</span>
              </p>
            </Skeleton>
          </section>
          <Skeleton>
            <section className="flex flex-col gap-2 text-sm md:text-[1rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit modi
              suscipit earum sunt excepturi facere eveniet facilis doloremque
              nulla nemo quo non molestias, porro iusto obcaecati.
            </section>
          </Skeleton>
          <div className="flex flex-col md:flex-row md:items-stretch gap-4 md:gap-16 mt-6">
            <ArrowBox className="w-full md:w-fit flex flex-col gap-1 md:block items-center justify-center text-black text-xs md:text-sm font-auxMono">
              <h1 className="text-secondary text-[1rem] md:text-lg font-semibold">
                <Skeleton>VENUE</Skeleton>
              </h1>
              <Skeleton>
                {[1, 2, 3, 4].map((slot, index) => (
                  <h2 key={index} className="mt-1">
                    SLOT SLOT
                  </h2>
                ))}
              </Skeleton>
            </ArrowBox>
            <ArrowBox className="w-full flex md:w-fit flex-col gap-1 md:block items-center justify-center text-black text-xs md:text-sm font-auxMono">
              <Skeleton>
                <h1 className="text-secondary text-[1rem] md:text-lg font-semibold">
                 NO OF PARTICIPANTS PER TEAM
                </h1>
              </Skeleton>
              <Skeleton>
                <h2 className="mt-2">SOLO MEMBER</h2>
              </Skeleton>
            </ArrowBox>
          </div>
        </section>
      </div>
      <div className="w-full  flex items-center justify-end mt-0 font-auxMono md:px-6">
        {/* <span className="text-sm text-black flex items-center justify-center flex-grow">
          {eventDetails.name}
        </span>
        <span className="text-sm text-black flex items-center gap-2 p-4 px-6 border-x-[1px] border-primary flex-grow justify-center">
          <CiCalendar size={18} />
          {startDate && endDate && (
            <p>
              {startDate.getDate()}{" "}
              {startDate.toLocaleString("default", { month: "short" })}-
              {endDate.getDate()}{" "}
              {endDate.toLocaleString("default", { month: "short" })}
            </p>
          )}
        </span> */}
        {/* <span className="text-sm text-black flex items-center gap-2 p-4 px-6 flex-grow justify-center">
          <GrGroup size={18} />
          <p>{eventDetails.teamSize}</p>
        </span>
        <span className="text-sm text-black flex items-center gap-2 p-4 px-6 border-l-[1px] border-primary flex-grow justify-center">
          <MdOutlineCurrencyRupee size={18} />
          <p>{eventDetails.price}/-</p>
        </span>{" "} */}
        {/* <span className="text-sm text-black flex items-center gap-2 p-4 px-6 flex-grow justify-center border-x-[1px] border-primary">
          <CiClock2 size={18} />
          {startDate && endDate && (
            <p>
              {startDate.toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}{" "}
              -{" "}
              {endDate.toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
            </p>
          )}
        </span> */}
        <Skeleton>
          {" "}
          <button
            className="text-white bg-primary h-full  p-4 w-full md:w-fit px-16"
            disabled
          >
            REGISTER
          </button>
        </Skeleton>
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
    <div className={cn("w-fit relative p-3 px-3 md:px-6", className)}>
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
  // console.log(startDate, data.startDate);
  const endDate = new Date(data.endDate);
  return (
    <button
      className={cn(
        "w-full px-2 py-2 border-[1px] border-black text-xs tracking-tighter hover:bg-primaryLight select-none",
        selectedSlot === data.slotId && "bg-primaryLight"
      )}
      onClick={() => {
        setSlot(data.slotId);
      }}
    >
      <p>
        {"// "}
        {data.venue}
      </p>
      {startDate.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })}
      {", "}
      {startDate.getDate()}{" "}
      {startDate.toLocaleString("default", { month: "short" })} {" - "}
      {endDate.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })}
      {", "}
      {endDate.getDate()}{" "}
      {endDate.toLocaleString("default", { month: "short" })}
      <p className="text-xs md:text-sm">Available Seats: {data.totalEntries}</p>
    </button>
  );
}
