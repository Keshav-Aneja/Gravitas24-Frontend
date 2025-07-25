import React from "react";
import BorderBox from "../common/BorderBox";
import Image from "next/image";
import { svgs } from "@/constants/svgs";
import { CiCalendar, CiClock2 } from "react-icons/ci";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { GrGroup } from "react-icons/gr";
import { eventType } from "@/constants/types/types";
import Link from "next/link";
import { IoArrowForwardOutline } from "react-icons/io5";
import { cn } from "@/lib/utils";
import { EventRegistration } from "@/constants/types/registered";

const EventRegCard = ({
  data,
  registered = false,
}: {
  data: EventRegistration;
  registered?: boolean;
}) => {
  const startDate = new Date(data.event_slot.start_date);
  const endDate = new Date(data.event_slot.end_date);

  function formatTimeTo12Hour(hours: number, minutes: number) {
    const period = hours >= 12 ? "PM" : "AM";
    const adjustedHours = hours % 12 || 12; // Convert 0-23 hour format to 12-hour format
    return `${String(adjustedHours).padStart(2, "0")}:${String(
      minutes
    ).padStart(2, "0")} ${period}`;
  }

  const startTime = formatTimeTo12Hour(
    startDate.getUTCHours(),
    startDate.getUTCMinutes()
  );
  const endTime = formatTimeTo12Hour(
    endDate.getUTCHours(),
    endDate.getUTCMinutes()
  );

  const startDateFormatted = `${String(startDate.getUTCDate()).padStart(
    2,
    "0"
  )}-${startDate.toLocaleString("default", {
    month: "short",
  })}`;
  const endDateFormatted = `${String(endDate.getUTCDate()).padStart(
    2,
    "0"
  )}-${endDate.toLocaleString("default", {
    month: "short",
  })}`;

  return (
    <Link href={`/events/${data.event_id}`} className="w-full">
      <BorderBox className="md:px-6 md:py-10 p-0 w-[90%] mx-auto flex flex-col md:flex-row items-start md:justify-between gap-4 md:gap-8 group border-primary md:border-outline">
        <div className="w-full md:w-[20%] p-2 aspect-square border-[1px] border-black">
          <Image
            className="w-full h-full object-cover"
            src={data.event.display || ""}
            priority
            alt=""
            width={1000}
            height={1000}
          />
        </div>
        <section className="--main flex flex-col font-auxMono w-full ">
          <div className="px-3 md:px-0">
            <div className="flex w-full flex-col md:flex-row justify-between items-start md:items-center">
              <h1 className="text-xl md:text-3xl uppercase w-full">
                {data.event.name}
              </h1>
              <p className="text-xs text-nowrap md:text-[1rem]">{data.event.type}</p>
            </div>

            <p className="text-primary text-xs md:text-[1rem]">
              {data.event.tagline}
            </p>
            <div className="w-full md:w-[40%] h-[1px] md:h-[2px] bg-outline my-2 mb-4"></div>
            <div className="w-full flex flex-col md:flex-row items-start gap-4">
              {/* <span className="--winning-prize-box flex items-center gap-2 text-[#080C0B60] border-[2px] border-outline rounded-sm px-2 py-1 min-w-fit">
                <Image
                  src={svgs.Trophy}
                  alt=""
                  width={60}
                  height={60}
                  className="w-4 h-auto"
                />
                <p className="text-sm">1,00,000</p>
              </span> */}
              <p className="text-black/60 text-xs md:text-[1rem]">
                {/* {data.description.length > 200
                  ? `${data.description.slice(0, 200)}...`
                  : data.description} */}
                {data.event.short_description}
              </p>
            </div>
          </div>
          <div
            className={cn(
              "w-full h-16 bg-primaryLight flex items-center justify-between mt-6 font-auxMono ",
              registered && "bg-[#9ebfff]"
            )}
          >
            <span className="h-16 text-sm text-black  items-center gap-2 p-4 px-6 flex-grow justify-center hidden md:flex">
              <CiClock2 className="text-[1rem]" />
              <p>
                {startTime} - {endTime}
              </p>
            </span>
            <span className="h-16 text-xs md:text-sm text-black flex items-center gap-2 p-4 px-2 md:px-6 border-r-[1px] md:border-x-[1px] border-primary flex-grow justify-center ">
              <CiCalendar className="text-lg md:text-[1rem]" />
              <p className="flex gap-2 flex-col md:flex-row">
                <span>{startDateFormatted}</span>
                <span>{endDateFormatted}</span>
              </p>
            </span>
            <span className="text-xs md:text-sm text-black flex items-center gap-2 p-4 px-2 md:px-6 border-r-[1px] border-primary flex-grow justify-center h-full">
              <GrGroup className="text-[1rem]" />
              <p>{data.event.teamSize}</p>
            </span>
            <span className="text-xs md:text-sm text-black flex items-center gap-2 p-4 px-2 md:px-6  border-primary flex-grow justify-center">
              <MdOutlineCurrencyRupee className="text-[1rem]" />
              <p>{data.event.price}/-</p>
            </span>
          </div>
        </section>

        {!registered && (
          <>
            <div className="bg-primaryLight border-[1px] border-primaryLight rounded-full p-2 -rotate-[45deg] absolute top-4 right-4 md:hidden">
              <IoArrowForwardOutline />
            </div>
            <div className=" text-[#0C5EFF] text-6xl cursor-pointer w-[10%] group-hover:opacity-100 opacity-0 transition-all duration-200 ease-linear hidden md:block">
              <Image
                src={svgs.ArrowRedirect}
                alt=""
                width={200}
                height={200}
                className="w-10 h-auto float-end"
              />
            </div>
          </>
        )}
      </BorderBox>
    </Link>
  );
};

export default EventRegCard;
