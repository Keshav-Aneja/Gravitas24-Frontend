import React from "react";
import BorderBox from "../common/BorderBox";
import Image from "next/image";
import images from "@/constants/images";
import { merchType } from "@/constants/types/types";
import Link from "next/link";

const MerchCard = ({ data }: { data: merchType }) => {
  return (
    <BorderBox
      classNameSquares="bg-primary"
      className="p-0 w-full flex flex-col bg-white items-center border-primary"
    >
      <Image src={images.sample} width={300} height={300} alt="" />
      {/* <Image src={data.images[0]} alt={data.type} width={300} height={300} /> */}
      <div className="h-full flex flex-col justify-between bg-[#f6f7f8]">
        <div className="p-4 font-auxMono w-full items-start border-t border-primary bg-[#f6f7f8]">
          <h1 className="text-3xl">{data.type}</h1>
          <h2 className="text-[20px] text-primary">{data.description}</h2>
        </div>
        <div className="font-auxMono w-full flex flex-row justify-between border-t border-primary text-[20px] bg-[#f6f7f8]">
          <div className="p-4 w-full border-r flex items-center justify-center border-primary">
            ₹ Rs. {data.price}
          </div>

          <Link
            href={`/merch/${data.id}`}
            className="bg-primaryLight w-full flex items-center justify-center text-black"
          >
            Know More
          </Link>
        </div>
      </div>
    </BorderBox>
  );
};

export default MerchCard;
