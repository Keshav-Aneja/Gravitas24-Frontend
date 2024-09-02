import React from "react";
import { svgs } from "@/constants/svgs";
import Image from "next/image";
import PatronCard from "@/components/landing/PatronCard";
import images from "@/constants/images";

const Patrons = () => {
  return (
    <div className="w-[90%] mx-auto py-20 flex flex-col gap-20">
      <span className="flex flex-col md:flex-row items-center md:items-end gap-4 w-full relative">
        <h1 className="font-clash text-6xl font-semibold">Meet The Patrons.</h1>
        <Image
          src={svgs.Patrons}
          alt=""
          width={250}
          height={80}
          className="py-6"
        />
      </span>
      <section className="w-full flex flex-wrap items-center justify-center">
        <PatronCard
          image={images.patron1}
          name="G Vishwanathan"
          desig="Chancellor"
          label="PATRON"
        />
        <PatronCard />
        <PatronCard />
        <PatronCard />
      </section>
    </div>
  );
};

export default Patrons;
