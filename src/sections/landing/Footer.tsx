"use client";
import React, { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa6";
import SocialsCard from "@/components/landing/SocialsCard";
import { SlSocialLinkedin, SlSocialYoutube } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";
import { LiaFacebook } from "react-icons/lia";
import { RiTwitterXLine } from "react-icons/ri";
import Marquee from "react-fast-marquee";

const Footer = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const hero = window.document.getElementById("top");
    // console.log(hero)
    hero?.scrollIntoView({ behavior: "smooth" });
  }, [scroll]);

  return (
    <div className="mx-auto pt-20 flex relative flex-col w-full">
      <Marquee
        autoFill
        speed={30}
        direction="right"
        className="z-[20] border-y-2 border-black"
      >
        <div className="flex items-center gap-12 ml-12">
          <h1 className="font-auxMono uppercase">Revitalize yourself!</h1>
          <div className="w-1 h-1 border rounded-full bg-black border-black"></div>
          <h1 className="font-auxMono uppercase">Unleash Your Genius</h1>
          <div className="w-1 h-1 border rounded-full bg-black border-black"></div>
        </div>
      </Marquee>
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-around py-16 md:py-24 p-4 w-full relative">
        <div className="w-full mx-auto md:mb-0">
          <div className="text-5xl ml-8 md:ml-16 md:text-7xl font-clash font-semibold text-wrap">
            <p>
              inno<span className="text-primary">V</span>ate.
            </p>
            <p>
              susta<span className="text-primary">I</span>n.
            </p>
            <p>
              <span className="text-primary">T</span>ransform.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-row items-end justify-end md:w-full">
          <div className="bg-[#212121] --footer-bg py-5 md:py-12 pb-6 font-clash text-white md:w-auto flex flex-col justify-center --clip-shape-footer relative">
            <section className="md:border-r px-6 border-white">
              <h1 className="text-xl md:text-4xl text-nowrap">
                Dr. Sharmila N
              </h1>
              <p className="text-sm md:text-2xl  text-nowrap">
                Convenor graVITas&apos;24
              </p>
            </section>
            <section className="px-6 text-xs md:text-2xl">
              <a href="mailto:convenor.gravitas@vit.ac.in">
                convenor.gravitas@vit.ac.in
              </a>
            </section>
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto">
        <section className="w-full flex relative flex-row items-center justify-center">
          <SocialsCard
            name="Instagram"
            link="https://www.instagram.com/vitgravitas"
            icon={FaInstagram}
          />
          <SocialsCard
            name="Youtube"
            link="https://www.youtube.com/@GravitasVITUniversity"
            icon={SlSocialYoutube}
          />
          <SocialsCard
            name="Facebook"
            link="https://www.facebook.com/Gravitas.VITvellore/"
            icon={LiaFacebook}
          />{" "}
          <SocialsCard
            name="X.com"
            link="https://twitter.com/GraVITas_VIT"
            icon={RiTwitterXLine}
          />
          <SocialsCard
            name="Whatsapp"
            link="https://whatsapp.com/channel/0029ValvXsz8KMqtVfWOym1Q"
            icon={FaWhatsapp}
          />
        </section>
        <section className="p-6 flex flex-col md:flex-row justify-between text-xs text-center gap-2 font-auxMono">
          <p>2024 © Vellore Institute of Technology, Vellore</p>
        </section>
      </div>
      <button
        className="--sponsor-floater absolute h-[240px] left-0 bottom-20 w-[45px] hidden lg:flex flex-row items-center justify-center bg-primary hover:scale-110 transition-all"
        onClick={() => setScroll(!scroll)}
      >
        <p className="-rotate-90 text-nowrap text-xl text-white font-auxMono">
          To Top &gt;&gt;&gt;
        </p>
      </button>
    </div>
  );
};

export default Footer;
