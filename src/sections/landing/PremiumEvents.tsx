import BorderBox from "@/components/common/BorderBox";
import PremiumEventHoverCard from "@/components/landing/PremiumEventHoverCard";
import { svgs } from "@/constants/svgs";
import React from "react";

const PremiumEvents = () => {
  return (
    <div className="w-[90%] mx-auto pt-28 flex flex-col gap-20">
      <span className="flex flex-col gap-1">
        <h1 className="font-clash text-6xl font-semibold">Events</h1>
        <p className="text-3xl text-main font-auxMono text-primary">
          Premium Events
        </p>
      </span>
      <section className="w-full grid grid-cols-4 ">
        <PremiumEventHoverCard
          title="Hackathons"
          icon={svgs.IconDiamond}
          description="Code, create, and innovate—join the hackathon and make something great!"
        />
        <PremiumEventHoverCard
          className="relative"
          title="Workshops"
          description="Get your hands dirty and your brain buzzing—join our workshop and
          learn something new!"
          icon={svgs.IconCog}
        />

        <PremiumEventHoverCard
          className="relative"
          title="Tech-events"
          description="Unleash your tech-genius at our epic technical events."
          icon={svgs.IconBulb}
        />

        <PremiumEventHoverCard
          className=""
          title="Games"
          description="Get ready to level up and dive into our games events, where epic battles and fun await at every turn!"
          icon={svgs.IconPuzzle}
        />
      </section>
    </div>
  );
};

export default PremiumEvents;
