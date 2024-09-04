"use client";
import { PageHeader } from "@/components/common/PageHeader";
import EventCard from "@/components/events/EventCard";
import MerchCard from "@/components/merch/MerchCard";
import { eventType, merchType } from "@/constants/types/types";
import { cn } from "@/lib/utils";
import { getProfileDetails } from "@/services/user.service";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ValidateToken from "@/lib/ValidateToken";
export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter();
  useEffect(() => {
    const isVerified = ValidateToken();
    if (!isVerified) {
      router.push("/");
    }
    (async () => {
      try {
        const response = await getProfileDetails();
        console.log(response);
      } catch (error: any) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <div className="w-full">
      <PageHeader
        title="My Profile"
        color="#ff550c"
        breadcrumb="Home // Profile"
      />
      <div className="w-[90%] mx-auto">
        <div className="h-28 w-full border-x-[1px] border-outline"></div>
        <div className="w-full flex items-center gap-0 bg-primary text-white font-auxMono --clip-shape-footer-2">
          <button
            className={cn(
              "w-1/3 h-full py-3",
              activeTab === 0 && "border-b-[8px] border-white"
            )}
            onClick={() => {
              setActiveTab(0);
            }}
          >
            Registered Events
          </button>
          <button
            className={cn(
              "w-1/3 h-full py-3",
              activeTab === 1 && "border-b-[8px] border-white"
            )}
            onClick={() => {
              setActiveTab(1);
            }}
          >
            Purchased Merch
          </button>
        </div>
        {activeTab === 0 && <MyEvents />}
        {activeTab === 1 && <MyMerch />}
      </div>
    </div>
  );
}

function MyEvents() {
  return (
    <div className="w-full flex flex-col gap-4 my-8">
      {[1, 2, 3, 4].map((data) => (
        <EventCard key={data} data={{} as eventType} registered />
      ))}
    </div>
  );
}

function MyMerch() {
  return (
    <div className="w-full grid grid-cols-3 my-8 gap-8">
      {[1, 2, 3, 4].map((data) => (
        <MerchCard key={data} data={{} as merchType} purchased />
      ))}
    </div>
  );
}
