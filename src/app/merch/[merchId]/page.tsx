"use client";
import DetailedMerchCard from "@/components/merch/DetailedMerchCard";
import data from "@/constants/merch.json";
import { getMerchById } from "@/services/merch.service";

import React, { useEffect, useState } from "react";

const MerchDetailsPage = ({ params }: { params: { merchId: string } }) => {
  const [merchItem, setMerchItem] = useState<any>();
  // useEffect(() => {
  //   console.log(params.merchId);
  //   const merchItem =
  //     data.Solos.find((item) => item.id == params.merchId) ||
  //     data.Combos.find((item) => item.id == params.merchId);
  //   setMerchItem(merchItem);
  //   console.log(merchItem);
  // }, [params.merchId]);
  useEffect(() => {
    (async () => {
      try {
        const response = await getMerchById(params.merchId);
        setMerchItem(response);
      } catch (error) {}
    })();
  }, []);
  return (
    <div className="w-full relative">
      <div className="w-[25%]  h-6 absolute top-0 left-0 --clip-shape-pageheader-intro flex items-center pl-6 bg-black">
        <h2 className="text-xs text-white font-auxMono relative -left-2">
          Home // Merchandise // CREW NECK
        </h2>
      </div>
      <div className="w-[90%] mx-auto border-x-[1px] border-outline pt-16 py-8 flex items-start justify-between"></div>
      <div className="w-[90%]  border-outline mx-auto">
        {merchItem && <DetailedMerchCard item={merchItem} />}
      </div>
    </div>
  );
};

export default MerchDetailsPage;
