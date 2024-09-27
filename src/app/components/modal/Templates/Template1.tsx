"use client";

import React from "react";
import ReactDOM from "react-dom/client";
import { useModal } from "../../../context/ModalContext";
import IconClose from "../../ui/icons/IconClose";
import Image from "next/image";

const Template1 = () => {
  const { modal } = useModal();

  if (modal.id === 0) return null;

  return (
    <div
      className={`relative flex rounded-xl font-sans shadow-[0_0_12px_rgba(0,0,0,0.25)] ${modal.container} ${modal.sizes.medium} sticky top-10`}
    >
      {/* Logo  */}

      {modal.logo && <div className={modal.logo}></div>}

      {/* Image  */}
      {modal.image && (
        <Image
          src={modal.image.url}
          className={modal.image.style}
          width={0}
          height={0}
          sizes="100vw"
          alt=""
        />
      )}

      {/* Title  */}
      <div className={modal.title.style}>{modal.title.content}</div>

      {/* Content  */}
      <div className={modal.contents.style}>{modal.contents.content}</div>

      {/* Input  */}
      {modal.inputs && (
        <input
          type="text"
          className="py-3 px-4 w-full rounded-xl mb-8 border-2 border-gray-300"
          placeholder={modal.inputs.placeholder}
        />
      )}

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
  );
};

export default Template1;

// MyModal objesi ile global window üzerine aktarıyoruz.
window.MyModal = {
  init: () => {
    console.log("Initializing modal...");

    const container = document.createElement("div");
    document.body.appendChild(container);
    console.log("Container created and appended.");

    const root = ReactDOM.createRoot(container);
    console.log("ReactDOM root created.");

    root.render(<Template1 />);
    console.log("Template1 rendered.");
  },
};
