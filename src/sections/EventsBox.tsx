"use client";
import EventCard from "@/components/events/EventCard";
import { eventType } from "@/constants/types/types";
import { useGlobalContext } from "@/context/GlobalContext";
import { getEventList } from "@/services/event.service";
import React, { useEffect } from "react";

const EventsBox = () => {
  const [events, setEvents] = React.useState<eventType[]>([]);
  const { setTotalPages } = useGlobalContext();
  const { eventType, currentPage, eventQuery: query } = useGlobalContext();
  useEffect(() => {
    (async () => {
      try {
        const response = await getEventList({
          page: currentPage,
          limit: 5,
          name: query,
          type: eventType,
        });

        setEvents(response.data);
        setTotalPages(response.totalPages);
      } catch (error) {}
    })();
  }, [currentPage, query, eventType]);
  return (
    <div className="w-full border-y-[1px] border-outline flex flex-col">
      {events.length === 0 && (
        <p className="text-xl text-red-500 font-auxMono text-center py-6">
          No Matched Events found!
        </p>
      )}
      {events.map((event, index) => (
        <EventCard key={index} data={event} />
      ))}
    </div>
  );
};

export default EventsBox;
