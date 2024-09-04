import React from "react";
import Marquee from "react-fast-marquee";
import GalleryImageCard from "@/components/landing/galleryImageCard";
import images from "@/constants/images";
import {
  galleryTopImages,
  galleryBottomImages,
} from "@/constants/galleryImages";

const Gallery = () => {
  const imagesT = galleryTopImages;
  const imagesB = galleryBottomImages;
  return (
    <>
      <div className="py-4 pt-16">
        <section className="w-full flex flex-row overflow-x-auto items-center justify-center gap-4">
          <GalleryImageCard image={imagesT["1"]} />
          <GalleryImageCard image={imagesT["2"]} />
          <GalleryImageCard image={imagesT["3"]} />
          <GalleryImageCard image={imagesT["4"]} />
          <GalleryImageCard image={imagesT["5"]} />
          <GalleryImageCard image={imagesT["6"]} />
          <GalleryImageCard image={imagesT["7"]} />
        </section>
      </div>
      <Marquee
        autoFill
        speed={30}
        className="font-clashVar z-[20] border-y-2 border-black overflow-y-hidden"
      >
        <section className="text-7xl md:text-8xl px-4 mx-6">GALLERY</section>
        <section className="flex flex-col font-extralight h-full mx-6 justify-around px-4 text-3xl md:text-8xl">
          <p>GALLERY</p>
          <p>GALLERY</p>
        </section>
        <section className="w-24 md:w-40 h-10 md:h-20 relative flex items-center mx-6">
          <div className="w-6 h-6 border-r-black top-0 left-0 absolute border-b-black border-t-transparent border-l-transparent border-[14px]"></div>
          <p className="w-full text-right  font-thin text-2xl">2024</p>
        </section>
      </Marquee>
      <div className="pt-4">
        <section className="w-full overflow-x-auto flex flex-row items-center justify-center gap-4">
          <GalleryImageCard top={false} image={imagesB["1"]} />
          <GalleryImageCard top={false} image={imagesB["2"]} />
          <GalleryImageCard top={false} image={imagesB["3"]} />
          <GalleryImageCard top={false} image={imagesB["4"]} />
          <GalleryImageCard top={false} image={imagesB["5"]} />
          <GalleryImageCard top={false} image={imagesB["6"]} />
          <GalleryImageCard top={false} image={imagesB["7"]} />
        </section>
      </div>
    </>
  );
};

export default Gallery;
