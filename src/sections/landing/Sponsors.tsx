import SponsorCard from "@/components/landing/SponsorCard";
import React from "react";
import { svgs } from "@/constants/svgs";
import Image from "next/image";

const Sponsors = () => {
  return (
    <div className="w-[90%] mx-auto py-20 mt-12 flex flex-col gap-20">
      <span className="flex flex-row gap-1 justify-between">
        <h1 className="font-aldrich text-8xl">Sponsors</h1>
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
      <section className="w-full flex flex-wrap items-center justify-center  ">
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
