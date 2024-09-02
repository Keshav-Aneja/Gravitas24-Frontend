import SponsorCard from "@/components/landing/SponsorCard";
import React from "react";
import { svgs } from "@/constants/svgs";
import Image from "next/image";

const Sponsors = () => {
  return (
    <div className="relative mx-auto py-20 mt-12 flex flex-col items-center gap-20">
      <span className="absolute --sponsor-floater h-[350px] left-0 bottom-0 w-[55px] flex flex-row items-center justify-center bg-primary">
        <p className="rotate-90 text-nowrap text-white font-auxMono">
          Tagline Tagline Tagline
        </p>
      </span>
      <span className="w-[90%] flex flex-row gap-1 justify-between">
        <h1 className="font-clash text-6xl font-semibold">Sponsors</h1>
        <div className="relative flex items-center justify-center">
          <Image src={svgs.SponsorsFloaters} alt="" width={250} height={80} />
          <span className="absolute font-sans font-bold text-primary z-10 w-3/5 h-full mt-2 right-0">
            <h1>Option 1</h1>
            <p className="text-[8px] mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </span>
        </div>
      </span>
      <section className="w-[90%] mx-auto flex flex-wrap items-center justify-center  ">
        <SponsorCard />
        <SponsorCard />
        <SponsorCard />
        <SponsorCard />
        <SponsorCard />
      </section>
    </div>
  );
};

export default Sponsors;
