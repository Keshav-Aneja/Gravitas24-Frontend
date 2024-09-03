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
import DetailedEventCardSkeleton from "./DetailedEventCardSkeleton";
const DetailedEventCard = ({
  id,
  setEventName,
  setLoading,
}: {
  id: string;
  setEventName?: Dispatch<SetStateAction<string>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
}) => {
  const [eventDetails, setEventDetails] = useState<eventType | null>(null);
  const startDate = eventDetails && new Date(eventDetails.startDate);
  const endDate = eventDetails && new Date(eventDetails.endDate);
  const [selectedSlot, setSelectedSlot] = useState("");
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const eventDetails = await getEventDetails(id);
        setLoading(false);
        setEventDetails(eventDetails);
        setEventName && setEventName(eventDetails.name);
      } catch (error) {
        setLoading(false);
      }
    })();
  }, []);
  if (!eventDetails) {
    return null;
  }

  return (
    <BorderBox className=" py-10 w-full  flex flex-col gap-8 px-0">
      <div className="w-full  flex items-start justify-between gap-8 px-0">
        <div className="w-[40%] relative ">
          <div className="bg-white h-5 w-[60%] --clip-shape-card-image-top absolute top-0 left-0 flex items-center justify-center gap-2   ">
            <span className="bg-primary h-[0.6rem] aspect-square rounded-full"></span>
            <span className="bg-primary h-[0.6rem] aspect-square rounded-full"></span>
            <span className="bg-primary h-[0.6rem] aspect-square rounded-full"></span>
          </div>
          <Image
            className="w-full aspect-square border-[1px] border-black"
            src={eventDetails.display}
            alt=""
            width={1000}
            height={1000}
          />
        </div>
        <section className="--main flex flex-col font-auxMono w-full">
          <div className="flex items-start justify-between pr-6">
            <section className="">
              <h1 className="text-4xl font-medium">{eventDetails.name}</h1>
              <p className="text-primary text-lg">{eventDetails.club}</p>
            </section>
            <Link href={EVENT_PAGE}>
              <Image
                src={svgs.ArrowRedirect}
                alt=""
                width={200}
                height={200}
                className="w-10 h-auto float-end -rotate-[135deg]"
              />
            </Link>
          </div>
          <div className="w-full h-[2px] bg-outline my-2 mb-4"></div>
          <section className=" flex items-center gap-0 min-w-fit text-xl">
            <MdOutlineCurrencyRupee size={20} />
            <p>
              {eventDetails.price}
              <span className="text-primary text-sm">(per person)</span>
            </p>
          </section>
          <section className="flex flex-col gap-2 text-[1rem]">
            {eventDetails.description}
          </section>
          <div className="flex items-stretch gap-16 mt-6">
            <ArrowBox className="text-black text-sm font-auxMono">
              <h1 className="text-secondary text-lg font-semibold">VENUE</h1>
              {eventDetails.slots?.map((slot, index) => (
                <h2 key={index}>{slot?.venue}</h2>
              ))}
            </ArrowBox>
            <ArrowBox className="text-black text-sm font-auxMono">
              <h1 className="text-secondary text-lg font-semibold">
                NO OF PARTICIPANTS
              </h1>
              <h2>SOLO MEMBER</h2>
            </ArrowBox>
          </div>
          <ArrowBox
            className="text-black text-sm font-auxMono w-full flex flex-col items-center gap-3 mt-6"
            invert
          >
            <h1 className="text-secondary text-lg font-semibold">SLOTS</h1>
            <div className="w-full grid grid-cols-2 gap-1">
              {eventDetails.slots?.map((slot, index) => (
                <SlotBox
                  key={index}
                  data={slot}
                  setSlot={setSelectedSlot}
                  selectedSlot={selectedSlot}
                />
              ))}
            </div>
          </ArrowBox>
        </section>
      </div>
      <div className="w-full bg-primaryLight flex items-center justify-between mt-6 font-auxMono">
        <span className="text-sm text-black flex items-center justify-center flex-grow">
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
        </span>
        <span className="text-sm text-black flex items-center gap-2 p-4 px-6 flex-grow justify-center">
          <GrGroup size={18} />
          <p>{eventDetails.teamSize}</p>
        </span>
        <span className="text-sm text-black flex items-center gap-2 p-4 px-6 border-l-[1px] border-primary flex-grow justify-center">
          <MdOutlineCurrencyRupee size={18} />
          <p>{eventDetails.price}/-</p>
        </span>{" "}
        <span className="text-sm text-black flex items-center gap-2 p-4 px-6 flex-grow justify-center border-x-[1px] border-primary">
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
        </span>
        <button className="text-white bg-primary h-full flex-grow p-4 px-8">
          REGISTER
        </button>
      </div>
    </BorderBox>
  );
};

export default DetailedEventCard;

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
