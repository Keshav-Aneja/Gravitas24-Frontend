import React from "react";
import { Payment } from "@/constants/types/registered";
import Image from "next/image";

const TransactionCard = ({ data }: { data: Payment }) => {
  return (
    <div className=" w-full border border-outline flex flex-col md:flex-row">
      <div className="aspect-square h-[300px] w-auto border-r border-r-outline">
        <Image
          src={data.event_slot?.event.display || data.merch?.images[0] || ""}
          alt=""
          width={400}
          height={300}
          className="aspect-square h-[300px] object-cover"
        />
      </div>
      <div className="flex flex-col gap-4 items-center w-full p-4">
        {/*Heading*/}
        <div className="flex flex-col gap-2 w-full">
          <div className="w-full flex flex-col font-auxMono md:flex-row justify-between">
            <h1 className="text-4xl uppercase">
              {data.event_slot?.event.name || data.merch?.name}
            </h1>
            <button className="border border-blue-400 uppercase bg-blue-300 px-2 p-2">
              Download Invoice
            </button>
          </div>
          <p className="text-2xl text-blue-500 font-auxMono ">
            {data.event_slot?.event.club}
          </p>
        </div>

        {/*Body*/}

        <div className="w-full flex flex-col justify-between items-center">
          <div className="flex flex-col gap-2 w-full text-xl font-auxMono">
            <section className="flex flex-row justify-between">
              <p>No. of Participants:</p>
              <p>{data.event_slot?.event.teamSize}</p>
            </section>
            <section className="flex flex-row justify-between">
              <p>Payment Mode:</p>
              <p>Online</p>
            </section>
            <section className="flex flex-row justify-between">
              <p>Payment Status:</p>
              <p>{data.status}</p>
            </section>
          </div>
          <div className="flex w-full flex-row justify-between text-2xl text-blue-500">
            <p>
              Total Amount {"{"}Exclusive of GST{"}"}
            </p>
            <p className="text-3xl">
              {data.amount}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
