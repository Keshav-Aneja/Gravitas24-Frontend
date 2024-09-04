import React from "react";
import { Payment } from "@/constants/types/registered";
import Image from "next/image";

const TransactionCard = ({ data }: { data: Payment }) => {
  return (
    <div className="w-full">
      <div className="md:px-6 md:py-10 p-0 w-[90%] mx-auto flex flex-col md:flex-row items-start md:justify-between gap-4 md:gap-8 group border-primary md:border-outline">
        <Image
          className="w-full md:w-[17%] aspect-square border-[1px] border-black"
          src={data.event_slot?.event.display || data.merch?.images[0] || ""}
          alt=""
          width={1000}
          height={1000}
        />
        <section className="--main flex flex-col font-auxMono w-full ">
          {/*head*/}
          <div className="px-3 md:px-0">
            <div className="flex w-full flex-col">
              <h1 className="text-xl md:text-3xl uppercase w-full">
                {data.event_slot?.event.name || data.merch?.name}
              </h1>
              <p className="text-xs text-nowrap md:text-[1rem]">
                {data.event_slot?.event.club}
              </p>
            </div>
            <div className="w-full md:w-[40%] h-[1px] md:h-[2px] bg-outline my-2 mb-4"></div>
          </div>
          {/*body*/}
          <div className="w-full flex flex-col h-full justify-between items-center">
            <div className="flex flex-col gap-2 w-full text-xl font-auxMono">
              {/* <section className="flex flex-row justify-between">
                <p>No. of Participants:</p>
                <p>{data.event_slot?.event.teamSize}</p>
              </section> */}
              <section className="flex flex-row justify-between">
                <p>Payment Mode:</p>
                <p>Online</p>
              </section>
              <section className="flex flex-row justify-between">
                <p>Payment Status:</p>
                <p>{data.status}</p>
              </section>
            </div>
            <div className="flex w-full flex-row justify-between text-xl md:text-2xl text-blue-500">
              <p>
                Total Amount {"{"}Exclusive of GST{"}"}
              </p>
              <p className="text-2xl md:text-3xl">{data.amount}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TransactionCard;
