"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function SeparatorBottom2() {
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
