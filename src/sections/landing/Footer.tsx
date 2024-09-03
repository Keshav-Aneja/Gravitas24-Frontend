import React from "react";
import { svgs } from "@/constants/svgs";
import Image from "next/image";
import PatronCard from "@/components/landing/PatronCard";
import images from "@/constants/images";
import { FaInstagram } from "react-icons/fa6";
import SocialsCard from "@/components/landing/SocialsCard";
import { SlSocialLinkedin, SlSocialYoutube } from "react-icons/sl";
import { LiaFacebook } from "react-icons/lia";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className=" mx-auto pt-20 flex flex-col relative w-full">
      <div className="dotted-bg flex flex-col lg:flex-row gap-4 items-center justify-around py-16 md:py-24 p-4 w-full relative">
        <div className="w-[90%] mx-auto mb-36 md:mb-0">
          <div className="text-5xl md:text-7xl font-clash font-semibold text-wrap">
            <p>
              inno<span className="text-primary">V</span>ate
            </p>
            <p>
              susta<span className="text-primary">I</span>n.
            </p>
            <p>
              <span className="text-primary">T</span>ransform.
            </p>
          </div>
        </div>
        <div className="absolute right-0 md:top-20 top-60 w-[80%] md:w-[40%]">
          <div className="bg-[#212121] w-[60%] md:w-[80%] h-6 absolute -bottom-5 right-0 --clip-shape-footer-2"></div>

          <div className="bg-[#212121] py-5 md:py-12 pb-6 font-clash text-white w-auto flex flex-col   justify-center --clip-shape-footer relative">
            <section className="md:border-r px-6 border-white">
              <h1 className="text-xl md:text-4xl text-nowrap">
                Dr. Sharmila N
              </h1>
              <p className="text-sm md:text-xl text-nowrap uppercase font-auxMono">
                Convenor graVITas&apos;24
              </p>
            </section>
            <section className="px-6 text-xs uppercase font-auxMono md:text-2xl">
              <a href="mailto:convenor.gravitas@vit.ac.in">
                convenor.gravitas@vit.ac.in
              </a>
            </section>
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto">
        <section className="w-full grid grid-cols-2 md:grid-cols-5">
          <SocialsCard
            name="Instagram"
            link="https://www.instagram.com/gravitas_vit/"
            icon={FaInstagram}
          />
          <SocialsCard
            name="Youtube"
            link="https://www.instagram.com/gravitas_vit/"
            icon={SlSocialYoutube}
          />
          <SocialsCard
            name="Facebook"
            link="https://www.instagram.com/gravitas_vit/"
            icon={LiaFacebook}
          />{" "}
          <SocialsCard
            name="X.com"
            link="https://www.instagram.com/gravitas_vit/"
            icon={RiTwitterXLine}
          />
          <SocialsCard
            name="Linkedin"
            link="https://www.instagram.com/gravitas_vit/"
            icon={SlSocialLinkedin}
          />
        </section>
        <section className="pt-6  flex flex-col md:flex-row justify-between text-xs text-center gap-2 font-auxMono">
          <p>2024 © Vellore Institute of Technology, Vellore</p>
          <p>OFFICE OF STUDENTS&apos; WELFARE</p>
        </section>
      </div>
    </div>
  );
};

export default Footer;
