"use client";

import React from "react";
import ReactDOM from "react-dom/client";
import Image from "next/image";

// Type
import { ModalDataType } from "@/app/data/modalData";

// Hook
import { useModalHandler } from "../Hooks/useModalHandler";
import Title from "../Components/Title";
import CloseButton from "../Components/CloseButton";

interface TemplateProps {
  modalData: ModalDataType;
}

const Template11: React.FC<TemplateProps> = ({ modalData }) => {
  const {
    id,
    title,
    image,
    content,
    button,
    sizes,
    position,
    color,
    afterSeconds,
    afterScroll,
    trafficSource,
    webhookUrl,
  } = modalData;

  const { isModalVisible, slide, isModalGeneratorWebsite, handleClick } =
    useModalHandler({
      afterScroll: Number(afterScroll),
      trafficSource,
      afterSeconds: Number(afterSeconds),
      webhookUrl,
    });

  return (
    <>
      {isModalVisible && (
        <div
          className={`flex rounded-xl font-sans shadow-[0_0_12px_rgba(0,0,0,0.25)] items-start transition-transform duration-1000 ease-out ${
            color.background
          } ${color.text}
           ${sizes} ${sizes === "w-[320px]" ? "p-5 pt-10" : "p-10"} ${
            id
              ? "sticky top-10 left-1/2 scale-75 -translate-y-[12%] -translate-x-[12%]"
              : ""
          } ${!isModalGeneratorWebsite && (slide ? "" : position.slide)}`}
        >
          {/* Logo  */}
          {image?.logoUrl && (
            <div className={`rounded-full w-1/5 mr-[6%]`}>
              <Image
                src={image.logoUrl}
                className="w-full"
                width={0}
                height={0}
                unoptimized
                alt=""
              />
            </div>
          )}

          <div className="w-4/5">
            {/* Title  */}
            <Title title={title} sizes={sizes} />

            {/* Content  */}
            {content?.content1 && (
              <div
                className={`${
                  sizes === "w-[320px]" ? "text-sm mb-[6%]" : "text-xl mb-[10%]"
                } w-full break-words text-wrap text-gray-400`}
              >
                {content.content1}
              </div>
            )}

            {content?.content2 && (
              <div
                className={`${
                  sizes === "w-[320px]" ? "text-xs" : "text-lg"
                } w-full mb-[6%] break-words text-wrap`}
              >
                {content.content2}
              </div>
            )}

            {button?.button2 && (
              <div
                className={`${
                  sizes === "w-[320px]" ? "text-xs" : "text-sm"
                } w-full break-words text-wrap text-gray-400`}
              >
                {button.button2}
              </div>
            )}
          </div>

          {/* Close Button  */}
          <CloseButton handleClick={handleClick} />
        </div>
      )}
    </>
  );
};

export default Template11;

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
          linkElem.rel = "stylesheet"; // Set the relation to 'stylesheet'
          // linkElem.href = "http://localhost:3000/dist/tailwind.css"; // Set the href to point to the Tailwind CSS file
          linkElem.href =
            "https://modal-generator.netlify.app/dist/tailwind.css";
          shadow.appendChild(linkElem); // Append the link element to the shadow DOM to load the styles

          // Once the CSS file is fully loaded, proceed with rendering the modal
          linkElem.onload = () => {
            const modal = document.createElement("div"); // Create the modal element
            modal.className = `fixed z-50 ${modalData.position.position} ${modalData.device}`; // Add fixed positioning and other necessary classes from modalData
            shadow.appendChild(modal); // Append the modal element to the shadow DOM

            // Render the React component (Template11) inside the shadow DOM
            const root = ReactDOM.createRoot(modal);
            root.render(<Template11 modalData={modalData} />);
            console.log("Template rendered");
          };
          document.body.appendChild(container); // Append the container (with shadow DOM) to the body of the document
        },
        modalData.afterSeconds ? Number(modalData.afterSeconds) * 1000 : 0
      );
    },
  };
}
