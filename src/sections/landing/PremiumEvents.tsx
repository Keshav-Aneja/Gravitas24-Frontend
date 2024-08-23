import PremiumEventHoverCard from "@/components/landing/PremiumEventHoverCard";
import React from "react";

const PremiumEvents = () => {
  return (
    <div className="w-[90%] mx-auto pt-28 flex flex-col gap-20">
      <span className="flex flex-col gap-1">
        <h1 className="font-clash text-6xl">Events</h1>
        <p className="text-3xl text-main font-auxMono text-primary">
          Premium Events
        </p>
      </span>
      <section className="w-full grid grid-cols-4 ">
        <PremiumEventHoverCard />
        <PremiumEventHoverCard className="relative top-6 right-1" />
        <PremiumEventHoverCard className="relative right-2 top-3" />
        <PremiumEventHoverCard className="right-3 -top-10" />
      </section>
    </div>
  );
};

export default PremiumEvents;
