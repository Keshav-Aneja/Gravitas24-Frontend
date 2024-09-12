"use client";

import React from "react";
import BorderBox from "../common/BorderBox";
import Image from "next/image";
import images from "@/constants/images";
import Skeleton from "../common/Skeleton";

const DetailedMerchCard = () => {
  return (
    <BorderBox className=" py-10 w-full  flex flex-col gap-8 px-0">
      <div className="w-full flex flex-col md:flex-row items-start justify-between gap-8 px-0">
        <div className="w-full md:w-[40%] md:min-w-[27rem] relative">
          <div className="bg-primary h-5 w-[60%] --clip-shape-card-image-top absolute top-0 left-0 flex items-center justify-center gap-2">
            <span className="bg-white h-[0.6rem] aspect-square rounded-full"></span>
            <span className="bg-white h-[0.6rem] aspect-square rounded-full"></span>
            <span className="bg-white h-[0.6rem] aspect-square rounded-full"></span>
          </div>
          <Skeleton>
            <Image
              className="w-full aspect-square border-[1px] border-black"
              src={images.gravitasLogo}
              alt=""
              width={1000}
              height={1000}
            />
          </Skeleton>
          <div className="flex flex-row gap-5 mt-4">
            <Skeleton>
              <Image
                className="hover:cursor-pointer hover:scale-110 transition-all h-12 md:h-16 w-auto"
                src={images.gravitasLogo}
                alt=""
                width={100}
                height={100}
              />
            </Skeleton>
            <Skeleton>
              <Image
                className="hover:cursor-pointer hover:scale-110 transition-all h-12 md:h-16 w-auto"
                src={images.gravitasLogo}
                alt=""
                width={100}
                height={100}
              />
            </Skeleton>
            <Skeleton>
              <Image
                className="hover:cursor-pointer hover:scale-110 transition-all h-12 md:h-16 w-auto"
                src={images.gravitasLogo}
                alt=""
                width={100}
                height={100}
              />
            </Skeleton>
          </div>
        </div>
        <section className="--main flex flex-col font-auxMono w-full">
          <h1 className="text-5xl leading-none font-medium uppercase px-2">
            <Skeleton>Gravitas T-Shirt</Skeleton>
          </h1>
          <h1 className="text-primary text-2xl leading-none px-2">
            <Skeleton>ReVITalize yourself</Skeleton>
          </h1>
          <div className="w-full h-[2px] bg-outline my-2 mb-4"></div>
          <section className=" flex items-center p-2 gap-0 min-w-fit text-xl">
            <Skeleton>225/-</Skeleton>
          </section>
          <section className="flex flex-col gap-2 mt-4 p-2 text-[1rem]">
            <Skeleton>
              A cool t-shirt Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Sunt quo deserunt repellat nostrum officia recusandae
              consequatur nisi totam libero quaerat, rem aliquam dignissimos.
              Provident blanditiis nihil eligendi nesciunt quibusdam molestias.
            </Skeleton>
          </section>

          <section className="flex gap-2 p-2">
            <span className="text-xl border border-[#c2c2c2] p-2 px-4">
              <Skeleton>XXL</Skeleton>
            </span>
            <span className="text-xl border border-[#c2c2c2] p-2 px-4">
              <Skeleton>XXL</Skeleton>
            </span>
            <span className="text-xl border border-[#c2c2c2] p-2 px-4">
              <Skeleton>XXL</Skeleton>
            </span>
          </section>
        </section>
      </div>
      <Skeleton>
        {" "}
        <button
          className="text-white bg-primary h-full  p-4 w-full md:w-fit px-16"
          disabled
        >
          REGISTER
        </button>
      </Skeleton>
    </BorderBox>
  );
};
export default DetailedMerchCard;
