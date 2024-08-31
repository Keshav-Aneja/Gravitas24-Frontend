import React from "react";
import { svgs } from "@/constants/svgs";
import Image from "next/image";
import PatronCard from "@/components/landing/PatronCard";
import images from "@/constants/images";
import { FaInstagram } from "react-icons/fa6";
import SocialsCard from "@/components/landing/SocialsCard";

const Footer = () => {
  return (
    <div className=" mx-auto pt-20 flex flex-col">
      <div className="dotted-bg flex flex-col lg:flex-row gap-4 items-center justify-around py-24 p-4 w-full relative">
        <p className="text-7xl font-clash font-medium text-wrap">
          Venture. Innovate. Transform
        </p>
        <div className="bg-black py-12 font-clash text-white w-auto flex flex-row items-center justify-center">
          <section className="border-r px-6 border-white">
            <h1 className="text-4xl text-nowrap">Dr. Sharmila N</h1>
            <p className="text-xl text-nowrap">Convenor graVITas&apos;24</p>
          </section>
          <section className="px-6 text-2xl">
            <a href="mailto:convenor.gravitas@vit.ac.in">
              convenor.gravitas@vit.ac.in
            </a>
          </section>
        </div>
      </div>
      <div className="w-auto mx-auto">
        <section className="w-full flex flex-wrap items-center justify-center">
          <SocialsCard
            name="Instagram"
            link="https://www.instagram.com/gravitas_vit/"
            icon={FaInstagram}
          />
          <SocialsCard
            name="Instagram"
            link="https://www.instagram.com/gravitas_vit/"
            icon={FaInstagram}
          />
          <SocialsCard
            name="Instagram"
            link="https://www.instagram.com/gravitas_vit/"
            icon={FaInstagram}
          />{" "}
          <SocialsCard
            name="Instagram"
            link="https://www.instagram.com/gravitas_vit/"
            icon={FaInstagram}
          />
          <SocialsCard
            name="Instagram"
            link="https://www.instagram.com/gravitas_vit/"
            icon={FaInstagram}
          />
        </section>
        <section className="pt-6 px-4 flex flex-row justify-between font-auxMono">
          <p>2024 © Vellore Institute of Technology, Vellore</p>
          <p>OFFICE OF STUDENTS&apos; WELFARE</p>
        </section>
      </div>
    </div>
  );
};

export default Footer;
