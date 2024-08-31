import React, { ReactNode } from "react";
import BorderBox from "../common/BorderBox";
import Image from "next/image";
import images from "@/constants/images";
import { RiArrowRightUpLine, RiTeamLine } from "react-icons/ri";
import { svgs } from "@/constants/svgs";
import { CiCalendar, CiClock2 } from "react-icons/ci";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { GrCaretDown, GrGroup } from "react-icons/gr";
import { BiCaretDown } from "react-icons/bi";
const DetailedEventCard = () => {
  return (
    <BorderBox className=" py-10 w-full  flex flex-col gap-8 px-0">
      <div className="w-full  flex items-start justify-between gap-8 px-0">
        <div className="w-[40%] relative ">
          <div className="bg-white h-5 w-[60%] --clip-shape-card-image-top absolute top-0 left-0 flex items-center justify-center gap-2">
            <span className="bg-primary h-[0.6rem] aspect-square rounded-full"></span>
            <span className="bg-primary h-[0.6rem] aspect-square rounded-full"></span>
            <span className="bg-primary h-[0.6rem] aspect-square rounded-full"></span>
          </div>
          <Image
            className="w-full aspect-square border-[1px] border-black"
            src={images.sample}
            alt=""
          />
        </div>
        <section className="--main flex flex-col font-auxMono w-full">
          <h1 className="text-4xl font-medium">RESONANCE</h1>
          <p className="text-primary text-lg">Pravega F1 Racing club</p>
          <div className="w-full h-[2px] bg-outline my-2 mb-4"></div>
          <section className=" flex items-center gap-0 min-w-fit text-xl">
            <MdOutlineCurrencyRupee size={20} />
            <p>
              1000 <span className="text-primary text-sm">(per person)</span>
            </p>
          </section>
          <section className="flex flex-col gap-2 text-[1rem]">
            <p>
              Gather your allies, put on your vests, and step into the arena!
            </p>
            <p>
              Laser Tag is an immersive and exciting multiplayer game where you
              get to dawn vests and shoot laser guns at your opponents. Every
              year the indoor game is played in an arena with a theme
              referencing pop culture, this year being Rick and Morty.
            </p>
            <p>
              Create unforgettable memories with your friends this
              Riviera&apos;s and join us at VIT&apos;s most registered event-
              Laser Tag.
            </p>
          </section>
          <div className="flex items-stretch gap-16 mt-6">
            <ArrowBox className="text-black text-sm font-auxMono">
              <h1 className="text-secondary text-lg font-semibold">VENUE</h1>
              <h2>COMM101</h2>
              <h2>COMM201</h2>
            </ArrowBox>
            <ArrowBox className="text-black text-sm font-auxMono">
              <h1 className="text-secondary text-lg font-semibold">
                NO OF PARTICIPANTS
              </h1>
              <h2>SOLO MEMBER</h2>
            </ArrowBox>
          </div>
        </section>
      </div>
      <div className="w-full bg-primaryLight flex items-center justify-between mt-6 font-auxMono">
        <span className="text-sm text-black flex items-center justify-center flex-grow">
          Pravega Racing
        </span>
        <span className="text-sm text-black flex items-center gap-2 p-4 px-6 border-r-[1px] border-primary flex-grow justify-center">
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
        </span>{" "}
        <span className="text-sm text-black flex items-center gap-2 p-4 px-6 flex-grow justify-center border-x-[1px] border-primary">
          <CiClock2 size={18} />
          <p>9:00 AM - 11:00 AM</p>
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
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className="w-fit relative p-3 px-6">
      <BiCaretDown className="absolute top-0 left-0 -rotate-45" />
      <BiCaretDown className="absolute top-0 right-0 -rotate-45" />
      <GrCaretDown className="absolute w-3 h-3 bottom-0 right-0 rotate-[135deg]" />
      <GrCaretDown className="absolute w-3 h-3 bottom-0 left-0 rotate-[135deg]" />
      {children}
    </div>
  );
}
