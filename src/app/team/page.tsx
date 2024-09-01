"use client"

import { PageHeader } from "@/components/common/PageHeader";
import EventsFilter from "@/components/events/EventsFilter";
import TeamBox from "@/sections/team/TeamBox";
import React from "react";

const TeamPage = () => {
  return (
    <div>
      <PageHeader
        title="The Team"
        tagline="Create. Code. Conquer"
        breadcrumb="Home // The Team"
        color="#FF550C"
        breadcrumbColor="#000000"
      />
      <TeamBox />
    </div>
  );
};

export default TeamPage;
