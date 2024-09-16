"use client";
import { PageHeader } from "@/components/common/PageHeader";
import EventRegCard from "@/components/events/EventRegCard";
import MerchCard from "@/components/merch/MerchCard";
import TransactionCard from "@/components/transactions/transactionCard";
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
  Payment,
} from "@/constants/types/registered";
import Image from "next/image";
import { ReactLenis } from "@studio-freight/react-lenis";
import BorderBox from "@/components/common/BorderBox";
import images from "@/constants/images";
import Link from "next/link";
export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState(0);
  const [registeredEvents, setRegisteredEvents] = useState<EventRegistration[]>(
    [] as EventRegistration[]
  );
  const [registeredMerch, setRegisteredMerch] = useState<MerchRegistration[]>(
    [] as MerchRegistration[]
  );
  const [profileDetails, setProfileDetails] = useState<any>(null); // Adjust the type as necessary
  const [transactions, setTransactions] = useState<Payment[]>([]);
  const [statusArr, setStatusArr] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    const isVerified = ValidateToken();
    if (!isVerified) {
      router.push("/");
      return;
    }

    (async () => {
      try {
        // Run all the requests concurrently
        const [
          profileResponse,
          eventsResponse,
          merchResponse,
          transactionsResponse,
        ] = await Promise.all([
          getProfileDetails(),
          getRegisteredEvents(),
          getRegisteredMerch(),
          getUserTransactions(),
        ]);

        const filteredMerch = merchResponse.data.filter(
          (data: MerchRegistration) => data.status === "success"
        );



        // Process the responses
        setProfileDetails(profileResponse.data);
        setStatusArr(eventsResponse.status);
        setRegisteredEvents(eventsResponse.data as EventRegistration[]);
        // console.log(eventsResponse.status);
        // console.log(eventsResponse.data);
        setRegisteredMerch(filteredMerch as MerchRegistration[]);
        setTransactions(transactionsResponse);

        // console.log(transactionsResponse);
        // console.log(eventsResponse);
        // console.log((merchResponse as any).data);
        // console.log(profileResponse);
      } catch (error: any) {
        console.log(error);
      }
    })();
  }, [router]);

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
      <div className="w-full">
        <PageHeader
          title="My Purchases"
          color="#d94c0f"
          breadcrumb="Home // Profile"
        />
        <div className="w-[90%] mx-auto">
          <div className="h-28 w-full border-x-[1px] border-outline"></div>
          <div className="w-full text-[0.5rem] md:text-[1rem] flex items-center gap-0 bg-primary text-white font-auxMono --clip-shape-profile-header">
            <button
              className={cn(
                "w-1/2 h-full py-3",
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
            <button
              className={cn(
                "w-1/2 h-full py-3",
                activeTab === 2 && "border-b-[8px] border-white"
              )}
              onClick={() => {
                setActiveTab(2);
              }}
            >
              Transaction History
            </button>
          </div>
          {activeTab === 0 && (
            <MyEvents
              eventRegisteration={registeredEvents}
              statusArr={statusArr}
            />
          )}
          {activeTab === 1 && <MyMerch merchRegisteration={registeredMerch} />}
          {activeTab === 2 && (
            <MyTransactions
              transactionHistory={transactions}
              profile={profileDetails}
            />
          )}
        </div>
      </div>
    </ReactLenis>
  );
}

function MyEvents({
  eventRegisteration,
  statusArr,
}: {
  eventRegisteration: EventRegistration[];
  statusArr: string[];
}) {
  return (
    <div className="w-full flex flex-col gap-4 my-8">
      {eventRegisteration.length > 0 ? (
        eventRegisteration.map(
          (data, index) =>
            statusArr[index] === "success" && (
              <EventRegCard key={data.id} data={data} registered />
            )
        )
      ) : (
        <p className="text-red-500 text-xl font-auxMono">
          No Registered Events found
        </p>
      )}
    </div>
  );
}

function MyMerch({
  merchRegisteration,
}: {
  merchRegisteration: MerchRegistration[];
}) {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 my-8 gap-8">
      {merchRegisteration.length > 0 ? (
        merchRegisteration.map((data) => (
          <MerchCard key={data.id} data={data.merch} purchased />
        ))
      ) : (
        <p className="text-red-500 text-sm text-center md:text-xl font-auxMono">
          No Merch History Found
        </p>
      )}
    </div>
  );
}

function MyTransactions({
  transactionHistory,
  profile,
}: {
  transactionHistory: Payment[];
  profile: any;
}) {
  return (
    <div className="w-full flex flex-col gap-4 my-8">
      {transactionHistory.length > 0 ? (
        transactionHistory.map((data) => (
          <TransactionCard key={data.id} data={data} user={profile} />
        ))
      ) : (
        <p className="text-red-500 text-xl font-auxMono">
          No Transaction History Found
        </p>
      )}
    </div>
  );
}
