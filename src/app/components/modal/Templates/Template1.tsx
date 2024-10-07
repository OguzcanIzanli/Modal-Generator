"use client";

import React from "react";
import ReactDOM from "react-dom/client";
import IconClose from "../../ui/icons/IconClose";
import { ModalDataType } from "@/app/data/modalData";
import "tailwindcss/tailwind.css";
import Image from "next/image";
import useScrollModal from "../Hooks/useScrollModal";

interface TemplateProps {
  modalData: ModalDataType;
}

const Template1: React.FC<TemplateProps> = ({ modalData }) => {
  const isModalTriggered = useScrollModal({
    percentage: modalData.afterScroll,
  });

  return (
    <>
      {isModalTriggered && (
        <div
          className={`flex rounded-xl font-sans shadow-[0_0_12px_rgba(0,0,0,0.25)] items-center justify-between flex-col bg-white p-10 aspect-[1/1] ${
            modalData.sizes
          } ${modalData.id ? "sticky top-10 left-1/2" : ""}`}
        >
          {/* Logo  */}
          <div
            className={`rounded-full flex items-center justify-center w-[25%] aspect-[1/1] mb-[8%] ${modalData.color.background}`}
          >
            <Image
              src={modalData.logoUrl ? modalData?.logoUrl : ""}
              className="w-2/3"
              width={0}
              height={0}
              unoptimized
              alt=""
            />
          </div>

          {/* Title  */}
          <div className="text-3xl font-bold text-center mb-[6%] w-full break-words text-wrap">
            {modalData.title}
          </div>

          {/* Content  */}
          <div className="text-xl text-center mb-[6%] w-full break-words text-wrap">
            {modalData.content1}
          </div>

          {/* Input  */}
          <input
            type="text"
            className="py-3 px-4 text-base w-full rounded-xl mb-[6%] border-2 border-gray-300"
            placeholder={modalData.inputs?.placeholder}
          />

          {/* Button */}
          <div className="flex w-full gap-4 text-base justify-between break-words text-wrap">
            <button className="w-1/2 py-3 rounded-xl hover:scale-105 active:scale-95 transition border-2 border-gray-300">
              {modalData.button1}
            </button>
            <button
              className={`w-1/2 py-3 rounded-xl hover:scale-105 active:scale-95 transition ${modalData.color.background} ${modalData.color.text}`}
            >
              {modalData.button2}
            </button>
          </div>

          {/* Close Button  */}
          <button className="absolute text-3xl top-6 right-6 border-2 text-gray-400 border-gray-400 rounded-full hover:scale-105 active:scale-95">
            <IconClose />
          </button>
        </div>
      )}
    </>
  );
};

export default Template1;

if (typeof window !== "undefined") {
  window.MyModal = {
    init: (modalData: ModalDataType) => {
      console.log("Initializing modal...");

      setTimeout(() => {
        // const container = document.createElement("div");
        // document.body.appendChild(container);
        // container.className = `fixed ${modalData.position} ${modalData.device}`;
        // console.log("Container created and appended.");

        // const root = ReactDOM.createRoot(container);
        // console.log("ReactDOM root created.");

        // root.render(<Template1 modalData={modalData} />);
        // console.log("Template1 rendered.");
        const container = document.createElement("div");
        const shadow = container.attachShadow({ mode: "open" });
        document.body.appendChild(container);

        // Tailwind CSS dosyasını shadow DOM içine ekleyin
        const styleElement = document.createElement("style");
        styleElement.textContent = `
  @import url("https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css");
`;
        shadow.appendChild(styleElement);

        // Shadow DOM içine modalı render edin
        const modal = document.createElement("div");
        modal.className = `fixed ${modalData.position} ${modalData.device}`;
        shadow.appendChild(modal);

        const root = ReactDOM.createRoot(modal);
        root.render(<Template1 modalData={modalData} />);
      }, modalData.afterSeconds * 1000);
    },
  };
  console.log("MyModal initialized and added to window object.");
}
