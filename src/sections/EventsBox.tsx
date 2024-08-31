import EventCard from "@/components/events/EventCard";
import React from "react";

const EventsBox = () => {
  return (
    <div className="w-full border-y-[1px] border-outline flex flex-col">
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
    </div>
  );
};

export default EventsBox;
