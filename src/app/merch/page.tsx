"use client";

import { PageHeader } from "@/components/common/PageHeader";
import PaginationBox from "@/components/common/PaginationBox";
import EventsFilter from "@/components/events/EventsFilter";
import ValidateToken from "@/lib/ValidateToken";
import MerchBox from "@/sections/merch/MerchBox";
import { getAllMerch } from "@/services/merch.service";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { AUTH_PAGE } from "@/constants/routes";
const MerchPage = () => {
  const router = useRouter();
  useEffect(() => {
    const isValid = ValidateToken();
    if (!isValid) {
      router.push(AUTH_PAGE);
    }
  }, []);
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
