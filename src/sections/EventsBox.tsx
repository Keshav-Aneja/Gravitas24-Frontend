"use client";
import EventCard from "@/components/events/EventCard";
import EventCardSkeleton from "@/components/events/EventCardSkeleton";
import { eventType } from "@/constants/types/types";
import { useGlobalContext } from "@/context/GlobalContext";
import { toast } from "@/hooks/use-toast";
import { getEventList } from "@/services/event.service";
import React, { useEffect, useState } from "react";

const EventsBox = () => {
  const [events, setEvents] = useState<eventType[]>([]);
  const [loading, setLoading] = useState(true);
  const { setTotalPages } = useGlobalContext();
  const {
    eventType,
    currentPage,
    eventQuery: query,
    eventScope,
  } = useGlobalContext();
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await getEventList({
          page: currentPage,
          limit: 5,
          name: query,
          type: eventType === "All" ? "" : eventType,
          scope: eventScope,
        });
        setLoading(false);
        setEvents(response.data);
        setTotalPages(response.totalPages);
      } catch (err: any) {
        setLoading(false);
        if (err.response.data.message) {
          toast({
            title: "Error",
            description: err,
            variant: "destructive",
          });
        }
      }
    })();
  }, [currentPage, query, eventType, eventScope]);

  return (
    <div className="w-full border-y-[1px] border-outline flex flex-col gap-4 md:gap-0">
      {loading &&
        [1, 2, 3, 4, 5].map((data) => <EventCardSkeleton key={data} />)}
      {!loading && events.length === 0 && (
        <p className="text-[1rem] md:text-xl text-red-500 font-auxMono text-center py-6">
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
