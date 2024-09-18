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

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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
          <DialogContent className="z-[500] fixed p-12">
            <a href="https://gravitas.vit.ac.in">
              <video
                src="/video/HeroBackgroundNew.webm"
                width={1920}
                height={1080}
                className="w-full z-[50]"
                style={{ zIndex: 50 }}
                playsInline={true}
                autoPlay={true}
                muted={true}
                loop={true}
              />
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
