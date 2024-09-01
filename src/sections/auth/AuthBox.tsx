import EventCard from "@/components/events/EventCard";
import Link from "next/link";
import React from "react";

const AuthBox = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-8">
      <p className="text-3xl font-auxMono">
        Getting Started...
      </p>
      <Link href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/vit/google`}>
        Sign in with Google (VIT flow)
      </Link>
    </div>
  );
};

export default AuthBox;
