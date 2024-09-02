import React from "react";
import Image from "next/image";
import images from "@/constants/images";
import Link from "next/link";
import Button from "../common/Button";
import {
  EVENT_PAGE,
  FAQ_PAGE,
  MERCH_PAGE,
  TEAM_PAGE,
} from "@/constants/routes";
const Navbar = () => {
  return (
    <div className="w-full border-y-[1px] border-outline h-[4rem] sticky top-0 left-0 z-[2000] bg-white/50 backdrop-blur-xl">
      <div className="w-[90%] mx-auto grid grid-cols-5 h-full">
        <section className="flex items-center justify-center h-full border-x-[1px] border-outline relative">
          <Link href="https://vit.ac.in">
            <Image
              src={images.vitLogo}
              alt="Vellore Institue of Technology"
              width={200}
              height={200}
              className=" grayscale h-[2.5rem] w-auto"
            />
          </Link>
          <span className="w-[6px] h-[6px] bg-outline absolute -bottom-[3px] -left-[3px]"></span>
          <span className="w-[6px] h-[6px] bg-outline absolute -bottom-[3px] -right-[3px]"></span>
        </section>
        <section />
        <section className="flex items-center justify-center h-full border-x-[1px] border-outline relative">
          <Link href="/">
            <Image
              src={images.gravitasLogo}
              alt="Vellore Institue of Technology"
              width={200}
              height={200}
              className=" invert w-[60%] h-auto"
            />
          </Link>
          <span className="w-[6px] h-[6px] bg-outline absolute -bottom-[3px] -left-[3px]"></span>
          <span className="w-[6px] h-[6px] bg-outline absolute -bottom-[3px] -right-[3px]"></span>
        </section>
        <span className="w-full flex items-center gap-4 justify-around font-auxMono text-[1rem] font-medium">
          <Link
            href={TEAM_PAGE}
            className="hover:text-primary transition-all duration-200 ease-linear hover:underline underline-offset-8"
          >
            TEAM
          </Link>
          <Link
            href={FAQ_PAGE}
            className="hover:text-primary transition-all duration-200 ease-linear hover:underline underline-offset-8"
          >
            FAQ&apos;s
          </Link>
        </span>
        <section className="w-full flex items-center gap-4 justify-around font-auxMono text-[1rem] font-medium border-x-[1px] border-outline relative ">
          <Link
            href={MERCH_PAGE}
            className="hover:text-primary transition-all duration-200 ease-linear hover:underline underline-offset-8"
          >
            MERCH
          </Link>
          <Button className="z-0 --event-button">
            <a href={EVENT_PAGE}>
              <span>EVENTS</span>
            </a>
          </Button>

          <span className="w-[6px] h-[6px] bg-outline absolute -bottom-[3px] -right-[3px]"></span>
        </section>
      </div>
    </div>
  );
};

export default Navbar;
