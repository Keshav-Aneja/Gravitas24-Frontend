"use client";
import { useGlobalContext } from "@/context/GlobalContext";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { RxCaretDown } from "react-icons/rx";

const EventsFilter = () => {
  const { eventQuery: query, setEventQuery: setQuery } = useGlobalContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [eventTypeMenu, setEventTypeMenu] = useState(false);
  const [temp, setTemp] = useState("");
  const { eventType, setEventType } = useGlobalContext();
  const { setCurrentPage, setEventScope, eventScope } = useGlobalContext();
  useEffect(() => {
    const interval = setTimeout(() => {
      setQuery(temp);
    }, 200);

    return () => {
      clearInterval(interval);
    };
  }, [temp]);
  return (
    <div
      className="w-[90%] mx-auto border-x-[1px] border-outline pt-16 py-8 flex flex-col md:flex-row items-start justify-between"
      id="eventFilter"
    >
      <div className="relative w-full md:w-[35%]">
        <input
          type="text"
          className="text-xs md:text-sm font-auxMono text-black border-[1px] border-black pl-8 pr-2 py-1 rounded-none focus:outline-none w-full active:outline-none placeholder:text-black h-8"
          placeholder="SEARCH"
          value={temp}
          onChange={(e) => {
            setTemp(e.target.value);
            setCurrentPage(1);
          }}
        />
        <AiOutlineSearch className="absolute top-1/2 -translate-y-1/2 left-2" />
      </div>
      {isMenuOpen && (
        <div
          className="w-full h-screen fixed top-0 left-0 z-[2000]"
          onClick={() => {
            setIsMenuOpen(false);
          }}
        ></div>
      )}
      <div className="w-full flex items-center justify-end ">
        <div
          className={cn(
            "relative w-[50%] md:w-[20%]",
            isMenuOpen && "z-[2100]"
          )}
        >
          <button
            className="p-1 px-4 font-auxMono text-xs md:text-sm text-black  border-[1px] border-black relative flex items-center gap-8 w-full h-8"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <h1 className="uppercase">{eventType}</h1>
            <RxCaretDown className="absolute top-1/2 -translate-y-1/2 right-2" />
          </button>
          {isMenuOpen && (
            <div className="w-full border-[1px] border-black border-t-0 flex flex-col absolute top-8 right-0 bg-white z-[1000]">
              {["All", "Workshop", "Tech-Events", "Hackathon", "Games"].map(
                (item, index) => (
                  <button
                    className="text-xs md:text-sm font-auxMono hover:bg-primary/20 py-1 text-left pl-4 bg-white uppercase"
                    key={index}
                    onClick={() => {
                      if (item === "All") {
                        setEventType("");
                        setCurrentPage(1);
                        setIsMenuOpen(false);
                      } else {
                        setEventType(item);
                        setIsMenuOpen(false);
                        setCurrentPage(1);
                      }
                    }}
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          )}
        </div>
        <div
          className={cn(
            "relative w-[50%] md:w-[20%]",
            isMenuOpen && "z-[2100]"
          )}
        >
          <button
            className="p-1 px-4 font-auxMono text-xs md:text-sm text-black  border-[1px] border-black relative flex items-center gap-8 w-full h-8"
            onClick={() => {
              setEventTypeMenu(!eventTypeMenu);
            }}
          >
            <h1 className="uppercase">{eventScope.split("_").join(" ")}</h1>
            <RxCaretDown className="absolute top-1/2 -translate-y-1/2 right-2" />
          </button>
          {eventTypeMenu && (
            <div className="w-full border-[1px] border-black border-t-0 flex flex-col absolute top-8 right-0 bg-white z-[200]">
              {["both", "internal_only", "external_only"].map((item, index) => (
                <button
                  className="text-xs md:text-sm font-auxMono hover:bg-primary/20 py-1 text-left pl-4 bg-white uppercase"
                  key={index}
                  onClick={() => {
                    setCurrentPage(1);
                    setEventTypeMenu(false);
                    setEventScope(item);
                  }}
                >
                  {item.split("_").join(" ")}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventsFilter;
