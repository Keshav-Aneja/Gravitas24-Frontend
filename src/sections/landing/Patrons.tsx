import React from "react";
import { svgs } from "@/constants/svgs";
import Image from "next/image";
import PatronCard from "@/components/landing/PatronCard";
import images from "@/constants/images";
import Link from "next/link";

const Patrons = () => {
  return (
    <div className="w-[90%] relative mx-auto py-20 flex flex-col gap-20">
      <span className="flex flex-col md:flex-row items-center md:items-end gap-4 w-full relative">
        <h1 className="font-clash text-6xl font-semibold">Meet The Team.</h1>
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
        <PatronCard
          image={images.patron1}
          name="G Vishwanathan"
          desig="Chancellor"
          label="PATRON"
        />
        <PatronCard
          image={images.patron1}
          name="G Vishwanathan"
          desig="Chancellor"
          label="PATRON"
        />
        <span className="flex flex-row items-center justify-center">
          <PatronCard
            image={images.patron1}
            name="G Vishwanathan"
            desig="Chancellor"
            label="PATRON"
          />
          <Link
            className="--sponsor-floater h-[350px] left-0 bottom-0 w-[45px] flex flex-row items-center justify-center bg-primary hover:scale-110 transition-all"
            href="/team"
          >
            <p className="rotate-90 text-nowrap text-xl text-white font-auxMono">
              SEE MORE
            </p>
          </Link>
        </span>
      </section>
      <div className="text-secondary w-fit font-auxMono">
        <p>&gt; Greetings</p>
        <p>&gt; -</p>
        <p>&gt; INITIALIZING SEQUENCE</p>
      </div>
    </div>
  );
};

export default Patrons;
