import Image, { StaticImageData } from "next/image";

type Props = {
  image: StaticImageData | string;
  top?: boolean;
};

export default function GalleryImageCard({ image, top = true }: Props) {
  return (
    <div
      className={`w-[120px] md:w-[200px] min-h-[145px] md:h-[246px] bg-black p-[1px] relative ${
        top ? "galleryImageTop" : "galleryImageBottom"
      }`}
    >
      <div className="galleryImageTop">
        <Image
          src={image}
          alt="Gallery Image"
          height={200}
          width={200}
          className="h-full w-full object-cover bg-clip-content"
        />
      </div>
      {top ? (
        <div className="absolute w-4 h-4 bottom-2 left-2 md:bottom-4 md:left-4 border-l-transparent border-b-transparent border-[12px]"></div>
      ) : (
        <div className="absolute w-4 h-4 top-2 md:top-4 right-2 md:right-4 border-r-transparent border-t-transparent border-[12px]"></div>
      )}
    </div>
  );
}
