"use client";
import { PageHeader } from "@/components/common/PageHeader";
import DetailedMerchCard from "@/components/merch/DetailedMerchCard";
import DetailedMerchCardSkeleton from "@/components/merch/DetailedMerchCardSkeleton";

import { getAllMerch, getMerchById } from "@/services/merch.service";

import React, { useEffect, useState } from "react";

const MerchDetailsPage = () => {
  const [merchItem, setMerchItem] = useState<any>();

  useEffect(() => {
    (async () => {
      try {
        const response = await getAllMerch();
        setMerchItem(response[0]);
        console.log(response[0]);
      } catch (error) {}
    })();
  }, []);

  return (
    <div className="w-full relative">
      <PageHeader
        title="Merchandise"
        tagline="Tagline Tagline Tagline"
        breadcrumb="Home // Merchandise"
        color="#0C5EFF"
        breadcrumbColor="#000000"
      />
      <div className="w-[90%] mx-auto border-x-[1px] border-outline pt-16 py-8 flex items-start justify-between"></div>
      <div className="w-[90%]  border-outline mx-auto">
        {merchItem ? (
          <DetailedMerchCard
            item={merchItem.merch}
            sizeOptions={merchItem.merchSize}
          />
        ) : (
          <DetailedMerchCardSkeleton />
        )}
      </div>
    </div>
  );
};

export default MerchDetailsPage;
