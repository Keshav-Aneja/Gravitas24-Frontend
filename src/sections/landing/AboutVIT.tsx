import BorderBox from "@/components/common/BorderBox";
import React from "react";

const AboutVIT = () => {
  return (
    <div className="w-[90%] mx-auto pt-28 flex flex-col gap-20">
      <h1 className="font-clash text-6xl font-semibold">About VIT</h1>
      <div className="w-full grid grid-cols-3 gap-20">
        <div className="w-full flex flex-col gap-6">
          <span className="relative w-full h-16 text-black font-auxMono text-lg flex flex-col items-center justify-center font-medium">
            <p>Institute of Eminence</p>
            <div className="w-6 h-1 bg-secondary absolute top-0 left-0"></div>
            <div className="w-1 h-4 bg-secondary absolute top-0 left-0"></div>
            <div className="w-1 h-4 bg-secondary absolute top-0 right-0"></div>
            <div className="w-1 h-4 bg-secondary absolute bottom-0 left-0"></div>
            <div className="w-1 h-4 bg-secondary absolute bottom-0 right-0"></div>
            <div className="w-6 h-1 bg-secondary absolute top-0 right-0"></div>
            <div className="w-6 h-1 bg-secondary absolute bottom-0 left-0"></div>
            <div className="w-6 h-1 bg-secondary absolute bottom-0 right-0"></div>
          </span>
          <section className="w-full flex items-center justify-between">
            <BorderBox className="w-full h-44 bg-[#FAF0EB] z-[50] font-ibmPlex flex items-center justify-center ">
              <p className="px-8 text-black/60">
                Vellore Institute of Technology (VIT) has always been at the
                forefront in developing novel technologies and has achieved
                several National and International accolades.
              </p>
            </BorderBox>
          </section>
        </div>
        <div className="w-full flex flex-col gap-6">
          <span className="relative w-full h-16 text-black font-auxMono text-lg flex flex-col items-center justify-center font-medium">
            <p>A Hub for Learning</p>
            <div className="w-6 h-1 bg-secondary absolute top-0 left-0"></div>
            <div className="w-1 h-4 bg-secondary absolute top-0 left-0"></div>
            <div className="w-1 h-4 bg-secondary absolute top-0 right-0"></div>
            <div className="w-1 h-4 bg-secondary absolute bottom-0 left-0"></div>
            <div className="w-1 h-4 bg-secondary absolute bottom-0 right-0"></div>
            <div className="w-6 h-1 bg-secondary absolute top-0 right-0"></div>
            <div className="w-6 h-1 bg-secondary absolute bottom-0 left-0"></div>
            <div className="w-6 h-1 bg-secondary absolute bottom-0 right-0"></div>
          </span>
          <section className="w-full flex items-center justify-between">
            <BorderBox className="w-full h-44 bg-[#FAF0EB] z-[50] font-ibmPlex flex items-center justify-center ">
              <p className="px-8 text-black/60">
                The campus has a cosmopolitan atmosphere with students from all
                corners of the globe. Experienced and learned teachers are
                strongly encouraged to nurture the students.
              </p>
            </BorderBox>
          </section>
        </div>
        <div className="w-full flex flex-col gap-6">
          <span className="relative w-full h-16 text-black font-auxMono text-lg flex flex-col items-center justify-center font-medium">
            <p>Global Powerhouse</p>
            <div className="w-6 h-1 bg-secondary absolute top-0 left-0"></div>
            <div className="w-1 h-4 bg-secondary absolute top-0 left-0"></div>
            <div className="w-1 h-4 bg-secondary absolute top-0 right-0"></div>
            <div className="w-1 h-4 bg-secondary absolute bottom-0 left-0"></div>
            <div className="w-1 h-4 bg-secondary absolute bottom-0 right-0"></div>
            <div className="w-6 h-1 bg-secondary absolute top-0 right-0"></div>
            <div className="w-6 h-1 bg-secondary absolute bottom-0 left-0"></div>
            <div className="w-6 h-1 bg-secondary absolute bottom-0 right-0"></div>
          </span>
          <section className="w-full flex items-center justify-between">
            <BorderBox className="w-full h-44 bg-[#FAF0EB] z-[50] font-ibmPlex flex items-center justify-center ">
              <p className="px-8 text-black/60">
                The global standards set at VIT in the field of teaching and
                research spur us on in our relentless pursuit of excellence. In
                fact, it has become a way of life for us.
              </p>
            </BorderBox>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutVIT;
