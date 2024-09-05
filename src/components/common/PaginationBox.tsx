"use client";
import { useGlobalContext } from "@/context/GlobalContext";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState } from "react";
import { RxCaretLeft } from "react-icons/rx";

const PaginationBox = () => {
  const { totalPages, currentPage, setCurrentPage } = useGlobalContext();
  return (
    <div className="flex flex-col items-center gap-4 pt-16 md:pt-28">
      <section className="flex items-center gap-2 md:hidden">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) =>
            Math.abs(currentPage - page) < 3 && (
              <PageBox
                key={page}
                page={page}
                isSelected={currentPage === page}
                setCurrentPage={setCurrentPage}
              />
            )
        )}
        {totalPages > 3 && Math.abs(currentPage - totalPages) > 3 && (
          <PageBox dummy={true} />
        )}
      </section>
      <div className="w-[90%] mx-auto border-x-[1px] border-b-[1px] border-outline flex items-center justify-between  pb-20">
        <button
          className="bg-secondary text-xs md:text-[1rem] font-auxMono uppercase flex items-center gap-1 md:gap-3 w-44 md:w-60 justify-center h-7 md:h-10 text-white "
          onClick={() => {
            if (currentPage > 1) {
              setCurrentPage(currentPage - 1);
            }
            const eventsSection = document.getElementById("eventFilter");
            if (eventsSection) {
              eventsSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <RxCaretLeft size={20} />
          <p>Previous</p>
        </button>
        <section className=" items-center gap-2 hidden md:flex">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) =>
              Math.abs(currentPage - page) < 3 && (
                <PageBox
                  key={page}
                  page={page}
                  isSelected={currentPage === page}
                  setCurrentPage={setCurrentPage}
                />
              )
          )}
          {totalPages > 3 && Math.abs(currentPage - totalPages) > 3 && (
            <PageBox dummy={true} />
          )}
        </section>
        <button
          className="bg-secondary text-xs md:text-[1rem] font-auxMono uppercase flex items-center gap-1 md:gap-3 w-44 md:w-60 justify-center h-7 md:h-10 text-white "
          onClick={() => {
            if (currentPage < totalPages) {
              setCurrentPage(currentPage + 1);
            }
            const eventsSection = document.getElementById("eventFilter");
            if (eventsSection) {
              eventsSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <p>Next</p>
          <RxCaretLeft className="scale-x-[-1]" size={20} />
        </button>
      </div>
    </div>
  );
};

export default PaginationBox;
type Props = {
  page?: number;
  dummy?: boolean;
  isSelected?: boolean;
  setCurrentPage?: React.Dispatch<React.SetStateAction<number>>;
};
function PageBox({ page, dummy, isSelected, setCurrentPage }: Props) {
  return (
    <button
      className={cn(
        "w-7 md:w-10 aspect-square border-[1px] border-black  font-auxMono text-xs md:text-[1rem] hover:bg-secondary hover:text-white",
        dummy && "w-12 md:w-20 h-7 md:h-10",
        isSelected && "bg-secondary text-white"
      )}
      onClick={() => {
        setCurrentPage && !dummy && page && setCurrentPage(page);
        // console.log(page);
        const eventsSection = document.getElementById("eventFilter");
        if (eventsSection && !dummy) {
          eventsSection.scrollIntoView({ behavior: "smooth" });
        }
      }}
    >
      {dummy ? "..." : page}
    </button>
  );
}
