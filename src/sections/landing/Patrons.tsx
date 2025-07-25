import React from "react";
import { svgs } from "@/constants/svgs";
import Image from "next/image";
import PatronCard from "@/components/landing/PatronCard";
import images from "@/constants/images";
import Link from "next/link";
import data from "@/constants/team.json";

type person = {
  name: string;
  position: string;
  img?: string;
};

interface dataType {
  title: string;
  people: person[];
}

const Patrons = () => {
  const people: dataType[] = data;

  return (
    <div className="w-[90%] relative mx-auto py-20 flex flex-col">
      <span className="flex flex-col md:flex-row items-center md:items-end gap-4 w-full relative mb-20">
        <h1 className="font-clash text-4xl w-full md:text-6xl font-semibold">
          Meet The Team
        </h1>
        <Image
          src={svgs.Patrons}
          alt=""
          width={250}
          height={80}
          className="hidden h-[60px] w-auto md:block"
        />
      </span>
      <section className="flex flex-wrap justify-center items-center mb-10 relative overflow-hidden">
        <PatronCard
          image={people[0].people[0]?.img || ""}
          name={people[0].people[0].name}
          desig={people[0].people[0].position}
          label="Chief Patron"
        />
        <PatronCard
          image={people[1].people[0].img}
          name={people[1].people[0].name}
          desig={people[1].people[0].position}
          label="Patron"
        />
        <PatronCard
          image={people[1].people[1].img}
          name={people[1].people[1].name}
          desig={people[1].people[1].position}
          label="Patron"
        />
        <PatronCard
          image={people[1].people[2]?.img}
          name={people[1].people[2].name}
          desig={people[1].people[2].position}
          label="Patron"
        />
        <Link
          className="--sponsor-floater  absolute right-0 h-[300px] w-10 hidden lg:flex flex-row items-center justify-center bg-primary hover:scale-110 transition-all"
          href="/team"
        >
          <p className="rotate-90 text-nowrap text-xl text-white font-auxMono">
            SEE MORE
          </p>
        </Link>
      </section>
      <div className="w-full mb-20">
        <Link
          className="--patron-floater mx-auto h-10 w-[200px] flex lg:hidden flex-row items-center justify-center bg-primary hover:scale-110 transition-all"
          href="/team"
        >
          <p className="text-nowrap text-xl text-white font-auxMono">
            SEE MORE
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Patrons;
