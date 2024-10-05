"use client";

import React from "react";
import ReactDOM from "react-dom/client";
import IconClose from "../../ui/icons/IconClose";
import Image from "next/image";
import { ModalDataType } from "@/app/data/modalData";
import "../../../styles/output.css";

interface TemplateProps {
  modalData: ModalDataType;
}
const Template2: React.FC<TemplateProps> = ({ modalData }) => {
  if (Number.isNaN(modalData.id)) return null;

  return (
    <div
      className={`flex rounded-xl font-sans shadow-[0_0_12px_rgba(0,0,0,0.25)] items-center justify-between flex-col bg-white aspect-[3/4] ${
        modalData.sizes
      } ${modalData.id && "sticky top-10 left-1/2"}`}
    >
      {/* Image  */}
      <Image
        src={modalData.imageUrl ? modalData?.imageUrl : ""}
        className="w-full h-1/2 rounded-t-xl mb-[6%]"
        width={0}
        height={0}
        unoptimized
        alt=""
      />

      {/* Title  */}
      <div className="text-3xl font-bold text-center mb-[6%]">
        {modalData.title}
      </div>

      {/* Content  */}
      <div className="text-xl text-center mb-[6%] px-10">
        {modalData.content1}
      </div>

      {/* Button */}
      <div className="flex w-full gap-4 text-base pb-10 px-10 flex-col break-words text-wrap">
        <button
          className={`w-full py-3 rounded-xl hover:scale-105 active:scale-95 transition ${modalData.color.background} ${modalData.color.text}`}
        >
          {modalData.button1}
        </button>
        <button className="w-full py-3 rounded-xl hover:scale-105 active:scale-95 transition border-2 border-gray-300">
          {modalData.button2}
        </button>
      </div>

      {/* Close Button  */}
      <button className="absolute text-3xl top-6 right-6 border-2 text-gray-400 border-gray-400 rounded-full hover:scale-105 active:scale-95">
        <IconClose />
      </button>
    </div>
  );
};

export default Template2;

if (typeof window !== "undefined") {
  window.MyModal = {
    init: (modalData: ModalDataType) => {
      console.log("Initializing modal...");

      const container = document.createElement("div");
      document.body.appendChild(container);
      container.className = `fixed ${modalData.position}`;
      console.log("Container created and appended.");

      const root = ReactDOM.createRoot(container);
      console.log("ReactDOM root created.");

      root.render(<Template2 modalData={modalData} />);
      console.log("Template2 rendered.");
    },
  };
  console.log("MyModal initialized and added to window object.");
}
