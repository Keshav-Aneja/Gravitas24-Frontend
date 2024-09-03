"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function PaymentFailure() {
  const params = useSearchParams();
  return <div>{params.toString()}</div>;
}

export default function PaymentFailureWrapper() {
  return (
    <Suspense>
      <PaymentFailure />
    </Suspense>
  );
}
