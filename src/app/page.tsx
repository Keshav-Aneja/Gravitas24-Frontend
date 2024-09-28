"use client";
import Header from "@/components/landing/Header";
import AboutGravitas from "@/sections/landing/AboutGravitas";
import Hero from "@/sections/landing/Hero";
import PremiumEvents from "@/sections/landing/PremiumEvents";
import Sponsors from "@/sections/landing/Sponsors";
import Timer from "@/sections/landing/Timer";
import Patrons from "@/sections/landing/Patrons";
import Gallery from "@/sections/landing/gallery";
import Footer from "@/sections/landing/Footer";
import AboutVIT from "@/sections/landing/AboutVIT";
import { ReactLenis } from "@studio-freight/react-lenis";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import images from "@/constants/images";
import MiniHero from "@/sections/landing/MiniHero";
import { toast } from "@/hooks/use-toast";
import Head from "next/head";
import Cookies from "js-cookie";

import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function Home() {
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    setShowDialog(true);
  }, []);

  return (
    <main className="bg-base w-full pb-6">
      <ReactLenis
        root
        options={{
          lerp: 0.04,
          duration: 1.5,
          smoothWheel: true,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: "vertical",
        }}
      >
        <Dialog
          open={showDialog}
          onOpenChange={() => {
            setShowDialog(false);
            return false;
          }}
        >
          <DialogContent className="z-[500] w-full md:w-[60vw] fixed p-8 bg-primary border-primary">
            <video
              src="/video/laserShow.webm"
              width={1920}
              height={1080}
              className="md:w-[60vw] z-[50]"
              style={{ zIndex: 50 }}
              playsInline={true}
              autoPlay={true}
              muted={true}
              loop={true}
              controls={true}
              controlsList="nodownload nofullscreen noremoteplayback"
            />
            <a
              href="https://gravitas.vit.ac.in/events/f2ad2286-6a52-4645-8b2f-635aa7fe635d"
              className="px-4 py-2 bg-primary transition-all duration-100 ease-linear text-white font-auxMono relative border-2 text-center border-white hover:bg-primaryLight"
            >
              Register Now !!!
            </a>
          </DialogContent>
        </Dialog>

        <MiniHero />
        <Hero />
        <Timer />
        <AboutGravitas />
        <AboutVIT />
        <PremiumEvents />
        <Sponsors />
        <Patrons />
        <Gallery />
      </ReactLenis>
    </main>
  );
}
