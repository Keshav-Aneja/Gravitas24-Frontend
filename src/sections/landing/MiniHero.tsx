import React from "react";
import Image from "next/image";
import { EVENT_PAGE, MERCH_PAGE } from "@/constants/routes";
import Link from "next/link";
import { svgs } from "@/constants/svgs";
import images from "@/constants/images";
import SeparatorBottom from "@/components/landing/SeparatorBottom";
import SeparatorBottomMini from "@/components/landing/SeparatorBottomMini";
const MiniHero = () => {
  return (
    <div className="relative md:hidden -mb-28">
      <div
        className="w-full overflow-x-hidden relative min-h-[40rem]"
        style={{ height: "calc(100vh-4.5rem)" }}
      >
        <SeparatorTop />
        <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-[70%] z-[100] w-full flex flex-col items-center gap-8">
          <Image
            src={images.gravitasLogo}
            alt="Gravitas"
            width={1000}
            height={800}
            className=" w-[70%] h-auto"
          />
          <div className="w-full flex items-center gap-1 justify-center">
            <MerchBtn />
            <EventBtn />
          </div>
        </div>
        <div className="w-[5%] h-full bg-white absolute top-0 left-0 z-[100]"></div>
        <div className="w-[5%] h-full bg-white absolute top-0 right-0 z-[100]"></div>
        <div className="w-full h-60 bg-white absolute bottom-0 left-0 z-[100]"></div>
        <SeparatorBottomMini />
        <div className="w-full h-full relative max-w-screen max-h-screen overflow-hidden">
          <div className="w-full scale-y-[300%] scale-x-[300%] relative -top-10">
            <video
              src="/video/HeroBackgroundNew.webm"
              className="h-screen  mx-auto z-[50] "
              style={{ zIndex: 50 }}
              playsInline={true}
              autoPlay={true}
              muted={true}
              loop={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniHero;

function EventBtn() {
  return (
    <Link href={EVENT_PAGE}>
      <div className="relative w-32 md:w-48  scale-x-110 font-auxMono cursor-pointer hover:scale-x-[115%] hover:scale-y-[105%] transition-all duration-100 ease-linear active:scale-x-110 active:scale-y-[100%]">
        <Image
          src={svgs.HeroBtnA}
          alt=""
          width={400}
          height={300}
          className="w-full scale-y-[135%]"
        />
        <p className="absolute bottom-0 left-1/2 -translate-x-1/2  text-white  font-medium text-xs md:text-[1rem] tracking-widest ">
          EVENTS
        </p>
      </div>
    </Link>
  );
}
function MerchBtn() {
  return (
    <Link href={MERCH_PAGE}>
      <div className="relative w-32 md:w-48 scale-x-110 font-auxMono top-[12px] cursor-pointer hover:scale-x-[115%] hover:scale-y-[105%] transition-all duration-100 ease-linear active:scale-x-110 active:scale-y-[100%]">
        <Image
          src={svgs.HeroBtnB}
          alt=""
          width={400}
          height={300}
          className="w-full h-auto scale-y-[130%]"
        />
        <p className="absolute top-1 right-4   font-medium text-xs md:text-[1rem] tracking-widest text-nowrap ">
          BUY MERCH
        </p>
      </div>
    </Link>
  );
}
function SeparatorTop() {
  return (
    <>
      <div className="w-full  h-[20px] bg-base absolute top-0 left-0 z-[100]">
        <div className="w-full h-full mx-auto grid grid-cols-4">
          <span className="border-x-[1px] border-outline relative col-span-1">
            <span className="w-[6px] h-[6px] bg-outline absolute -bottom-[3px] -right-[3px]"></span>
            <span className="w-[6px] h-[6px] bg-outline absolute -bottom-[3px] -left-[3px]"></span>
            <span className="w-[6px] h-[6px] bg-outline absolute -top-[3px] -left-[3px]"></span>
            <span className="w-[6px] h-[6px] bg-outline absolute -top-[3px] -right-[3px]"></span>
          </span>
          <span className="border-x-[1px] border-outline col-span-2"></span>
          <span className="border-x-[1px] border-outline relative col-span-1">
            <span className="w-[6px] h-[6px] bg-outline absolute -bottom-[3px] -right-[3px]"></span>
          </span>
        </div>
      </div>
    </>
  );
}
