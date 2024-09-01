"use client";
import React, { useEffect } from "react";
import data from "@/constants/merch.json";
import MerchCard from "@/components/merch/MerchCard";
import BorderBox from "@/components/common/BorderBox";

const MerchBox = () => {
  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <div className="w-full border-y-[1px] border-[#c2c2c2] mb-12 flex flex-col">
      <BorderBox className="flex w-[90%] mx-auto flex-col gap-4 p-0">
        <h2 className="text-7xl font-clash mb-4 p-4">Solos</h2>
        <div className="w-full flex flex-wrap justify-between">
          {data.Solos.map((item, index) => (
            <MerchCard key={index} item={item} />
          ))}
        </div>
        <h2 className="text-7xl font-clash mb-4 mt-24 p-4">Combos</h2>
        <div className="w-full flex flex-row justify-between">
          {data.Combos.map((item, index) => (
            <MerchCard key={index} item={item} />
          ))}
        </div>
      </BorderBox>
    </div>
  );
};

export default MerchBox;
