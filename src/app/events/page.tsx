"use client";
import { PageHeader } from "@/components/common/PageHeader";
import PaginationBox from "@/components/common/PaginationBox";
import EventsFilter from "@/components/events/EventsFilter";
import { AUTH_PAGE } from "@/constants/routes";
import ValidateToken from "@/lib/ValidateToken";
import EventsBox from "@/sections/EventsBox";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const EventsPage = () => {
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
