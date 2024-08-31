import { PageHeader } from "@/components/common/PageHeader";
import PaginationBox from "@/components/common/PaginationBox";
import EventsFilter from "@/components/events/EventsFilter";
import EventsBox from "@/sections/EventsBox";
import React from "react";

const EventsPage = () => {
  return (
    <div>
      <PageHeader
        title="Events"
        tagline="Tagline Tagline Tagline"
        breadcrumb="Home // Internal Events"
        color="#000000"
      />
      <EventsFilter />
      <EventsBox />
      <PaginationBox />
    </div>
  );
};

export default EventsPage;
