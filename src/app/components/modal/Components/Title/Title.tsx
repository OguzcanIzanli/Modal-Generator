import { ModalDataType } from "@/app/data/modalData";
import React from "react";

interface TitleProps {
  title: ModalDataType["title"];
  sizes: ModalDataType["sizes"];
  margin?: string;
}

const Title: React.FC<TitleProps> = ({ title, sizes, margin }) => {
  return (
    <>
      {title && (
        <div
          className={`font-bold w-full break-words text-wrap z-10 ${margin} ${
            sizes === "w-[320px]"
              ? "text-2xl"
              : sizes === "w-[640px]"
              ? "text-4xl"
              : "text-3xl"
          }`}
        >
          {title}
        </div>
      )}
    </>
  );
};

export default Title;
