"use client";
import React, { useEffect, useState } from "react";
import data from "@/constants/merch.json";
import MerchCard from "@/components/merch/MerchCard";
import BorderBox from "@/components/common/BorderBox";
import { getAllMerch } from "@/services/merch.service";
import { merchType } from "@/constants/types/types";

const MerchBox = () => {
  const [merchData, setMerchData] = useState<merchType[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await getAllMerch();
        setMerchData(response);
      } catch (error) {}
    })();
  }, []);
  return (
    <div className="w-full border-y-[1px] border-[#c2c2c2] mb-12 flex flex-col mt-12 md:mt-20">
      <BorderBox className="flex w-[90%] mx-auto flex-col gap-4 p-0">
        <h2 className="font-clash text-4xl md:text-6xl font-semibold">Solos</h2>
        <div className="w-full grid grid-cols-3 gap-16">
          {merchData.map(
            (item, index) =>
              item.category === "Solo" && <MerchCard key={index} data={item} />
          )}
        </div>
        <h2 className="font-clash text-4xl md:text-6xl font-semibold">
          Combos
        </h2>
        <div className="w-full grid grid-cols-3 gap-12">
          {merchData.map(
            (item, index) =>
              item.category === "Combo" && <MerchCard key={index} data={item} />
          )}
        </div>
      </BorderBox>
    </div>
  );
};

export default MerchBox;
