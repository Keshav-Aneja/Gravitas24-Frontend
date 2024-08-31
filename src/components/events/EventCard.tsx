import React from "react";
import BorderBox from "../common/BorderBox";
import Image from "next/image";
import images from "@/constants/images";
import { RiArrowRightUpLine, RiTeamLine } from "react-icons/ri";
import { svgs } from "@/constants/svgs";
import { CiCalendar, CiClock2 } from "react-icons/ci";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { GrGroup } from "react-icons/gr";
const EventCard = () => {
  return (
    <BorderBox className=" px-6 py-10 w-[90%] mx-auto flex items-start justify-between gap-8">
      <Image
        className="w-[17%] aspect-square border-[1px] border-black"
        src={images.sample}
        alt=""
      />
      <section className="--main flex flex-col font-auxMono w-full">
        <h1 className="text-3xl">RESONANCE</h1>
        <p className="text-primary text-[1rem]">Pravega F1 Racing club</p>
        <div className="w-[40%] h-[2px] bg-outline my-2 mb-4"></div>
        <div className="w-full flex items-start gap-4">
          <span className="--winning-prize-box flex items-center gap-2 text-[#080C0B60] border-[2px] border-outline rounded-sm px-2 py-1 min-w-fit">
            <Image
              src={svgs.Trophy}
              alt=""
              width={60}
              height={60}
              className="w-4 h-auto"
            />
            <p className="text-sm">1,00,000</p>
          </span>
          <p className="text-black/60">
            A puzzle challenge to test the medical and pathological knowledge of
            participants.
          </p>
        </div>
        <div className="w-full bg-primaryLight flex items-center justify-between mt-6 font-auxMono">
          <span className="text-sm text-black flex items-center gap-2 p-4 px-6 flex-grow justify-center">
            <CiClock2 size={18} />
            <p>9:00 AM - 11:00 AM</p>
          </span>
          <span className="text-sm text-black flex items-center gap-2 p-4 px-6 border-x-[1px] border-primary flex-grow justify-center">
            <CiCalendar size={18} />
            <p>29 Feb-1 Mar</p>
          </span>
          <span className="text-sm text-black flex items-center gap-2 p-4 px-6 flex-grow justify-center">
            <GrGroup size={18} />
            <p>2-4</p>
          </span>
          <span className="text-sm text-black flex items-center gap-2 p-4 px-6 border-l-[1px] border-primary flex-grow justify-center">
            <MdOutlineCurrencyRupee size={18} />
            <p>1000/-</p>
          </span>
        </div>
      </section>
      <div className="w-[10%] text-[#0C5EFF] text-6xl cursor-pointer">
        <Image
          src={svgs.ArrowRedirect}
          alt=""
          width={200}
          height={200}
          className="w-10 h-auto float-end"
        />
      </div>
    </BorderBox>
  );
};

export default EventCard;
