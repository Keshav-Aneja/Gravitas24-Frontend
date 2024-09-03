import React from "react";
import Image from "next/image";
import images from "@/constants/images";
import Link from "next/link";
import Button from "../common/Button";
import {
  AUTH_PAGE,
  EVENT_PAGE,
  FAQ_PAGE,
  MERCH_PAGE,
  TEAM_PAGE,
} from "@/constants/routes";
import { AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className="w-full border-y-[1px] border-outline h-[3rem] md:h-[4rem] sticky top-0 left-0 z-[2000] bg-white/50 backdrop-blur-xl">
      <div className="w-full lg:w-[90%] mx-auto grid grid-cols-4 lg:grid-cols-5 h-full">
        <section className="flex items-center lg:col-span-2 justify-start lg:pl-8 h-full border-x-[1px] border-outline relative">
          <Link href="https://vit.ac.in" className="w-full">
            <Image
              src={images.vitLogoSm}
              alt="Vellore Institue of Technology"
              width={200}
              height={200}
              className=" grayscale h-[2rem] pl-4  w-auto lg:hidden"
            />
            <Image
              src={images.vitLogo}
              alt="Vellore Institue of Technology"
              width={200}
              height={200}
              className=" grayscale h-[2.5rem] w-auto hidden lg:block"
            />
          </Link>
          <span className="w-[6px] h-[6px] bg-outline absolute -bottom-[3px] -left-[3px]"></span>
          <span className="w-[6px] h-[6px] bg-outline absolute -bottom-[3px] -right-[3px]"></span>
        </section>

        <section className="flex items-center justify-center col-span-2 lg:col-span-1 h-full border-x-[1px] border-outline relative ">
          <Link href="/">
            <Image
              src={images.gravitasLogo}
              alt="Vellore Institue of Technology"
              width={200}
              height={200}
              className=" invert w-[80%] lg:w-[60%] mx-auto h-auto"
            />
          </Link>
          <span className="w-[6px] h-[6px] bg-outline absolute -bottom-[3px] -left-[3px]"></span>
          <span className="w-[6px] h-[6px] bg-outline absolute -bottom-[3px] -right-[3px]"></span>
        </section>

        <section className="w-full lg:flex items-center gap-4 justify-around font-auxMono text-[1rem] font-medium border-x-[1px] border-outline relative lg:col-span-2 hidden">
          <span className="w-full flex items-center gap-4 justify-around font-auxMono text-[1rem] font-medium col-span-2">
            <Link
              href={EVENT_PAGE}
              className="hover:text-primary transition-all duration-200 ease-linear hover:underline underline-offset-8"
            >
              EVENTS
            </Link>
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
              FAQs
            </Link>
          </span>

          <Button className="z-0 --event-button mr-8">
            <a href={AUTH_PAGE}>
              <span className="text-nowrap">SIGN-IN</span>
            </a>
          </Button>

          <span className="w-[6px] h-[6px] bg-outline absolute -bottom-[3px] -right-[3px]"></span>
        </section>
        <section className="w-full col-span-1 flex items-center justify-end text-3xl lg:hidden pr-4">
          <AiOutlineMenu />
        </section>
      </div>
    </div>
  );
};

export default Navbar;
