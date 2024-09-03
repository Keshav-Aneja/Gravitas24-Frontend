import { PageHeader } from "@/components/common/PageHeader";
import { FAQBox } from "@/sections/FAQBox";
import React from "react";

export default function FAQPage() {
  return (
    <div className="w-full">
      <PageHeader
        title="FAQs"
        color="#ff550c"
        breadcrumb="Home // FAQs"
        breadcrumbColor="#000000"
      />
      <div className="w-[90%] mx-auto border-x-[1px] border-outline pt-3 md:pt-16 py-8 flex items-start justify-between"></div>
      <FAQBox />
    </div>
  );
}
