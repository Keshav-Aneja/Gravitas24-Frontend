"use client";
import React, { useEffect, useState } from "react";
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
import { IoMdClose } from "react-icons/io";
import ValidateToken from "@/lib/ValidateToken";
import { useGlobalContext } from "@/context/GlobalContext";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { isLoggedin, setIsLoggedin } = useGlobalContext();
  const path = usePathname();
  const router = useRouter();

  return (
    <div
      className="w-full border-y-[1px] border-outline h-[3rem] md:h-[4rem] sticky top-0 left-0 z-[2000] bg-white/50 backdrop-blur-xl"
      id="nav"
    >
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
              className=" invert w-[70%] md:w-[60%] mx-auto h-auto"
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

          {!isLoggedin && (
            <Link href={AUTH_PAGE}>
              <Button className="z-0 --event-button mr-8">
                <span className="text-nowrap">SIGN-IN</span>
              </Button>
            </Link>
          )}
          {isLoggedin && !path.includes("profile") && (
            <Link href="/profile">
              <Button className="z-0 --event-button mr-8">
                <span className="text-nowrap">PROFILE</span>
              </Button>
            </Link>
          )}
          {isLoggedin && path.includes("profile") && (
            <Button
              className="z-0 --event-button mr-8"
              onClick={() => {
                Cookies.remove("access_token");
                Cookies.remove("refresh_token");
                setIsLoggedin(false);
                router.push("/");
              }}
            >
              <span className="text-nowrap">LOGOUT</span>
            </Button>
          )}

          <span className="w-[6px] h-[6px] bg-outline absolute -bottom-[3px] -right-[3px]"></span>
        </section>
        <section
          className="w-full col-span-1 flex items-center justify-end text-3xl lg:hidden pr-4"
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        >
          {!openMenu && <AiOutlineMenu />}
          {openMenu && <IoMdClose />}
          {openMenu && (
            <div className="w-full md:hidden flex flex-col items-start p-12 gap-8 text-xl font-auxMono h-screen bg-white fixed top-12 right-0">
              <span className="w-full flex flex-col gap-2">
                <Link
                  href={TEAM_PAGE}
                  className="hover:text-primary text-black"
                >
                  Team
                </Link>
                <div className="w-full h-[1px] bg-gray-300 relative">
                  <div className="w-2 h-2 bg-gray-300 absolute -top-1 left-0"></div>
                  <div className="w-2 h-2 bg-gray-300 absolute -top-1 right-0"></div>
                </div>
              </span>
              <span className="w-full flex flex-col gap-2">
                <Link href={FAQ_PAGE} className="hover:text-primary text-black">
                  FAQs
                </Link>
                <div className="w-full h-[1px] bg-gray-300 relative">
                  <div className="w-2 h-2 bg-gray-300 absolute -top-1 left-0"></div>
                  <div className="w-2 h-2 bg-gray-300 absolute -top-1 right-0"></div>
                </div>
              </span>{" "}
              {/* <span className="w-full flex flex-col gap-2">
                <Link
                  href={MERCH_PAGE}
                  className="hover:text-primary text-black"
                >
                  Merch
                </Link>
                <div className="w-full h-[1px] bg-gray-300 relative">
                  <div className="w-2 h-2 bg-gray-300 absolute -top-1 left-0"></div>
                  <div className="w-2 h-2 bg-gray-300 absolute -top-1 right-0"></div>
                </div>
              </span>{" "} */}
              <span className="w-full flex flex-col gap-2">
                <Link
                  href={EVENT_PAGE}
                  className="hover:text-primary text-black"
                >
                  Events
                </Link>
                <div className="w-full h-[1px] bg-gray-300 relative">
                  <div className="w-2 h-2 bg-gray-300 absolute -top-1 left-0"></div>
                  <div className="w-2 h-2 bg-gray-300 absolute -top-1 right-0"></div>
                </div>
              </span>
              {!isLoggedin && (
                <Link href={AUTH_PAGE}>
                  <Button className="z-0 --event-button-2 w-full">
                    <span className="text-nowrap text-[1rem]">SIGN-IN</span>
                  </Button>
                </Link>
              )}
              {isLoggedin && (
                <Link href="/profile">
                  <Button className="z-0 --event-button mr-8">
                    <span className="text-nowrap">PROFILE</span>
                  </Button>
                </Link>
              )}
              {isLoggedin && (
                <Button
                  className="z-0 --event-button mr-8"
                  onClick={() => {
                    Cookies.remove("access_token");
                    Cookies.remove("refresh_token");
                    setIsLoggedin(false);
                    router.push("/");
                  }}
                >
                  <span className="text-nowrap">LOGOUT</span>
                </Button>
              )}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Navbar;
