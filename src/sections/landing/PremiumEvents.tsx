"use client";
import BorderBox from "@/components/common/BorderBox";
import PremiumEventHoverCard from "@/components/landing/PremiumEventHoverCard";
import { EVENT_PAGE } from "@/constants/routes";
import { svgs } from "@/constants/svgs";
import { Link } from "lucide-react";
import React, { useEffect, useState } from "react";

const PremiumEvents = () => {
  const [cycle, setCycle] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCycle((cycle + 1) % 4);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [cycle]);
  return (
    <div className="w-[90%] mx-auto pt-28 flex flex-col gap-12 md:gap-20">
      <span className="flex flex-col gap-1">
        <h1 className="font-clash text-4xl md:text-6xl font-semibold">
          Events
        </h1>
      </span>
      <section className="w-full grid-cols-4 hidden md:grid">
        <PremiumEventHoverCard
          title="Hackathons"
          icon={svgs.IconDiamond}
          description="Code, create, and innovate—join the hackathon and make something great!"
          type="Hackathon"
        />
        <PremiumEventHoverCard
          className="relative"
          title="Workshops"
          description="Get your hands dirty and your brain buzzing—join our workshop and
          learn something new!"
          icon={svgs.IconCog}
          type="Workshop"
        />

        <PremiumEventHoverCard
          className="relative"
          title="Tech-events"
          description="Unleash your tech-genius at our epic technical events."
          icon={svgs.IconBulb}
          type="Tech-Events"
        />

        <PremiumEventHoverCard
          className=""
          title="Games"
          description="Get ready to level up and dive into our games events, where epic battles and fun await at every turn!"
          icon={svgs.IconPuzzle}
          type="Games"
        />
      </section>
      <section className="w-full flex items-start md:hidden">
        <div className="w-1/2 flex flex-col">
          <PremiumEventHoverCard
            title="Hackathons"
            icon={svgs.IconDiamond}
            description="Code, create, and innovate—join the hackathon and make something great!"
            className="w-full  min-h-52"
            glow={cycle === 0}
            type="Hackathon"
          />
          <PremiumEventHoverCard
            className="relative w-full min-h-52"
            title="Workshops"
            description="Get your hands dirty and your brain buzzing—join our workshop and
          learn something new!"
            icon={svgs.IconCog}
            glow={cycle === 1}
            type="Workshop"
          />
        </div>

        <div className="w-1/2 flex flex-col relative top-20">
          <PremiumEventHoverCard
            className=" min-h-52"
            title="Tech-events"
            description="Unleash your tech-genius at our epic technical events."
            icon={svgs.IconBulb}
            glow={cycle === 2}
            type="Tech-Events"
          />

          <PremiumEventHoverCard
            className="min-h-52"
            title="Games"
            description="Get ready to level up and dive into our games events, where epic battles and fun await at every turn!"
            icon={svgs.IconPuzzle}
            glow={cycle === 3}
            type="Games"
          />
        </div>
      </section>
    </div>
  );
};

export default PremiumEvents;
