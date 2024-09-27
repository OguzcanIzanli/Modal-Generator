"use client";

import React from "react";
import { useModal } from "../../../context/ModalContext";
import IconClose from "../../ui/icons/IconClose";
import Image from "next/image";

const Template1 = () => {
  const { size, modal } = useModal();

  return (
    <>
      {modal?.id > 0 && (
        <div
          className={`relative flex rounded-xl font-sans shadow-[0_0_12px_rgba(0,0,0,0.25)] ${modal.container} ${modal.sizes[size]} sticky top-10`}
        >
          {/* Logo  */}
          <div className={modal.logo}></div>

          {/* Image  */}
          <Image
            src={modal.image.url}
            className={modal.image.style}
            width={0}
            height={0}
            sizes="100vw"
            alt=""
          />

          {/* Title  */}
          <div className={modal.title.style}>{modal.title.content}</div>

          {/* Content  */}
          <div className={modal.contents.style}>{modal.contents.content}</div>

          {/* Input  */}
          <input
            type="text"
            className={`py-3 px-4 w-full rounded-xl mb-8 border-2 border-gray-300 ${modal.inputs.style}`}
            placeholder={modal.inputs.placeholder}
          />

          {/* Button */}
          <div className={modal.buttons.style}>
            <button
              className={`w-full py-3 rounded-xl hover:scale-105 active:scale-95 transition ${modal.buttons.button1.style}`}
            >
              {modal.buttons.button1.content}
            </button>
            <button
              className={`w-full py-3 rounded-xl hover:scale-105 active:scale-95 transition ${modal.buttons.button2.style}`}
            >
              {modal.buttons.button2.content}
            </button>
          </div>

          <button className="absolute text-2xl top-6 right-6 border-2 text-gray-400 border-gray-400 rounded-full hover:scale-105 active:scale-95">
            <IconClose />
          </button>
        </div>
      )}
    </>
  );
};

export default Template1;
