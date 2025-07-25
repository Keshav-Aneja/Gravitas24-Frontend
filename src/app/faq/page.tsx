"use client";
import { PageHeader } from "@/components/common/PageHeader";
import { FAQBox } from "@/sections/FAQBox";
import React from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import { useEffect } from "react";

export default function FAQPage() {
  useEffect(() => {
    document.title = "Gravitas | FAQs";
  }, []);

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.04,
        duration: 1.5,
        smoothWheel: true,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
      }}
    >
      <div className="w-full">
        <PageHeader
          title="FAQs"
          color="#d94c0f"
          breadcrumb="Home // FAQs"
          breadcrumbColor="#000000"
        />
        <div className="w-[90%] mx-auto border-x-[1px] border-outline pt-3 md:pt-16 py-8 flex items-start justify-between"></div>
        <FAQBox />
      </div>
    </ReactLenis>
  );
}
