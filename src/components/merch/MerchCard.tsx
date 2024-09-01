import React from "react";
import BorderBox from "../common/BorderBox";
import Image from "next/image";
import images from "@/constants/images";

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

const MerchCard = (props: Props) => {
  return (
    <BorderBox
      classNameSquares="bg-primary"
      className="p-0 w-[400px] max-w-full flex flex-col bg-white items-center border-primary"
    >
      <Image
        src={props.item.image}
        alt={props.item.name}
        width={300}
        height={300}
      />
      <div className="p-4 font-auxMono w-full items-start border-t border-primary bg-[#f6f7f8]">
        <h1 className="text-3xl">{props.item.name}</h1>
        <h2 className="text-[20px] text-primary">{props.item.tagline}</h2>
      </div>
      <div className="font-auxMono w-full flex flex-row justify-between border-t border-primary text-[20px] bg-[#f6f7f8]">
        <div className="p-4 w-full border-r flex items-center justify-center border-primary">
          ₹ Rs. {props.item.price}
        </div>

        <a href={`/merch/${props.item.id}`} className="bg-primaryLight w-full flex items-center justify-center text-black">Know More</a>
      </div>
    </BorderBox>
  );
};

export default MerchCard;
