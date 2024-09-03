import React from "react";
import BorderBox from "../common/BorderBox";
import Image from "next/image";
import { svgs } from "@/constants/svgs";
import { CiCalendar, CiClock2 } from "react-icons/ci";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { GrGroup } from "react-icons/gr";
import { eventType } from "@/constants/types/types";
import Link from "next/link";
import { FRONTEND_URL } from "@/constants/routes";
import Skeleton from "../common/Skeleton";
import images from "@/constants/images";
const EventCardSkeleton = () => {
  const startDate = new Date();
  const endDate = new Date();
  return (
    <BorderBox className=" px-6 py-10 w-[90%] mx-auto flex items-start justify-between gap-8">
      <Skeleton>
        <div className="w-[17%] min-w-60 aspect-square bg-black"></div>
      </Skeleton>
      <section className="--main flex flex-col font-auxMono w-full gap-2">
        <Skeleton>
          <h1 className="text-3xl">Fork This Event</h1>
        </Skeleton>
        <Skeleton>
          <p className="text-primary text-[1rem]">This is a sample tagline</p>
        </Skeleton>
        <div className="w-[40%] h-[2px] bg-outline my-2 mb-4"></div>
        <div className="w-full flex items-start gap-4">
          <Skeleton>
            <span className="--winning-prize-box flex items-center gap-2 text-[#080C0B60] border-[2px] border-outline rounded-sm px-2 py-1 min-w-fit">
              <Image
                src={svgs.Trophy}
                alt=""
                width={60}
                height={60}
                className="w-4 h-auto"
              />
              <p className="text-sm">5000000</p>
            </span>
          </Skeleton>
          <Skeleton>
            <p className="text-black/60">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatibus natus numquam nesciunt a. Fuga, repudiandae! Error
              distinctio sunt autem eius? Modi,
            </p>
          </Skeleton>
        </div>
        <div className=" bg-gray-200 animate-pulse">
          <div className="w-full  flex items-center justify-between mt-6 font-auxMono">
            <span className="text-sm text-black flex items-center gap-2 p-4 px-6 flex-grow justify-center opacity-0">
              <CiClock2 size={18} />
              <p>9:00 PM - 12:00AM</p>
            </span>
            <span className="text-sm text-black flex items-center gap-2 p-4 px-6 border-x-[1px] border-primary flex-grow justify-center opacity-0">
              <CiCalendar size={18} />
              <p>
                {startDate.getDate()} {startDate.getMonth()}-{endDate.getDate()}{" "}
                {endDate.getMonth()}
              </p>
            </span>
            <span className="text-sm text-black flex items-center gap-2 p-4 px-6 flex-grow justify-center opacity-0">
              <GrGroup size={18} />
              <p>2-4</p>
            </span>
            <span className="text-sm text-black flex items-center gap-2 p-4 px-6 border-l-[1px] border-primary flex-grow justify-center opacity-0">
              <MdOutlineCurrencyRupee size={18} />
              <p>1000/-</p>
            </span>
          </div>
        </div>
      </section>
      <Link href={`/events`} className="w-[10%] opacity-0">
        <div className=" text-[#0C5EFF] text-6xl cursor-pointer">
          <Image
            src={svgs.ArrowRedirect}
            alt=""
            width={200}
            height={200}
            className="w-10 h-auto float-end"
          />
        </div>
      </Link>
    </BorderBox>
  );
};

export default EventCardSkeleton;
