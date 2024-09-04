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
import { useEffect, useRef } from "react";
import Image from "next/image";
import images from "@/constants/images";
import MiniHero from "@/sections/landing/MiniHero";
import { toast } from "@/hooks/use-toast";
export default function Home() {
  useEffect(() => {
    toast({
      title: "ARYAN ",
      description: "AUR USKI BANDI",
    });
  }, []);
  return (
    <main className="bg-base w-full pb-6">
      <ReactLenis
        root
        options={{
          lerp: 0.04,
          duration: 2.5,
          smoothWheel: true,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: "vertical",
        }}
      >
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
