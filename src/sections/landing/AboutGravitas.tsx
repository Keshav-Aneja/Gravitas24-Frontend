import BorderBox from "@/components/common/BorderBox";
import React from "react";

const AboutGravitas = () => {
  return (
    <div className="w-[90%] mx-auto pt-28 flex flex-col gap-20">
      <h1 className="font-clash text-6xl">About graVITas</h1>
      <div className="w-full flex flex-col gap-6">
        <section className="w-full flex items-center justify-between">
          <BorderBox className="w-[45%] h-36 bg-[#f4f7ff] z-[50]">
            <></>
          </BorderBox>
          <div className="w-[35%] rounded-full h-10 bg-primaryLight relative -top-8">
            <div className="w-[50%] h-[2px] border-t-[1px] border-primary border-dashed absolute top-1/2 -translate-y-1/2 right-[100%]">
              <div className="w-20 h-[2px] border-t-[1px] border-primary border-dashed absolute top-5 right-[98%] -rotate-[30deg]"></div>
            </div>
            <div className="rounded-full h-10 w-10 border-[1px] border-primary border-dashed bg-base flex items-center justify-center absolute left-0 top-0">
              <div className="rounded-full h-7 w-7 border-[1px] border-primary flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full flex items-center justify-between">
          <BorderBox className="w-[45%] h-36 bg-[#f4f7ff] order-1">
            <></>
          </BorderBox>
          <div className="w-[35%] rounded-full h-10 bg-primaryLight relative">
            <div className="w-full h-[2px] border-t-[1px] border-primary border-dashed absolute top-1/2 -translate-y-1/2 left-[100%]"></div>
            <div className="rounded-full h-10 w-10 border-[1px] border-primary border-dashed bg-base flex items-center justify-center absolute right-0 top-0">
              <div className="rounded-full h-7 w-7 border-[1px] border-primary flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full flex items-center justify-between">
          <BorderBox className="w-[45%] h-36 bg-[#f4f7ff] z-[50]">
            <></>
          </BorderBox>
          <div className="w-[35%] rounded-full h-10 bg-primaryLight relative top-8">
            <div className="w-[50%] h-[2px] border-t-[1px] border-primary border-dashed absolute top-1/2 -translate-y-1/2 right-[100%]">
              <div className="w-20 h-[2px] border-t-[1px] border-primary border-dashed absolute bottom-5 right-[98%] rotate-[30deg]"></div>
            </div>
            <div className="rounded-full h-10 w-10 border-[1px] border-primary border-dashed bg-base flex items-center justify-center absolute left-0 top-0">
              <div className="rounded-full h-7 w-7 border-[1px] border-primary flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutGravitas;
