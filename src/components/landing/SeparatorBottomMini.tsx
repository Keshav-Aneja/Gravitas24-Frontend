"use client";
import BorderBox from "../common/BorderBox";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { RiTwitterXLine } from "react-icons/ri";
import Image from "next/image";
import { svgs } from "@/constants/svgs";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SeparatorBottomMini() {
  const [ipAddress, setIPAddress] = useState("");
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    (async () => {
      const response = await axios.get("https://api.ipify.org?format=json");
      setIPAddress(response.data.ip);
    })();

    const timer = setInterval(() => {
      setDate(new Date());
    }, 60000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formattedTime = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(date);

  const formattedDate = `${formattedTime} ${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  return (
    <div className="w-full h-60 bg-base absolute bottom-0 left-0 z-[100] py-4 ">
      <section className="w-[90%] mx-auto flex items-start justify-between gap-6 h-20">
        <div className=" border-outline h-full flex items-center w-full">
          <BorderBox className="py-5  w-full">
            <span className="flex items-center justify-around text-lg text-primary">
              <a
                href="https://www.facebook.com/Gravitas.VITvellore/"
                target="_blank"
              >
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/vitgravitas" target="_blank">
                <FaInstagram />
              </a>
              <a
                href="https://whatsapp.com/channel/0029ValvXsz8KMqtVfWOym1Q"
                target="_blank"
              >
                <FaWhatsapp />
              </a>
              <a href="https://twitter.com/GraVITas_VIT" target="_blank">
                <RiTwitterXLine />
              </a>
            </span>
          </BorderBox>
        </div>
        <span className="relative w-full h-20 text-primaryLight font-auxMono text-[0.6rem] md:text-sm font-semibold flex flex-col items-center justify-center">
          <p>{ipAddress} IPV4</p>
          <p>632014 // VELLORE</p>
          <p>{formattedDate}</p>
          <div className="w-6 h-[2px] bg-primary absolute top-0 left-0"></div>
          <div className="w-[2px] h-2 bg-primary absolute top-0 left-0"></div>
          <div className="w-[2px] h-2 bg-primary absolute top-0 right-0"></div>
          <div className="w-[2px] h-2 bg-primary absolute bottom-0 left-0"></div>
          <div className="w-[2px] h-2 bg-primary absolute bottom-0 right-0"></div>
          <div className="w-6 h-[2px] bg-primary absolute top-0 right-0"></div>
          <div className="w-6 h-[2px] bg-primary absolute bottom-0 left-0"></div>
          <div className="w-6 h-[2px] bg-primary absolute bottom-0 right-0"></div>
        </span>
      </section>
    </div>
  );
}
