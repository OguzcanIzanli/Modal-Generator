"use client";

import React from "react";

import IconClose from "../../ui/icons/IconClose";
import Image from "next/image";
import { ModalDataType } from "@/app/data/modalData";
interface Template1Props {
  modalData: ModalDataType;
}
const Template1: React.FC<Template1Props> = ({ modalData }) => {
  if (Number.isNaN(modalData.id)) return null;
  console.log(modalData);
  return (
    <div
      className={`relative flex rounded-xl font-sans shadow-[0_0_12px_rgba(0,0,0,0.25)] ${modalData.container} ${modalData.sizes} sticky top-10`}
    >
      {/* Logo  */}

      {modalData.logo && (
        <div
          className={`${modalData.logo} ${modalData.color.background}`}
        ></div>
      )}

      {/* Image  */}
      {modalData.images && (
        <Image
          src={modalData.images?.url || ""}
          className={modalData.images?.style}
          width={0}
          height={0}
          unoptimized
          alt=""
        />
      )}

      {/* Title  */}
      <div className={`text-3xl font-bold mb-6 ${modalData.title.style}`}>
        {modalData.title.content}
      </div>

      {/* Content  */}
      <div className={modalData.contents.style}>
        {modalData.contents.content}
      </div>

      {/* Input  */}
      {modalData.inputs && (
        <input
          type="text"
          className="py-3 px-4 w-full rounded-xl mb-8 border-2 border-gray-300"
          placeholder={modalData.inputs?.placeholder}
        />
      )}

      {/* Button */}
      <div className={modalData.buttons.style}>
        <button
          className={`w-full py-3 rounded-xl hover:scale-105 active:scale-95 transition ${modalData.buttons.button1.style}`}
        >
          {modalData.buttons.button1.content}
        </button>
        <button
          className={`w-full py-3 rounded-xl hover:scale-105 active:scale-95 transition ${modalData.buttons.button2.style} ${modalData.color.background}`}
        >
          {modalData.buttons.button2.content}
        </button>
      </div>

      <button className="absolute text-2xl top-6 right-6 border-2 text-gray-400 border-gray-400 rounded-full hover:scale-105 active:scale-95">
        <IconClose />
      </button>
    </div>
  );
};

export default Template1;
