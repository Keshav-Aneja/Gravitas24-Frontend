"use client";
import { PageHeader } from "@/components/common/PageHeader";
import PaginationBox from "@/components/common/PaginationBox";
import EventsFilter from "@/components/events/EventsFilter";
import EventsBox from "@/sections/EventsBox";
import { ReactLenis } from "@studio-freight/react-lenis";
const EventsPage = () => {
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
      <div>
        <PageHeader
          title="Events"
          tagline="Tagline Tagline Tagline"
          breadcrumb="Home // Events"
          color="#000000"
        />
        <EventsFilter />
        <EventsBox />
        <PaginationBox />
      </div>
    </ReactLenis>
  );
};

export default EventsPage;
