import SponsorCard from "@/components/landing/SponsorCard";
import React from "react";
import { svgs } from "@/constants/svgs";
import Image from "next/image";

const Sponsors = () => {
  return (
    <div className="relative mx-auto py-20 mt-12 flex flex-col items-center gap-20">
      <span className="absolute --sponsor-floater  scale-75 md:scale-100 h-[350px] -left-2 md:left-0 bottom-0 w-[55px] flex flex-row items-center justify-center bg-primary">
        <p className="text-xs md:text-[1rem] rotate-90 text-nowrap text-white font-auxMono">
          innoVate sustaIn Transform
        </p>
      </span>
      <span className="w-[90%] flex flex-row gap-1 justify-between">
        <h1 className="font-clash text-4xl md:text-6xl font-semibold">
          Sponsors
        </h1>
        <div className="relative hidden md:flex items-center justify-center">
          <Image src={svgs.SponsorsFloaters} alt="" width={250} height={80} />
          <span className="absolute font-sans font-bold text-primary z-10 w-3/5 h-full mt-6 right-0">
            {/* <h1>Option 1</h1> */}
            <p className="text-[12px] mt-2">Innovate Sustain Transform</p>
          </span>
        </div>
      </span>
      <section className="w-[90%] mx-auto flex flex-wrap items-center justify-center  ">
        <SponsorCard image="https://imgur.com/P9Lg4yH.png" />
        <SponsorCard image="https://i.imgur.com/zVNtEkF.png" />
      </section>
      <section className="w-[90%] mx-auto flex flex-col items-center justify-center  ">
        <h1 className="font-clash text-2xl md:text-4xl font-semibold">
          Travel Partner 
        </h1>
        <SponsorCard image="https://i.imgur.com/3jPO4u6.png" />
      </section>
    </div>
  );
};

export default Sponsors;
