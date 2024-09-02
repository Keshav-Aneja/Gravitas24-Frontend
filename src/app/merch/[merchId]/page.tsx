"use client";
import DetailedMerchCard from "@/components/merch/DetailedMerchCard";
import data from "@/constants/merch.json";
import { AUTH_PAGE } from "@/constants/routes";
import ValidateToken from "@/lib/ValidateToken";
import { getMerchById } from "@/services/merch.service";
import { useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";

const MerchDetailsPage = ({ params }: { params: { merchId: string } }) => {
  const [merchItem, setMerchItem] = useState<any>();
  const router = useRouter();
  useEffect(() => {
    const isValid = ValidateToken();
    if (!isValid) {
      router.push(AUTH_PAGE);
    }
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
