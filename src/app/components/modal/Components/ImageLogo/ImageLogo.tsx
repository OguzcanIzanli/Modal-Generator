import React from "react";
import Image from "next/image";
import { ModalDataType } from "@/app/data/modalData";

interface ImageLogoProps {
  image: ModalDataType["image"];
  color?: ModalDataType["color"];
  tailwindClass?: string;
}

const ImageLogo: React.FC<ImageLogoProps> = ({
  image,
  color,
  tailwindClass,
}) => {
  return (
    <>
      {image?.logoUrl && (
        <div
          className={`flex items-center justify-center rounded-full w-[30%] aspect-[1/1] ${color?.background} ${color?.borderColor}`}
        >
          <Image
            src={image.logoUrl}
            width={0}
            height={0}
            unoptimized
            alt="logo"
            className="w-2/3"
          />
        </div>
      )}

      {image?.imageUrl && (
        <Image
          src={image.imageUrl}
          className={tailwindClass}
          width={0}
          height={0}
          unoptimized
          alt="image"
        />
      )}
    </>
  );
};

export default ImageLogo;
