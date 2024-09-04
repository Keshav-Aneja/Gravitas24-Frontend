"use client";
import { PageHeader } from "@/components/common/PageHeader";
import EventCard from "@/components/events/EventCard";
import MerchCard from "@/components/merch/MerchCard";
import { eventType, merchType } from "@/constants/types/types";
import { cn } from "@/lib/utils";
import {
  getProfileDetails,
  getRegisteredEvents,
  getRegisteredMerch,
  getUserTransactions,
} from "@/services/user.service";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ValidateToken from "@/lib/ValidateToken";
import {
  EventRegistration,
  MerchRegistration,
} from "@/constants/types/registered";
import { ReactLenis } from "@studio-freight/react-lenis";
export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState(0);
  const [registeredEvents, setRegisteredEvents] = useState<EventRegistration[]>(
    [] as EventRegistration[]
  );
  const [registeredMerch, setRegisteredMerch] = useState<MerchRegistration[]>(
    [] as MerchRegistration[]
  );

  const router = useRouter();
  useEffect(() => {
    const isVerified = ValidateToken();
    if (!isVerified) {
      router.push("/");
    }
    (async () => {
      try {
        const response = await getProfileDetails();
        const registeredEvents = (await getRegisteredEvents())
          .data as EventRegistration[];
        const registeredMerch = (await getRegisteredMerch())
          .data as MerchRegistration[];
        const transactions = await getUserTransactions();
        console.log(transactions);
        setRegisteredEvents(registeredEvents);
        setRegisteredMerch(registeredMerch);
        console.log(registeredEvents);
        console.log(registeredMerch);
        console.log(response);
      } catch (error: any) {
        console.log(error);
      }
    })();
  }, []);
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
          {activeTab === 0 && (
            <MyEvents eventRegisteration={registeredEvents} />
          )}
          {activeTab === 1 && <MyMerch merchRegisteration={registeredMerch} />}
        </div>
      </div>
    </ReactLenis>
  );
}

function MyEvents({
  eventRegisteration,
}: {
  eventRegisteration: EventRegistration[];
}) {
  return (
    <div className="w-full flex flex-col gap-4 my-8">
      {eventRegisteration.map((data) => (
        <EventCard key={data.id} data={data.event} registered />
      ))}
    </div>
  );
}

function MyMerch({
  merchRegisteration,
}: {
  merchRegisteration: MerchRegistration[];
}) {
  return (
    <div className="w-full grid grid-cols-3 my-8 gap-8">
      {merchRegisteration.map((data) => (
        <MerchCard key={data.id} data={data.merch} purchased />
      ))}
    </div>
  );
}
