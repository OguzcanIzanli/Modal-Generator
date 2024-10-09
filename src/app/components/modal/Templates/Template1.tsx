"use client";

import React from "react";
import ReactDOM from "react-dom/client";
import IconClose from "../../ui/icons/IconClose";
import { ModalDataType } from "@/app/data/modalData";
import Image from "next/image";
import useScrollModal from "../Hooks/useScrollModal";
import useTrafficSource from "../Hooks/useTrafficSource";

interface TemplateProps {
  modalData: ModalDataType;
}

const Template1: React.FC<TemplateProps> = ({ modalData }) => {
  const isModalTriggered = useScrollModal({
    percentage: modalData.afterScroll ? Number(modalData.afterScroll) : 0,
  });

  const isTrafficSource = useTrafficSource({
    domain: modalData.trafficSource,
  });

  return (
    <>
      {isModalTriggered && isTrafficSource && (
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
          {modalData.title && (
            <div className="text-3xl font-bold text-center mb-[6%] w-full break-words text-wrap">
              {modalData.title}
            </div>
          )}

          {/* Content  */}
          {modalData.content1 && (
            <div className="text-xl text-center mb-[6%] w-full break-words text-wrap">
              {modalData.content1}
            </div>
          )}

          {/* Input  */}
          {modalData.input1 && (
            <input
              type="text"
              className="py-3 px-4 text-base w-full rounded-xl mb-[6%] border-2 border-gray-300 text-left"
              placeholder={modalData.input1}
            />
          )}

          {/* Button */}
          {(modalData.button1 || modalData.button2) && (
            <div className="flex w-full gap-4 text-base justify-between break-words text-wrap">
              {modalData.button1 && (
                <button className="w-1/2 py-3 rounded-xl hover:scale-105 active:scale-95 transition border-2 border-gray-300">
                  {modalData.button1}
                </button>
              )}
              {modalData.button2 && (
                <button
                  className={`w-1/2 py-3 rounded-xl hover:scale-105 active:scale-95 transition ${modalData.color.background} ${modalData.color.text}`}
                >
                  {modalData.button2}
                </button>
              )}
            </div>
          )}

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
      setTimeout(
        () => {
          console.log("Initializing modal...");
          const container = document.createElement("div"); // Create a container div that will hold the modal
          const shadow = container.attachShadow({ mode: "open" }); // Attach a shadow DOM to the container for style isolation

          // Create a link element to load the external Tailwind CSS file
          const linkElem = document.createElement("link");
          linkElem.setAttribute("rel", "stylesheet"); // Set the relation to 'stylesheet'
          linkElem.setAttribute(
            "href",
            `${process.env.NEXT_PUBLIC_API_URL}/dist/tailwind.css`
          ); // Set the href to point to the Tailwind CSS file

          shadow.appendChild(linkElem); // Append the link element to the shadow DOM to load the styles

          // Once the CSS file is fully loaded, proceed with rendering the modal
          linkElem.onload = () => {
            const modal = document.createElement("div"); // Create the modal element

            modal.className = `fixed ${modalData.position} ${modalData.device}`; // Add fixed positioning and other necessary classes from modalData
            shadow.appendChild(modal); // Append the modal element to the shadow DOM

            // Render the React component (Template1) inside the shadow DOM
            const root = ReactDOM.createRoot(modal);
            root.render(<Template1 modalData={modalData} />);
            console.log("Template rendered");
          };
          document.body.appendChild(container); // Append the container (with shadow DOM) to the body of the document
        },
        modalData.afterSeconds ? Number(modalData.afterSeconds) * 1000 : 0
      );
    },
  };
  console.log("MyModal initialized and added to window object.");
}
