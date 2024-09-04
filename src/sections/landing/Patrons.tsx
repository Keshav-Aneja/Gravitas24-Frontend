import React from "react";
import { svgs } from "@/constants/svgs";
import Image from "next/image";
import PatronCard from "@/components/landing/PatronCard";
import images from "@/constants/images";
import Link from "next/link";
import data from "@/constants/team.json"

const Patrons = () => {
  return (
    <div className="w-[90%] relative mx-auto py-20 flex flex-col gap-20">
      <span className="flex flex-col md:flex-row items-center md:items-end gap-4 w-full relative">
        <h1 className="font-clash text-4xl w-full md:text-6xl font-semibold">Meet The Team.</h1>
        <Image
          src={svgs.Patrons}
          alt=""
          width={250}
          height={80}
          className="hidden md:block py-6"
        />
      </span>
      <section className="w-full h-auto flex flex-col gap-4 lg:gap-0 lg:flex-row items-center justify-center">
        <PatronCard
          image={data[0].people[0].img}
          name={data[0].people[0].name}
          desig={data[0].people[0].position}
          label="Patron"
        />
        <PatronCard
          image={data[1].people[0].img}
          name={data[1].people[0].name}
          desig={data[1].people[0].position}
          label="Co-Patron"
          className="hidden lg:flex"
        />
        <PatronCard
          image={data[1].people[1].img}
          name={data[1].people[1].name}
          desig={data[1].people[1].position}
          label="CO-PATRON"
          className="hidden lg:flex"
        />
        <PatronCard
          image={images.patron1}
          name="G Vishwanathan"
          desig="Chancellor"
          label="PATRON"
          className="hidden lg:flex"
        />
        <div className="flex flex-row gap-4 lg:hidden">
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
        </div>
        <Link
          className="--sponsor-floater h-[300px] left-0 bottom-0 w-[45px] hidden lg:flex flex-row items-center justify-center bg-primary hover:scale-110 transition-all"
          href="/team"
        >
          <p className="rotate-90 text-nowrap text-xl text-white font-auxMono">
            SEE MORE
          </p>
        </Link>
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
