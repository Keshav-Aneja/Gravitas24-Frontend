"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { AiFillWarning } from "react-icons/ai";
import { FaCheck } from "react-icons/fa6";

function PaymentSuccess() {
  const params = useSearchParams();

  // Extract parameters
  const eventName = params.get("event_name");
  const trnNo = params.get("trn_no");

  return (
    <div className="text-lg md:text-xl font-auxMono flex flex-col gap-3 items-center justify-center h-full">
      <FaCheck className="text-5xl md:text-6xl bg-green-500 text-white p-2 rounded-full" />
      <p className="text-2xl md:text-4xl text-green-500 text-center">
        Payment Success!
      </p>
      <div className="w-full flex flex-col gap-1 items-center justify-center mt-4">
        <p>Event: {eventName}</p>
        <p>Transaction No: {trnNo}</p>
      </div>
    </div>
  );
}

export default function PaymentSuccessWrapper() {
  return (
    <Suspense>
      <PaymentSuccess />
    </Suspense>
  );
}
