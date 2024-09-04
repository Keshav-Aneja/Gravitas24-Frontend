import React from "react";
import BorderBox from "../common/BorderBox";
import Image from "next/image";
import images from "@/constants/images";
import { merchType } from "@/constants/types/types";
import Link from "next/link";
import { cn } from "@/lib/utils";

const MerchCard = ({
  data,
  purchased,
}: {
  data: merchType;
  purchased?: boolean;
}) => {
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
          <h2 className="text-sm text-primary">{data.description}</h2>
        </div>
        <div className="font-auxMono w-full flex flex-row justify-between border-t border-primary text-[20px] bg-[#f6f7f8]">
          <div className="p-4 w-full border-r flex items-center justify-center border-primary">
            ₹ {data.price}
          </div>

          <Link
            href={`/merch/${data.id}`}
            className={cn(
              "bg-primaryLight w-full flex items-center justify-center text-black",
              purchased && "bg-[#9ebfff]"
            )}
          >
            Know More
          </Link>
        </div>
      </div>
    </BorderBox>
  );
};

export default MerchCard;
