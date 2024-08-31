import React from "react";
import Marquee from "react-fast-marquee";
import GalleryImageCard from "@/components/landing/galleryImageCard";
import images from "@/constants/images";

const Gallery = () => {
  return (
    <>
      <Marquee
        autoFill
        speed={30}
        direction="right"
        className="z-[20] border-y-2 border-black"
      >
        <div className="flex items-center gap-12 ml-12">
          <h1 className="font-auxMono text-xl uppercase">Unleash the Genius</h1>
          <div className="w-0 h-0 border-y-8 border-y-transparent border-l-[14px] border-black"></div>
        </div>
      </Marquee>
      <div className="py-4 pt-16">
        <section className="w-full flex flex-row overflow-x-auto items-center justify-center gap-4">
          <GalleryImageCard image={images.image1} />
          <GalleryImageCard image={images.image1} />
          <GalleryImageCard image={images.image1} />
          <GalleryImageCard image={images.image1} />
          <GalleryImageCard image={images.image1} />
          <GalleryImageCard image={images.image1} />
          <GalleryImageCard image={images.image1} />
        </section>
      </div>
      <Marquee
        autoFill
        speed={30}
        className="font-clash z-[20] border-y-2 border-black"
      >
        <section className="text-[120px] px-4 mx-6">GALLERY</section>
        <section className="flex flex-col font-extralight h-full mx-6 justify-around px-4 text-8xl">
          <p>GALLERY</p>
          <p>GALLERY</p>
        </section>
        <section className="w-40 h-20 relative flex items-center mx-6">
          <div className="w-6 h-6 border-r-black top-0 left-0 absolute border-b-black border-t-transparent border-l-transparent border-[14px]"></div>
          <p className="w-full text-right  font-thin text-2xl">2024</p>
        </section>
      </Marquee>
      <div className="pt-4">
        <section className="w-full overflow-x-auto flex flex-row items-center justify-center gap-4">
          <GalleryImageCard top={false} image={images.image1} />
          <GalleryImageCard top={false} image={images.image1} />
          <GalleryImageCard top={false} image={images.image1} />
          <GalleryImageCard top={false} image={images.image1} />
          <GalleryImageCard top={false} image={images.image1} />
          <GalleryImageCard top={false} image={images.image1} />
          <GalleryImageCard top={false} image={images.image1} />
        </section>
      </div>
    </>
  );
};

export default Gallery;
