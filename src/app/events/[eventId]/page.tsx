import DetailedEventCard from "@/components/events/DetailedEventCard";
import EventCard from "@/components/events/EventCard";
import React from "react";

const EventDetailsPage = () => {
  return (
    <div className="w-full relative">
      <div className="w-[25%]  h-6 absolute top-0 left-0 --clip-shape-pageheader-intro flex items-center pl-6 bg-primary">
        <h2 className="text-xs text-white font-auxMono relative -left-2">
          Home // Internal Events // Resonance
        </h2>
      </div>
      <div className="w-[90%] mx-auto border-x-[1px] border-outline pt-16 py-8 flex items-start justify-between"></div>
      <div className="w-[90%] border-[1px] border-outline mx-auto">
        <DetailedEventCard />
      </div>
    </div>
  );
};

export default EventDetailsPage;
