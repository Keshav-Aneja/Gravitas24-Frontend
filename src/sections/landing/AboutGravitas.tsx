import BorderBox from "@/components/common/BorderBox";
import React from "react";

const AboutGravitas = () => {
  return (
    <div className="w-[90%] mx-auto pt-16 md:pt-28 flex flex-col gap-12  md:gap-20">
      <h1 className="font-clash text-4xl md:text-6xl font-semibold">
        About graVITas
      </h1>
      <div className="w-full flex flex-col gap-6">
        <section className="w-full flex flex-col md:flex-row md:items-center justify-between">
          <BorderBox className="w-[85%] self-start md:w-[45%] h-36 bg-[#FAF0EB] z-[50] font-ibmPlex flex items-center justify-center order-1 ">
            <p className="px-3 md:px-6 text-black/60 text-xs md:text-sm lg:text-[1rem] ">
              Vellore Institute of Technology (VIT) has always been at the
              forefront in developing novel technologies and has achieved
              several National and International accolades.
            </p>
          </BorderBox>
          <div className="w-[80%] md:w-[35%] relative left-16 md:left-0 -top-5  md:-top-8 order-0 md:order-2 ">
            <div className="w-full rounded-l-full h-10 bg-primary  flex items-center pl-12 pr-1 md:pl-16 --clip-shape-about-banner">
              <div className="rounded-full h-10 w-10 border-[1px] border-primary border-dashed bg-base flex items-center justify-center absolute left-0 top-0">
                <div className="rounded-full h-7 w-7 border-[1px] border-primary flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                </div>
              </div>
              <p className="font-auxMono text-white text-xs md:text-sm ">
                A Kaleidoscope of Inventive Brilliance
              </p>
            </div>
            <div className="w-[7%] md:w-[50%] h-[2px] border-t-[1px] border-primary border-dashed absolute top-1/2 -translate-y-1/2 right-[100%]">
              <div className="w-12 md:w-20 h-[2px] border-t-[1px] border-primary border-dashed absolute top-5 right-[40%] md:right-[98%] -rotate-[60deg] md:-rotate-[30deg]"></div>
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col md:flex-row md:items-center justify-between gap-5 md:gap-0">
          <BorderBox className="w-[85%] md:w-[45%] h-36 bg-[#FAF0EB] order-1 font-ibmPlex flex items-center justify-center self-end">
            <p className="px-3 md:px-6 text-black/60 text-xs md:text-sm lg:text-[1rem]">
              The students at VIT have been provided with ample opportunities to
              unleash their genius. The annual techno-management knowledge
              carnival of VIT, “graVITas” attracts students from India and
              Abroad.
            </p>
          </BorderBox>
          <div className="relative w-[80%] md:w-[35%] ">
            <div className="w-full rounded-r-full h-10 bg-primary relative flex items-center justify-end pr-12 pl-3 md:pl-0 md:pr-16 text-white font-auxMono text-xs md:text-sm --clip-shape-about-banner-2">
              <div className="rounded-full h-10 w-10 border-[1px] border-primary border-dashed bg-base flex items-center justify-center absolute right-0 top-0">
                <div className="rounded-full h-7 w-7 border-[1px] border-primary flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                </div>
              </div>
              <p>A Techno-Management Odyssey Begins!</p>
            </div>
            <div className="w-[7%] md:w-full h-[2px] border-t-[1px] border-primary border-dashed absolute top-1/2 -translate-y-1/2 left-[100%]">
              <div className="w-12 md:w-20 h-[2px] border-t-[1px] border-primary border-dashed absolute top-5 -right-9 md:right-[98%] rotate-[60deg] md:-rotate-[30deg] md:hidden"></div>
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col md:flex-row md:items-center justify-between gap-12 md:gap-0 -mt-8 md:mt-0">
          <BorderBox className="w-[85%] md:w-[45%] h-36 bg-[#FAF0EB] z-[50] font-ibmPlex flex items-center justify-center order-1">
            <p className="px-3 md:px-6 text-black/60 text-xs md:text-sm lg:text-[1rem]">
              The theme of this year&apos;s extravaganza will be with an
              objective of inspiring the student community to develop a product
              for solving real-world problems and challenges.
            </p>
          </BorderBox>
          <div className=" w-[80%] md:w-[35%] relative left-16 md:left-0  top-8 order-0 md:order-2">
            <div className="w-full rounded-l-full h-10 bg-primary  flex items-center justify-start pl-12 md:pl-16 text-white font-auxMono text-sm --clip-shape-about-banner-3  ">
              <div className="rounded-full h-10 w-10 border-[1px] border-primary border-dashed bg-base flex items-center justify-center absolute left-0 top-0">
                <div className="rounded-full h-7 w-7 border-[1px] border-primary flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                </div>
              </div>
              <p className="font-auxMono text-white text-xs md:text-sm ">
                Igniting the Innovation Fireworks!
              </p>
            </div>
            <div className="w-[10%] md:w-[50%] h-[2px] border-t-[1px] border-primary border-dashed absolute top-1/2 -translate-y-1/2 right-[100%]">
              <div className="w-16 md:w-20 h-[2px] border-t-[1px] border-primary border-dashed absolute -bottom-7 md:bottom-5 right-[40%] md:right-[98%] -rotate-[60deg] md:rotate-[30deg]"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutGravitas;
