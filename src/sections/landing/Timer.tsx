"use client";
import React, { useState, useEffect } from "react";
import BorderBox from "@/components/common/BorderBox";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const Timer = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const targetDate = new Date("September 20, 2024");
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="w-full bg-primary flex flex-col gap-8 pb-8">
      <section className="w-[90%] mx-auto grid grid-cols-5 grid-rows-3">
        <span className="border-x-[1px] border-outline border-t-0 relative">
          <div className="bg-base w-full h-[30px] clip-rect-1 relative -top-1"></div>
        </span>
        <span className="border-x-[1px] border-l-0 border-outline border-t-0 relative">
          <div className="bg-base w-full h-[30px] clip-rect-1 scale-x-[-1] relative -top-1"></div>
        </span>
        <span className="border-x-[1px] border-outline" />
        <span />
        <span className="border-x-[1px] border-outline" />
        <span className="border-l-[1px] border-b-[1px] border-outline" />
        <BorderBox className="--timeline col-span-3 bg-black text-white w-full py-3 mx-auto flex items-center justify-center gap-8 text-3xl">
          <span className="text-3xl font-auxMono text-center">
            <h1>{timeLeft.days.toString().padStart(2, "0")}</h1>
            <p className="text-xl">DAYS</p>
          </span>
          <p>:</p>
          <span className="text-3xl font-auxMono text-center">
            <h1>{timeLeft.hours.toString().padStart(2, "0")}</h1>
            <p className="text-xl">HOURS</p>
          </span>
          <p>:</p>
          <span className="text-3xl font-auxMono text-center">
            <h1>{timeLeft.minutes.toString().padStart(2, "0")}</h1>
            <p className="text-xl">MINS</p>
          </span>
        </BorderBox>
        <span className="border-r-[1px] border-b-[1px] border-outline" />
        <span className="col-span-5 border-[1px] border-t-0 border-outline flex items-center justify-center py-4 relative">
          <span className="w-[6px] h-[6px] bg-outline absolute -top-[3px] -right-[3px]"></span>
          <span className="w-[6px] h-[6px] bg-outline absolute -top-[3px] -left-[3px]"></span>
          <h1 className="text-7xl font-aldrich font-semibold text-white text-center">
            &lt;UNLEASH THE GENIUS/&gt;
          </h1>
        </span>
      </section>
    </div>
  );
};

export default Timer;
