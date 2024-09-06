"use client";
import { PageHeader } from "@/components/common/PageHeader";
import EventsFilter from "@/components/events/EventsFilter";
import MerchBox from "@/sections/merch/MerchBox";
import React from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

const MerchPage = () => {
  return (
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
          title="Merchandise"
          tagline="Tagline Tagline Tagline"
          breadcrumb="Home // Merchandise"
          color="#0C5EFF"
          breadcrumbColor="#000000"
        />
        {/* <EventsFilter /> */}
        <MerchBox />
      </div>
    </ReactLenis>
  );
};

export default MerchPage;
