import BorderBox from "@/components/common/BorderBox";
import React from "react";

const AboutGravitas = () => {
  return (
    <div className="w-[90%] mx-auto pt-28 flex flex-col gap-20">
      <h1 className="font-clash text-6xl font-semibold">About graVITas</h1>
      <div className="w-full flex flex-col gap-6">
        <section className="w-full flex items-center justify-between">
          <BorderBox className="w-[45%] h-36 bg-[#FAF0EB] z-[50] font-ibmPlex flex items-center justify-center ">
            <p className="px-8 text-black/60">
              Vellore Institute of Technology (VIT) has always been at the
              forefront in developing novel technologies and has achieved
              several National and International accolades.
            </p>
          </BorderBox>
          <div className="w-[35%] relative -top-8">
            <div className="w-full rounded-l-full h-10 bg-primary  flex items-center pl-16 --clip-shape-about-banner">
              <div className="rounded-full h-10 w-10 border-[1px] border-primary border-dashed bg-base flex items-center justify-center absolute left-0 top-0">
                <div className="rounded-full h-7 w-7 border-[1px] border-primary flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                </div>
              </div>
              <p className="font-auxMono text-white text-sm ">
                A Kaleidoscope of Inventive Brilliance
              </p>
            </div>
            <div className="w-[50%] h-[2px] border-t-[1px] border-primary border-dashed absolute top-1/2 -translate-y-1/2 right-[100%]">
              <div className="w-20 h-[2px] border-t-[1px] border-primary border-dashed absolute top-5 right-[98%] -rotate-[30deg]"></div>
            </div>
          </div>
        </section>
        <section className="w-full flex items-center justify-between">
          <BorderBox className="w-[45%] h-36 bg-[#FAF0EB] order-1 font-ibmPlex flex items-center justify-center">
            <p className="px-8 text-black/60">
              The students at VIT have been provided with ample opportunities to
              unleash their genius. The annual techno-management knowledge
              carnival of VIT, “graVITas” attracts students from India and
              Abroad.
            </p>
          </BorderBox>
          <div className="relative w-[35%] ">
            <div className="w-full rounded-r-full h-10 bg-primary relative flex items-center justify-end pr-16 text-white font-auxMono text-sm --clip-shape-about-banner-2">
              <div className="rounded-full h-10 w-10 border-[1px] border-primary border-dashed bg-base flex items-center justify-center absolute right-0 top-0">
                <div className="rounded-full h-7 w-7 border-[1px] border-primary flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                </div>
              </div>
              <p>A Techno-Management Odyssey Begins!</p>
            </div>
            <div className="w-full h-[2px] border-t-[1px] border-primary border-dashed absolute top-1/2 -translate-y-1/2 left-[100%]"></div>
          </div>
        </section>
        <section className="w-full flex items-center justify-between">
          <BorderBox className="w-[45%] h-36 bg-[#FAF0EB] z-[50] font-ibmPlex flex items-center justify-center">
            <p className="px-8 text-black/60">
              The theme of this year&apos;s extravaganza will be with an
              objective of inspiring the student community to develop a product
              for solving real-world problems and challenges.
            </p>
          </BorderBox>
          <div className="relative w-[35%]  top-8">
            <div className="w-full rounded-l-full h-10 bg-primary  flex items-center justify-start pl-16 text-white font-auxMono text-sm --clip-shape-about-banner-3  ">
              <div className="rounded-full h-10 w-10 border-[1px] border-primary border-dashed bg-base flex items-center justify-center absolute left-0 top-0">
                <div className="rounded-full h-7 w-7 border-[1px] border-primary flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                </div>
              </div>
              <p>Igniting the Innovation Fireworks!</p>
            </div>
            <div className="w-[50%] h-[2px] border-t-[1px] border-primary border-dashed absolute top-1/2 -translate-y-1/2 right-[100%]">
              <div className="w-20 h-[2px] border-t-[1px] border-primary border-dashed absolute bottom-5 right-[98%] rotate-[30deg]"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutGravitas;
