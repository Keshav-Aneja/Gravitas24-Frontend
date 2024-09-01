import React from "react";
import BorderBox from "../common/BorderBox";
import Image from "next/image";
import { useState } from "react";
import { LuShirt } from "react-icons/lu";
import { MdOutlineCurrencyRupee } from "react-icons/md";

type Props = {
  item: {
    id: number;
    name: string;
    tagline: string;
    price: number;
    image: string;
    images: string[];
    title: string;
    caption: string;
    desc: string;
    sizes: string[];
  };
};

const DetailedMerchCard = (props: Props) => {
  const [currVis, setCurrVis] = useState<string>(props.item.images[0]);

  return (
    <BorderBox className=" py-10 w-full  flex flex-col gap-8 px-0">
      <div className="w-full flex flex-col md:flex-row items-start justify-between gap-8 px-0">
        <div className="w-full md:w-[40%] md:min-w-[27rem] relative">
          <div className="bg-primary h-5 w-[60%] --clip-shape-card-image-top absolute top-0 left-0 flex items-center justify-center gap-2">
            <span className="bg-white h-[0.6rem] aspect-square rounded-full"></span>
            <span className="bg-white h-[0.6rem] aspect-square rounded-full"></span>
            <span className="bg-white h-[0.6rem] aspect-square rounded-full"></span>
          </div>
          <Image
            className="border p-4 border-[#0c5eff] w-full"
            src={currVis}
            alt=""
            width={300}
            height={300}
          />
          <div className="flex gap-3 flex-wrap mt-4">
            {props.item.images
              ? props.item.images.map((image, index) => {
                  return (
                    <Image
                      key={index}
                      onClick={() => setCurrVis(image)}
                      className="hover:cursor-pointer hover:scale-110 transition-all h-12 md:h-16 w-auto"
                      src={image}
                      alt={`merch${index}`}
                      width={100}
                      height={100}
                    />
                  );
                })
              : null}
          </div>
        </div>
        <section className="--main flex flex-col font-auxMono w-full">
          <h1 className="text-5xl leading-none font-medium uppercase px-2">
            {props.item.title}
          </h1>
          <p className="text-primary text-2xl leading-none px-2">
            {props.item.caption}
          </p>
          <div className="w-full h-[2px] bg-outline my-2 mb-4"></div>
          <section className=" flex items-center p-2 gap-0 min-w-fit text-xl">
            <MdOutlineCurrencyRupee size={20} />
            <p>{props.item.price}/-</p>
          </section>
          <section className="flex flex-col gap-2 mt-4 p-2 text-[1rem]">
            {props.item.desc}
          </section>
          {props.item.sizes ? (
            <section className="flex gap-2 p-2">
              {props.item.sizes.map((size, index) => (
                <span
                  key={index}
                  className="text-xl border border-[#c2c2c2] p-2 px-4"
                >
                  {size}
                </span>
              ))}
            </section>
          ) : null}
        </section>
      </div>
      <div className="w-full bg-primaryLight flex items-center justify-between mt-6 font-auxMono">
        <span className="text-sm text-black flex items-center justify-center flex-grow">
          {props.item.title}
        </span>
        <span className="text-sm text-black hidden md:flex items-center gap-2 p-4 px-6 border-x-[1px] border-primary flex-grow justify-center">
          <LuShirt size={18} />
          {props.item.sizes.join(",")}
        </span>
        <span className="text-sm text-black hidden md:flex items-center gap-2 p-4 px-6 flex-grow justify-center">
          <MdOutlineCurrencyRupee size={20} />
          <p>Rs. {props.item.price}/-</p>
        </span>
        <button className="text-white bg-primary h-full flex-grow p-4 px-8">
          BUY MERCH
        </button>
      </div>
    </BorderBox>
  );
};

export default DetailedMerchCard;
