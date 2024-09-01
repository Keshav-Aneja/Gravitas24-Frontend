"use client";

import { PageHeader } from "@/components/common/PageHeader";
import PaginationBox from "@/components/common/PaginationBox";
import EventsFilter from "@/components/events/EventsFilter";
import MerchBox from "@/sections/merch/MerchBox";
import { getAllMerch } from "@/services/merch.service";
import React, { useEffect } from "react";

const MerchPage = () => {
  return (
    <div>
      <PageHeader
        title="Merchandise"
        tagline="Tagline Tagline Tagline"
        breadcrumb="Home // Merchandise"
        color="#0C5EFF"
        breadcrumbColor="#000000"
      />
      <EventsFilter />
      <MerchBox />
    </div>
  );
};

export default MerchPage;
