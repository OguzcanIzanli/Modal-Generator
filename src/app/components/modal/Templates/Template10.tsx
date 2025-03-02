"use client";

import React from "react";
import ReactDOM from "react-dom/client";

// Type
import { ModalDataType } from "@/app/data/modalData";

// Hook
import { useModalHandler } from "../Hooks/useModalHandler";

// Component
import Content from "../Components/Content";
import Title from "../Components/Title";
import CloseButton from "../Components/CloseButton";
import ImageLogo from "../Components/ImageLogo";

interface TemplateProps {
  modalData: ModalDataType;
}

const Template10: React.FC<TemplateProps> = ({ modalData }) => {
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
          className={`text-center rounded-xl font-sans shadow-[0_0_12px_rgba(0,0,0,0.25)] transition-transform duration-1000 ease-out ${
            color.text
          } ${sizes} ${
            id
              ? "sticky top-10 left-1/2 scale-75 -translate-y-[12%] -translate-x-[12%]"
              : ""
          } ${!isModalGeneratorWebsite && (slide ? "" : position.slide)}`}
        >
          <div
            className={`flex flex-col items-center rounded-t-xl opacity-90 ${
              sizes === "w-[320px]" ? "p-5 pt-10" : "p-10"
            } ${color.background}`}
          >
            {/* Image  */}
            <ImageLogo image={image} tailwindClass="w-2/5 rounded-full" />

            {/* Title  */}
            <Title title={title} sizes={sizes} margin="mt-[8%]" />

            {/* Content  */}
            <Content content={content} sizes={sizes} />

            {/* Close Button  */}
            <CloseButton handleClick={handleClick} color={color.text} />
          </div>

          {/* Button */}
          <div className="flex w-full gap-4 text-lg justify-between break-words text-wrap">
            {button?.buttonAnchor && (
              <a
                href={button.buttonAnchorLink}
                id={button.buttonAnchor}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClick}
                className={`w-full py-3 rounded-b-xl transition text-center cursor-pointer ${color.background} ${color.text}`}
              >
                {button.buttonAnchor}
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Template10;

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

            // Render the React component (Template10) inside the shadow DOM
            const root = ReactDOM.createRoot(modal);
            root.render(<Template10 modalData={modalData} />);
            console.log("Template rendered");
          };
          document.body.appendChild(container); // Append the container (with shadow DOM) to the body of the document
        },
        modalData.afterSeconds ? Number(modalData.afterSeconds) * 1000 : 0
      );
    },
  };
}
