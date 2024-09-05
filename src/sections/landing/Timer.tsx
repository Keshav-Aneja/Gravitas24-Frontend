"use client";
import React, { useState, useEffect } from "react";
import BorderBox from "@/components/common/BorderBox";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds?: number;
};

const Timer = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const targetDate = new Date("September 27, 2024 00:00:00");
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        milliseconds: Math.floor((difference % 1000) / 10),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(
      () => {
        setTimeLeft(calculateTimeLeft());
      },
      timeLeft.days > 0 ? 1000 : 10
    ); // Switch to milliseconds when days and hours are zero

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const renderTime = () => {
    if (timeLeft.days > 0) {
      return (
        <>
          <span className="text-xl md:text-3xl font-auxMono text-center">
            <h1>{timeLeft.days.toString().padStart(2, "0")}</h1>
            <p className="text-sm md:text-lg lg:text-xl">DAYS</p>
          </span>
          <p>:</p>
          <span className="text-xl md:text-3xl font-auxMono text-center">
            <h1>{timeLeft.hours.toString().padStart(2, "0")}</h1>
            <p className="text-sm md:text-lg lg:text-xl">HOURS</p>
          </span>
          <p>:</p>
          <span className="text-xl md:text-3xl font-auxMono text-center">
            <h1>{timeLeft.minutes.toString().padStart(2, "0")}</h1>
            <p className="text-sm md:text-lg lg:text-xl">MINS</p>
          </span>
          <p>:</p>
          <span className="text-xl md:text-3xl font-auxMono text-center">
            <h1>{timeLeft.seconds.toString().padStart(2, "0")}</h1>
            <p className="text-sm md:text-lg lg:text-xl">SECS</p>
          </span>
        </>
      );
    } else if (timeLeft.hours > 0) {
      return (
        <>
          <span className="text-xl md:text-3xl font-auxMono text-center">
            <h1>{timeLeft.hours.toString().padStart(2, "0")}</h1>
            <p className="text-sm md:text-lg lg:text-xl">HOURS</p>
          </span>
          <p>:</p>
          <span className="text-xl md:text-3xl font-auxMono text-center">
            <h1>{timeLeft.minutes.toString().padStart(2, "0")}</h1>
            <p className="text-sm md:text-lg lg:text-xl">MINS</p>
          </span>
          <p>:</p>
          <span className="text-xl md:text-3xl font-auxMono text-center">
            <h1>{timeLeft.seconds.toString().padStart(2, "0")}</h1>
            <p className="text-sm md:text-lg lg:text-xl">SECS</p>
          </span>
        </>
      );
    } else {
      return (
        <>
          <span className="text-xl md:text-3xl font-auxMono text-center">
            <h1>{timeLeft.minutes.toString().padStart(2, "0")}</h1>
            <p className="text-sm md:text-lg lg:text-xl">MINS</p>
          </span>
          <p>:</p>
          <span className="text-xl md:text-3xl font-auxMono text-center">
            <h1>{timeLeft.seconds.toString().padStart(2, "0")}</h1>
            <p className="text-sm md:text-lg lg:text-xl">SECS</p>
          </span>
          <p>:</p>
          <span className="text-xl md:text-3xl font-auxMono text-center">
            <h1>{timeLeft.milliseconds?.toString().padStart(2, "0")}</h1>
            <p className="text-sm md:text-lg lg:text-xl">MS</p>
          </span>
        </>
      );
    }
  };

  return (
    <div className="w-full bg-primary flex flex-col gap-4 md:gap-8 pb-8 relative z-[200]">
      <section className="w-[90%] mx-auto grid grid-cols-5 grid-rows-3">
        <span className="lg:border-x-[1px]  border-outline border-t-0 relative">
          <div className="bg-base w-full h-4 md:h-[30px] clip-rect-1 relative -top-1"></div>
        </span>
        <span>
          <div className="bg-base w-full h-4 md:h-[30px] relative -top-1 md:hidden"></div>
          <div className="bg-base w-full h-4 md:h-[30px] clip-rect-1 scale-x-[-1] relative -top-1 hidden md:block"></div>
        </span>
        <span className="lg:border-x-[1px] border-l-0 border-outline border-t-0 relative ">
          <div className="bg-base w-full h-4 md:h-[30px] clip-rect-1 scale-x-[-1] relative -top-1 md:hidden"></div>
        </span>
        <span className="border-x-[1px] hidden lg:block border-outline" />
        <span className="border-x-[1px] hidden lg:block border-outline" />
        <span className="border-l-[1px] hidden lg:block border-b-[1px] border-outline" />
        <BorderBox className="--timeline col-span-5 lg:col-span-3 bg-black text-white w-full py-3 mx-auto flex items-center justify-center gap-8 text-xl lg:text-3xl -mt-4 md:mt-0">
          {renderTime()}
        </BorderBox>
        <span className="hidden lg:block border-r-[1px] border-b-[1px] border-outline" />
        <span className="col-span-5 lg:border-[1px] border-t-0 border-outline flex items-center justify-center py-4 relative">
          <span className="hidden lg:block w-[6px] h-[6px] bg-outline absolute -top-[3px] -right-[3px]"></span>
          <span className="hidden lg:block w-[6px] h-[6px] bg-outline absolute -top-[3px] -left-[3px]"></span>
          <h1 className="text-2xl md:text-4xl lg:text-7xl font-aldrich font-medium md:font-semibold text-white text-center">
            &lt;reVITalize yourself/&gt;
          </h1>
        </span>
      </section>
    </div>
  );
};

export default Timer;
