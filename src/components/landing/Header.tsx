import React from "react";
import Marquee from "react-fast-marquee";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <>
      <Marquee autoFill speed={30} className="z-[20]">
        <div className="flex items-center gap-12 ml-12">
          <h1 className="font-auxMono text-sm uppercase">
            reVITalize yourself!
          </h1>
          <div className="w-1 h-1 bg-black rounded-full"></div>
        </div>
      </Marquee>
      <Navbar />
    </>
  );
};

export default Header;
