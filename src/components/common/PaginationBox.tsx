"use client";
import { useGlobalContext } from "@/context/GlobalContext";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { RxCaretLeft } from "react-icons/rx";

const PaginationBox = () => {
  const { totalPages, currentPage, setCurrentPage } = useGlobalContext();
  return (
    <div className="w-[90%] mx-auto border-x-[1px] border-b-[1px] border-outline flex items-center justify-between pt-28 pb-20">
      <button
        className="bg-secondary text-[1rem] font-auxMono uppercase flex items-center gap-3 w-60 justify-center h-10 text-white "
        onClick={() => {
          if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
          }
        }}
      >
        <RxCaretLeft size={20} />
        <p>Previous</p>
      </button>
      <section className="flex items-center gap-2">
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
        className="bg-secondary text-[1rem] font-auxMono uppercase flex items-center gap-3 w-60 justify-center h-10 text-white "
        onClick={() => {
          if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
          }
        }}
      >
        <p>Next</p>
        <RxCaretLeft className="scale-x-[-1]" size={20} />
      </button>
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
        "w-10 aspect-square border-[1px] border-black  font-auxMono text-[1rem] hover:bg-secondary hover:text-white",
        dummy && "w-20 h-10",
        isSelected && "bg-secondary text-white"
      )}
      onClick={() => {
        setCurrentPage && !dummy && page && setCurrentPage(page + 1);
        console.log(page);
      }}
    >
      {dummy ? "..." : page}
    </button>
  );
}
