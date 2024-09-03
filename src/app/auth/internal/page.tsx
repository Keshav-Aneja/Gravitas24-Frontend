import React from "react";
import Link from "next/link";
import { BACKEND_URL } from "@/constants/routes";
import Image from "next/image";
import { svgs } from "@/constants/svgs";
export default function Auth() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-8">
      <p className="text-xl md:text-3xl font-auxMono text-center">
        Login with your VIT Email Address
      </p>
      <Link
        href={`${BACKEND_URL}/auth/vit/google`}
        className="bg-[#4285F4] py-2 w-[90%] md:w-[70%] flex items-center justify-center gap-6 rounded-md"
      >
        <Image
          src={svgs.GoogleLogo}
          alt=""
          width={50}
          height={50}
          className="w-8 h-auto rounded-full"
        />
        <p className="font-semibold text-white">Sign in with Google</p>
      </Link>
    </div>
  );
}
