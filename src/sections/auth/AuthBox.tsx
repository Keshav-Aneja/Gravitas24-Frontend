import EventCard from "@/components/events/EventCard";
import { BACKEND_URL } from "@/constants/routes";
import { svgs } from "@/constants/svgs";
import Link from "next/link";
import React from "react";
import Image from "next/image";
const AuthBox = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-8">
      <p className="text-3xl font-auxMono">Getting Started...</p>
      <a
        href={`${BACKEND_URL}auth/vit/google`}
        className="bg-[#4285F4] py-2 w-[70%] flex items-center justify-center gap-6"
      >
        <Image
          src={svgs.GoogleLogo}
          alt=""
          width={50}
          height={50}
          className="w-8 h-auto"
        />
        <p className="font-semibold text-white">Sign in with Google</p>
      </a>
    </div>
  );
};

export default AuthBox;
