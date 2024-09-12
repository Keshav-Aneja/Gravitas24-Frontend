"use client";

import React, { useEffect } from "react";
import BorderBox from "../common/BorderBox";
import Image from "next/image";
import { useState } from "react";
import { LuShirt } from "react-icons/lu";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { merchType } from "@/constants/types/types";
import Cookie from "js-cookie";
import axiosInstance from "@/config/axios";
import { CreateTransactionResponse } from "@/constants/types/transaction";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const DetailedMerchCard = ({
  item,
  sizeOptions,
}: {
  item: merchType;
  sizeOptions?: any;
}) => {
  const [currVis, setCurrVis] = useState<string>(item.images[0]);
  const router = useRouter();
  const [selectedSize, setSelectedSize] = useState();
  useEffect(() => {
    if (sizeOptions) {
      setSelectedSize(sizeOptions[0].id);
    }
  }, []);
  // const handleMerchPayment = async (merchID: string) => {
  //   // console.log("Buying merch");
  //   const payload = {
  //     merch_id: merchID,
  //   };
  //   try {
  //     const response = await axiosInstance.post(
  //       "/registration/start-merch",
  //       payload
  //     );
  //     const data = response.data as CreateTransactionResponse;
  //     const transactionFormData = data.data;
  //     const form = document.createElement("form");
  //     form.method = "POST";
  //     form.action = "https://events.vit.ac.in/events/GRV24/cnfpay";
  //     form.target = "_blank";
  //     for (const [key, value] of Object.entries(transactionFormData)) {
  //       const input = document.createElement("input");
  //       input.type = "hidden";
  //       input.name = key;
  //       input.value = value as string;
  //       form.appendChild(input);
  //     }
  //     document.body.appendChild(form);
  //     form.submit();
  //   } catch (err: any) {
  //     if (err.response) {
  //       toast({
  //         title: "Error",
  //         description: err.response.data.message,
  //       });
  //     }
  //     console.log("An error occurred. Kindly contact the admin.");
  //   }
  // };
  const handleMerchPayment = async (merchID: string) => {
    const token = Cookie.get("access_token");
    // console.log(token);
    if (!selectedSize || !merchID) {
      return;
    }
    const payload = {
      merch_id: merchID,
      merch_size_id: selectedSize,
    };
    try {
      // const response = await postHandler("/registration/start", payload);
      const response = await axiosInstance.post(
        "/registration/start-merch",
        payload
      );
      const data = response.data as CreateTransactionResponse;
      const status = data.success;
      if (!status) {
        toast({
          title: "Error",
          description: data.message,
          variant: "destructive",
        });
        return;
      }
      if (data.redirect && data.redirect === true && data.link) {
        router.push(data.link);
        return;
      }
      if (data.data != null) {
        const transactionFormData = data.data;
        const form = document.createElement("form");
        form.method = "POST";
        form.action = "https://events.vit.ac.in/events/GRV24/cnfpay";
        form.target = "_blank";
        for (const [key, value] of Object.entries(transactionFormData)) {
          const input = document.createElement("input");
          input.type = "hidden";
          input.name = key;
          input.value = value as string;
          form.appendChild(input);
        }
        document.body.appendChild(form);
        form.submit();
      } else {
        toast({
          title: "Success",
          description: data.message,
        });
      }
    } catch (err: any) {
      if (err.response) {
        // The request was made and the server responded with a status code that falls out of the range of 2xx
        const errorMessage =
          err.response.data.message ||
          "An error occurred. Kindly contact tech.gravitas@vit.ac.in.";

        toast({
          title: "Error",
          description: errorMessage, // Use the error message from the response
          variant: "destructive",
        });

        console.log(err.response.data, "Full error response");
      } else if (err.request) {
        // The request was made but no response was received
        console.log(err.request, "No response received from the server.");

        toast({
          title: "Error",
          description: "No response from the server. Please try again later.",
          variant: "destructive",
        });
      } else {
        // Something happened in setting up the request that triggered an error
        toast({
          title: "Error",
          description:
            err.message || "Kindly contact at tech.gravitas@vit.ac.in.",
          variant: "destructive",
        });
        console.log(err.message, "Request setup error");
      }
      console.log(
        err,
        "An error occured. Kindly contact at tech.gravitas@vit.ac.in."
      );
    }
  };
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
            {item.images
              ? item.images.map((image, index) => {
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
            {item.name}
          </h1>
          <p className="text-primary text-2xl leading-none px-2">
            {item.tagline}
          </p>
          <div className="w-full h-[2px] bg-outline my-2 mb-4"></div>
          <section className=" flex items-center p-2 gap-0 min-w-fit text-xl">
            <MdOutlineCurrencyRupee size={20} />
            <p>{item.price}/-</p>
          </section>
          <section className="flex flex-col gap-2 mt-4 p-2 text-[1rem]">
            {item.description}
          </section>
          {sizeOptions ? (
            <section className="flex gap-2 p-2">
              {sizeOptions.map((sizeOpt: any, index: number) => (
                <span
                  key={index}
                  className={cn(
                    "text-xl border border-[#c2c2c2] p-2 px-4 cursor-pointer flex flex-col items-center ",
                    sizeOpt.id === selectedSize && "bg-primary text-white"
                  )}
                  onClick={() => {
                    setSelectedSize(sizeOpt.id);
                  }}
                >
                  <p className="text-2xl">{sizeOpt.size}</p>
                  <p className="text-xs">{sizeOpt.total_available} Left</p>
                </span>
              ))}
            </section>
          ) : (
            ""
          )}
        </section>
      </div>
      <div className="w-full bg-primaryLight flex items-center justify-between mt-6 font-auxMono">
        <span className="text-sm text-black flex items-center justify-center flex-grow">
          {item.name}
        </span>
        {/* <span className="text-sm text-black hidden md:flex items-center gap-2 p-4 px-6 border-x-[1px] border-primary flex-grow justify-center">
          <LuShirt size={18} />
          {item.sizes.join(",")}
        </span> */}
        <span className="text-sm text-black hidden md:flex items-center gap-2 p-4 px-6 flex-grow justify-center">
          <MdOutlineCurrencyRupee size={20} />
          <p>Rs. {item.price}/-</p>
        </span>
        <button
          className="text-white bg-primary h-full flex-grow p-4 px-8"
          onClick={() => handleMerchPayment(item.id)}
        >
          BUY MERCH
        </button>
      </div>
    </BorderBox>
  );
};

export default DetailedMerchCard;
