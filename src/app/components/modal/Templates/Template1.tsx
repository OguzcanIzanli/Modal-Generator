/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
// import ReactDOM from "react-dom/client";
// import { useModal } from "../../../context/ModalContext";
import IconClose from "../../ui/icons/IconClose";
import Image from "next/image";
import { ModalDataType } from "@/app/context/types";
interface Template1Props {
  modalData: ModalDataType;
}
const Template1: React.FC<Template1Props> = ({ modalData }) => {
  // const { modal } = useModal();
  if (Number.isNaN(modalData.id)) return null;
  // console.log(modal.id);
  // console.log(modal);
  return (
    <div
      className={`relative flex rounded-xl font-sans shadow-[0_0_12px_rgba(0,0,0,0.25)] ${modalData.container} ${modalData.sizes.medium} sticky top-10`}
    >
      {/* Logo  */}

      {modalData.logo && <div className={modalData.logo}></div>}

      {/* Image  */}
      <Image
        src={
          modalData.image?.url ||
          "http://localhost:3000/images/modal-images/modal2.png"
        } // public/images/default-image.png kullan
        className={modalData.image?.style}
        width={50}
        height={50}
        sizes="100vw"
        alt=""
      />

      {/* Title  */}
      <div className={modalData.title.style}>{modalData.title.content}</div>

      {/* Content  */}
      <div className={modalData.contents.style}>
        {modalData.contents.content}
      </div>

      {/* Input  */}
      {modalData.inputs?.placeholder != "" && (
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
          className={`w-full py-3 rounded-xl hover:scale-105 active:scale-95 transition ${modalData.buttons.button2.style}`}
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
