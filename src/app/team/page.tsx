"use client";

import { PageHeader } from "@/components/common/PageHeader";
import EventsFilter from "@/components/events/EventsFilter";
import TeamBox from "@/sections/team/TeamBox";
import React from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

const TeamPage = () => {
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
          title="The Team"
          tagline="Create. Code. Conquer"
          breadcrumb="Home // The Team"
          color="#d94c0f"
          breadcrumbColor="#000000"
        />
        <TeamBox />
      </div>
    </ReactLenis>
  );
};

export default TeamPage;
