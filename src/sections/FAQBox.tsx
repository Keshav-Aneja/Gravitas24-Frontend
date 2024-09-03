"use client";
import FAQItem from "@/components/faq/FAQItem";
import { faqData } from "@/constants/faqData";
import React, { useState } from "react";

export const FAQBox = () => {
  const [openItem, setOpenItem] = useState(0);
  return (
    <div className="w-full  border-outline">
      <div className="w-[90%] mx-auto border-[1px] border-outline flex flex-col py-6 lg:py-12">
        {faqData.map((faqItem, index) => (
          <FAQItem
            index={index}
            key={index}
            que={faqItem.que}
            ans={faqItem.ans}
            openItem={openItem}
            setOpenItem={setOpenItem}
          />
        ))}
      </div>
    </div>
  );
};
