"use client";

import React from "react";
import IconClose from "../../ui/icons/IconClose";
import { ModalDataType } from "@/app/data/modalData";

interface Template1Props {
  modalData: ModalDataType;
}
const Template1: React.FC<Template1Props> = ({ modalData }) => {
  if (Number.isNaN(modalData.id)) return null;

  return (
    <div
      className={`relative flex rounded-xl font-sans shadow-[0_0_12px_rgba(0,0,0,0.25)] items-center flex-col py-10 px-16 w-[480px] bg-white ${modalData.sizes} sticky top-10`}
    >
      {/* Logo  */}
      <div
        className={`rounded-full w-[90px] h-[90px] mb-7 ${modalData.color.background}`}
      ></div>

      {/* Title  */}
      <div className="text-3xl font-bold mb-6">{modalData.title.content}</div>

      {/* Content  */}
      <div className="text-xl mb-10">{modalData.contents.content1}</div>

      {/* Input  */}
      <input
        type="text"
        className="py-3 px-4 w-full rounded-xl mb-8 border-2 border-gray-300"
        placeholder={modalData.inputs?.placeholder}
      />

      {/* Button */}
      <div className="flex justify-between w-full gap-4 text-base">
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
      <button className="absolute text-2xl top-6 right-6 border-2 text-gray-400 border-gray-400 rounded-full hover:scale-105 active:scale-95">
        <IconClose />
      </button>
    </div>
  );
};

export default Template1;
