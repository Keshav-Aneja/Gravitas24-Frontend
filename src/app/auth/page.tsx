"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import BorderBox from "@/components/common/BorderBox";
import AuthBox from "@/sections/auth/AuthBox";

export default function Auth() {
  return (
    <div className="w-full relative" style={{ height: "calc(100vh-4rem)" }}>
      <Separator />
      <div className="grid grid-cols-5 w-[90%] mx-auto">
        <span className="border-x-[1px] flex items-end col-span-1"></span>
        <BorderBox 
            className="min-h-[500px] h-full col-span-3 col-start-2 border border-red-500 bg-white"
            classNameSquares="bg-primary"    
        >
            <AuthBox />
        </BorderBox>
        <span className="border-x-[1px] col-span-1 col-start-5"></span>
      </div>
      <SeparatorBottom />
    </div>
  );
}

function Separator() {
  return (
    <div className="grid grid-cols-5 h-24 w-[90%] mx-auto">
      <span className="border-x-[1px]"></span>
      <span className="border-x-[1px]"></span>
      <span className="border-x-[1px]"></span>
      <span className="border-x-[1px]"></span>
      <span className="border-x-[1px]"></span>
    </div>
  );
}

function SeparatorBottom() {
  const [ipAddress, setIPAddress] = useState("");
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    (async () => {
      const response = await axios.get("https://api.ipify.org?format=json");
      setIPAddress(response.data.ip);
    })();

    const timer = setInterval(() => {
      setDate(new Date());
    }, 60000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formattedTime = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(date);

  const formattedDate = `${formattedTime} ${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  return (
    <div className="grid grid-cols-5 h-28 w-[90%] mx-auto">
      <span className="border-x-[1px] h-full">
        <div className="w-full h-full mt-6">
          <span className="relative w-full h-full text-primaryLight font-auxMono text-sm flex flex-col items-center justify-center">
            <p>{ipAddress} IPV4</p>
            <p>632014 // VELLORE</p>
            <p>{formattedDate}</p>
            <div className="w-10 h-2 bg-primary absolute top-0 left-0"></div>
            <div className="w-2 h-4 bg-primary absolute top-0 left-0"></div>
            <div className="w-2 h-4 bg-primary absolute top-0 right-0"></div>
            <div className="w-2 h-4 bg-primary absolute bottom-0 left-0"></div>
            <div className="w-2 h-4 bg-primary absolute bottom-0 right-0"></div>
            <div className="w-10 h-2 bg-primary absolute top-0 right-0"></div>
            <div className="w-10 h-2 bg-primary absolute bottom-0 left-0"></div>
            <div className="w-10 h-2 bg-primary absolute bottom-0 right-0"></div>
          </span>
        </div>
      </span>
      <span className="border-x-[1px]"></span>
      <span className="border-x-[1px]"></span>
      <span className="border-x-[1px]"></span>
      <span className="border-x-[1px]"></span>
    </div>
  );
}
