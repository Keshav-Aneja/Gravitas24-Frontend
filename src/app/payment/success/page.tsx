import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function PaymentSuccess() {
  const params = useSearchParams();
  return <div>{params.toString()}</div>;
}

export default function PaymentSuccessWrapper() {
  return (
    <Suspense>
      <PaymentSuccess />
    </Suspense>
  );
}
