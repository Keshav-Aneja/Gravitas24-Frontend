"use client";
import DetailedEventCard from "@/components/events/DetailedEventCard";
import DetailedEventCardSkeleton from "@/components/events/DetailedEventCardSkeleton";
import EventCard from "@/components/events/EventCard";
import { AUTH_PAGE } from "@/constants/routes";
import ValidateToken from "@/lib/ValidateToken";
import { useState } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
const EventDetailsPage = ({ params }: { params: { eventId: string } }) => {
  const [eventName, setEventName] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.04,
        duration: 2.5,
        smoothWheel: true,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
      }}
    >
      <div className="w-full relative">
        <div className="w-[25%]  h-6 absolute top-0 left-0 --clip-shape-pageheader-intro flex items-center pl-6 bg-primary">
          <h2 className="text-xs text-white font-auxMono relative -left-2">
            Home // Internal Events // {eventName}
          </h2>
        </div>
        <div className="w-[90%] mx-auto border-x-[1px] border-outline pt-16 py-8 flex items-start justify-between"></div>
        <div className="w-[90%]  border-outline mx-auto">
          {loading && <DetailedEventCardSkeleton />}
          <DetailedEventCard
            id={params.eventId}
            setEventName={setEventName}
            setLoading={setLoading}
          />
        </div>
      </div>
    </ReactLenis>
  );
};

export default EventDetailsPage;
