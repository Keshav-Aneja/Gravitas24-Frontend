import React from "react";
import { Payment } from "@/constants/types/registered";
import Image from "next/image";
import BorderBox from "../common/BorderBox";

const TransactionCard = ({ data }: { data: Payment }) => {
  return (
    <div className="w-full">
      <BorderBox className="md:px-6 md:py-10 p-0 w-[90%] mx-auto flex flex-col md:flex-row items-start md:justify-between gap-4 md:gap-8 group border-primary md:border-outline">
        <Image
          className="w-full md:w-[17%] aspect-square border-[1px] border-black"
          src={data.event_slot?.event.image || data.merch?.images[0] || ""}
          alt=""
          width={1000}
          height={1000}
        />
        <section className="--main flex flex-col font-auxMono w-full ">
          {/*head*/}
          <div className="px-3 md:px-0">
            <div className="flex w-full flex-col">
              <h1 className="text-lg md:text-3xl uppercase w-full">
                {data.event_slot?.event.name || data.merch?.name}
              </h1>
              <p className="text-xs text-nowrap md:text-[1rem]">
                {data.event_slot?.event.club}
              </p>
            </div>
            <div className="w-full md:w-[40%] h-[1px] md:h-[2px] bg-outline my-2 mb-4"></div>
          </div>
          {/*body*/}
          <div className="w-full flex flex-col h-full px-4 gap-4 justify-between items-center">
            <div className="flex flex-col gap-2 w-full text-sm md:text-xl font-auxMono">
              <section className="flex gap-2 flex-col md:flex-row justify-between">
                <p>Transaction ID:</p>
                <p>{data.id}</p>
              </section>
              <section className="flex flex-row justify-between">
                <p>Payment Mode:</p>
                <p>Online</p>
              </section>
              <section className="flex flex-row justify-between">
                <p>Payment Status:</p>
                <p
                  className={`uppercase ${
                    data.status === "success"
                      ? "text-green-600"
                      : data.status === "pending"
                      ? "text-yellow-500"
                      : "text-red-500"
                  }`}
                >
                  {data.status}
                </p>
              </section>
            </div>
            <div className="flex w-full flex-row justify-between text-sm md:text-xl text-blue-500">
              <p>
                Total Amount{" "}
                <span className="hidden md:block text-xs">
                  *Exclusive of GST
                </span>
              </p>
              <p className="text-2xl md:text-3xl">{data.amount}</p>
            </div>
          </div>
        </section>
      </BorderBox>
    </div>
  );
};

export default TransactionCard;
