import images from "@/constants/images";
import React, { useEffect } from "react";
import Image from "next/image";
import { svgs } from "@/constants/svgs";
import SeparatorBottom from "@/components/landing/SeparatorBottom";
import Link from "next/link";
import {
  EVENT_PAGE,
  FAQ_PAGE,
  MERCH_PAGE,
  TEAM_PAGE,
} from "@/constants/routes";

export default function Hero() {
  return (
    <div
      className="w-full overflow-x-hidden relative hidden md:block"
      style={{ height: "calc(100vh-4.5rem)" }}
      id="hero"
    >
      <Image
        src={svgs.Floater1}
        alt=""
        width={100}
        height={300}
        className="h-40 w-auto absolute top-1/2 left-0 -translate-y-1/2"
      />
      <SeparatorTop />
      <div className="w-[90%] mx-auto aspect-[1920/1080] overflow-hidden relative z-[50]">
        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-[60%] z-[100] w-full flex flex-col items-center gap-12">
          <Image
            src={images.gravitasLogo}
            alt="Gravitas"
            width={1000}
            height={800}
            className=" w-[60%] h-auto"
          />
          <div className="w-full flex items-center gap-3 justify-center">
            <MerchBtn />
            <EventBtn />
          </div>
        </div>
        <video
          src="/video/HeroBackgroundNew.webm"
          width={1920}
          height={1080}
          className="w-full z-[50]"
          style={{ zIndex: 50 }}
          playsInline={true}
          autoPlay={true}
          muted={true}
          loop={true}
        />
      </div>
      <SeparatorBottom />
    </div>
  );
}

function EventBtn() {
  return (
    <Link href={EVENT_PAGE}>
      <div className="relative w-48 scale-x-110 font-auxMono cursor-pointer hover:scale-x-[115%] hover:scale-y-[105%] transition-all duration-100 ease-linear active:scale-x-110 active:scale-y-[100%]">
        <Image
          src={svgs.HeroBtnA}
          alt=""
          width={400}
          height={300}
          className="w-full h-auto"
        />
        <p className="absolute bottom-1 left-1/2 -translate-x-1/2  text-white  font-medium text-[1rem] tracking-widest ">
          EVENTS
        </p>
      </div>
    </Link>
  );
}
function MerchBtn() {
  return (
    <Link href={MERCH_PAGE}>
      <div className="relative w-48 scale-x-110 font-auxMono top-[14px] cursor-pointer hover:scale-x-[115%] hover:scale-y-[105%] transition-all duration-100 ease-linear active:scale-x-110 active:scale-y-[100%]">
        <Image
          src={svgs.HeroBtnB}
          alt=""
          width={400}
          height={300}
          className="w-full h-auto"
        />
        <p className="absolute top-1 left-20   font-medium text-[1rem] tracking-widest text-nowrap ">
          Merch
        </p>
      </div>
    </Link>
  );
}

function SeparatorTop() {
  return (
    <>
      {" "}
      <div className="w-full  h-[20px] bg-base absolute top-0 left-0 z-[100]">
        <div className="w-[90%] h-full mx-auto grid grid-cols-5">
          <span className="border-x-[1px] border-outline relative">
            <span className="w-[6px] h-[6px] bg-outline absolute -bottom-[3px] -left-[3px]"></span>
          </span>
          <span></span>
          <span className="border-x-[1px] border-outline"></span>
          <span></span>
          <span className="border-x-[1px] border-outline relative">
            <span className="w-[6px] h-[6px] bg-outline absolute -bottom-[3px] -right-[3px]"></span>
          </span>
        </div>
      </div>
    </>
  );
}
