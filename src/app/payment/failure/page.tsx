"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { AiFillWarning } from "react-icons/ai";

function PaymentFailure() {
  // const params = useSearchParams();

  // const eventName = params.get("event_name");
  // const trnNo = params.get("trn_no");

  return (
    <div className="text-xl font-auxMono flex flex-col gap-3 items-center justify-center h-full">
      <AiFillWarning className="text-5xl md:text-6xl bg-red-500 text-white p-2 rounded-full" />
      <p className="text-2xl text-center md:text-4xl text-red-500 ">
        Payment Failed!
      </p>
      {/* <div className="w-full flex flex-col gap-1 items-center justify-center mt-4">
        <p>Event: {eventName}</p>
        <p>Transaction No: {trnNo}</p>
      </div> */}
    </div>
  );
}

export default function PaymentFailureWrapper() {
  return (
    <Suspense>
      <PaymentFailure />
    </Suspense>
  );
}
