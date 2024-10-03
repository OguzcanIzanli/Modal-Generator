"use client";

import React from "react";
import ReactDOM from "react-dom/client";
import IconClose from "../../ui/Icons/IconClose";
import { ModalDataType } from "@/app/data/modalData";
import "../../../styles/output.css";

interface TemplateProps {
  modalData: ModalDataType;
}
const Template1: React.FC<TemplateProps> = ({ modalData }) => {
  return (
    <div
      className={`flex rounded-xl font-sans shadow-[0_0_12px_rgba(0,0,0,0.25)] items-center flex-col w-[480px] bg-white py-10 px-16 ${modalData.sizes} sticky top-10`}
    >
      {/* Logo  */}
      <div
        className={`rounded-full w-[90px] h-[90px] mb-7 ${modalData.color.background}`}
      ></div>

      {/* Title  */}
      <div className="text-3xl font-bold mb-6">{modalData.title}</div>

      {/* Content  */}
      <div className="text-xl mb-10">{modalData.contents.content1}</div>

      {/* Input  */}
      <input
        type="text"
        className="py-3 px-4 w-full rounded-xl mb-8 border-2 border-gray-300"
        placeholder={modalData.inputs?.placeholder}
      />

      {/* Button */}
      <div className="flex w-full gap-4 text-base justify-between">
        <button className="w-full py-3 rounded-xl hover:scale-105 active:scale-95 transition border-2 border-gray-300">
          {modalData.buttons.button1}
        </button>
        <button
          className={`w-full py-3 rounded-xl hover:scale-105 active:scale-95 transition ${modalData.color.background} ${modalData.color.text}`}
        >
          {modalData.buttons.button2}
        </button>
      </div>

      {/* Close Button  */}
      <button className="absolute text-3xl top-6 right-6 border-2 text-gray-400 border-gray-400 rounded-full hover:scale-105 active:scale-95">
        <IconClose />
      </button>
    </div>
  );
};

export default Template1;

if (typeof window !== "undefined") {
  window.MyModal = {
    init: (modalData: ModalDataType) => {
      console.log("Initializing modal...");

      const container = document.createElement("div");
      document.body.appendChild(container);
      console.log("Container created and appended.");

      const root = ReactDOM.createRoot(container);
      console.log("ReactDOM root created.");

      root.render(<Template1 modalData={modalData} />);
      console.log("Template1 rendered.");
    },
  };
  console.log("MyModal initialized and added to window object.");
}
