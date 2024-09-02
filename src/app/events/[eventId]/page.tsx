"use client";
import DetailedEventCard from "@/components/events/DetailedEventCard";
import EventCard from "@/components/events/EventCard";
import { AUTH_PAGE } from "@/constants/routes";
import ValidateToken from "@/lib/ValidateToken";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const EventDetailsPage = ({ params }: { params: { eventId: string } }) => {
  const router = useRouter();
  useEffect(() => {
    const isValid = ValidateToken();
    if (!isValid) {
      router.push(AUTH_PAGE);
    }
  }, []);
  return (
    <div className="w-full relative">
      <div className="w-[25%]  h-6 absolute top-0 left-0 --clip-shape-pageheader-intro flex items-center pl-6 bg-primary">
        <h2 className="text-xs text-white font-auxMono relative -left-2">
          Home // Internal Events // Resonance
        </h2>
      </div>
      <div className="w-[90%] mx-auto border-x-[1px] border-outline pt-16 py-8 flex items-start justify-between"></div>
      <div className="w-[90%]  border-outline mx-auto">
        <DetailedEventCard id={params.eventId} />
      </div>
    </div>
  );
};

export default EventDetailsPage;
