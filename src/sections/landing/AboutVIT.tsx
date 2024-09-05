import BorderBox from "@/components/common/BorderBox";
import React from "react";

const AboutVIT = () => {
  return (
    <div className="w-[90%] mx-auto pt-16 md:pt-28 flex flex-col gap-12 md:gap-20">
      <h1 className="font-clash text-4xl md:text-6xl font-semibold">
        About VIT
      </h1>
      <div className="w-full grid gird-cols-1 md:grid-cols-3 gap-10 md:gap-20">
        <div className="w-full flex flex-col gap-6">
          <span className="relative w-full h-16 text-black font-auxMono text-[1rem] md:text-lg flex flex-col items-center justify-center font-medium">
            <p className="text-center">Institute of Eminence</p>
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
            <BorderBox className="w-full h-32 md:h-44 bg-[#FAF0EB] z-[50] font-ibmPlex flex items-center justify-center ">
              <p className="px-3 md:px-6 text-black/60 text-xs md:text-sm lg:text-[1rem] ">
                Vellore Institute of Technology (VIT) has always been at the
                forefront in developing novel technologies and has achieved
                several National and International accolades.
              </p>
            </BorderBox>
          </section>
        </div>
        <div className="w-full flex flex-col gap-6">
          <span className="relative w-full h-16 text-black font-auxMono text-[1rem] md:text-lg flex flex-col items-center justify-center font-medium">
            <p className="text-center">A Hub for Learning</p>
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
            <BorderBox className="w-full h-32 md:h-44 bg-[#FAF0EB] z-[50] font-ibmPlex flex items-center justify-center ">
              <p className="px-3 md:px-6 text-black/60 text-xs md:text-sm lg:text-[1rem] ">
                The campus has a cosmopolitan atmosphere with students from all
                corners of the globe. Experienced and learned teachers are
                strongly encouraged to nurture the students.
              </p>
            </BorderBox>
          </section>
        </div>
        <div className="w-full flex flex-col gap-6">
          <span className="relative w-full h-16 text-black font-auxMono text-[1rem] md:text-lg flex flex-col items-center justify-center font-medium">
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
            <BorderBox className="w-full h-32 md:h-44 bg-[#FAF0EB] z-[50] font-ibmPlex flex items-center justify-center ">
              <p className="px-3 md:px-6 text-black/60 text-xs md:text-sm lg:text-[1rem] ">
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
