import { ModalDataType } from "@/app/data/modalData";
import React from "react";

interface ContentProps {
  content: ModalDataType["content"];
  sizes: ModalDataType["sizes"];
}

const Content: React.FC<ContentProps> = ({ content, sizes }) => {
  return (
    <>
      {content?.content1 && (
        <div
          className={`w-full break-words text-wrap mt-[6%] z-10 ${
            sizes === "w-[320px]"
              ? "text-base"
              : sizes === "w-[640px]"
              ? "text-2xl"
              : "text-xl"
          }`}
        >
          {content.content1}
        </div>
      )}

      {content?.content2 && (
        <div
          className={`w-full text-left rounded-xl py-3 px-4 mt-[6%] border-2 border-gray-400 break-words text-wrap z-10 ${
            sizes === "w-[320px]"
              ? "text-sm"
              : sizes === "w-[640px]"
              ? "text-lg"
              : "text-base"
          }`}
        >
          {content.content2}
        </div>
      )}

      {content?.content3 && (
        <div
          className={`w-[80%] text-gray-400 break-words text-wrap mt-[6%] z-10 ${
            sizes === "w-[320px]"
              ? "text-sm"
              : sizes === "w-[640px]"
              ? "text-lg"
              : "text-base"
          }`}
        >
          {content.content3}
        </div>
      )}
    </>
  );
};

export default Content;
