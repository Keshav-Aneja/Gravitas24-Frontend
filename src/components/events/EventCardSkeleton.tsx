import React from "react";
import BorderBox from "../common/BorderBox";
import Image from "next/image";
import images from "@/constants/images";
import { svgs } from "@/constants/svgs";
import { CiCalendar, CiClock2 } from "react-icons/ci";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { GrGroup } from "react-icons/gr";
import { IoArrowForwardOutline } from "react-icons/io5";
import { cn } from "@/lib/utils";
import Skeleton from "../common/Skeleton";
const EventCardSkeleton = () => {
  return (
    <>
      <BorderBox className="md:px-6 md:py-10 p-0 w-[90%] mx-auto flex flex-col md:flex-row items-center md:justify-between gap-4 md:gap-8 group border-primary md:border-outline">
        <Skeleton>
          <Image
            className="w-80 h-60 aspect-square border-[1px] border-black"
            src={images.gravitasLogo}
            alt=""
            width={1000}
            height={1000}
          />
        </Skeleton>
        <section className="--main flex flex-col font-auxMono w-full ">
          <div className="px-3 md:px-0 flex flex-col gap-2">
            <Skeleton>
              <h1 className="text-xl md:text-3xl uppercase w-full">
                FORK THIS EVENT
              </h1>
            </Skeleton>
            <Skeleton>
              <p className="text-primary text-xs md:text-[1rem]">
                THIS IS A TAGLINE
              </p>
            </Skeleton>
            <div className="w-full md:w-[40%] h-[1px] md:h-[2px] bg-outline my-2 mb-4"></div>
            <div className="w-full flex flex-col md:flex-row items-start gap-4">
              <Skeleton>
                <p className="text-black/60 text-xs md:text-[1rem]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  numquam rem consequuntur recusandae architecto iste iure
                  voluptatum magni illo perferendis?
                </p>
              </Skeleton>
            </div>
          </div>
          <div
            className={cn(
              "w-full h-16 bg-primaryLight flex items-center justify-between mt-6 font-auxMono animate-pulse"
            )}
          ></div>
        </section>
      </BorderBox>
    </>
  );
};

export default EventCardSkeleton;
