"use client";
import { PageHeader } from "@/components/common/PageHeader";
import PaginationBox from "@/components/common/PaginationBox";
import EventsFilter from "@/components/events/EventsFilter";
import EventsBox from "@/sections/EventsBox";
import { ReactLenis } from "@studio-freight/react-lenis";
import { useEffect } from "react";
import { useSearchParams } from 'next/navigation';

const EventsPage = () => {

  const searchParams = useSearchParams();
  const queryValue = searchParams.get('eventScope');

  useEffect(() => {
    document.title = "Gravitas | Events";
    const top = document.getElementById("nav");
    if (top) {
      top.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <>
      <ReactLenis
        root
        options={{
          lerp: 0.04,
          duration: 1.5,
          smoothWheel: true,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: "vertical",
        }}
      >
        <div>
          <PageHeader
            title="Events"
            tagline="Tagline Tagline Tagline"
            breadcrumb="Home // Events"
            color="#000000"
          />
          <EventsFilter scope={queryValue || ""}/>
          <EventsBox eventScope={queryValue || ""}/>
          <PaginationBox />
        </div>
      </ReactLenis>
    </>
  );
};

export default EventsPage;
