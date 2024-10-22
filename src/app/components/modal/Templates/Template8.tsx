"use client";

import React from "react";
import ReactDOM from "react-dom/client";

// Type
import { ModalDataType } from "@/app/data/modalData";

// Hook
import { useModalHandler } from "../Hooks/useModalHandler";

// Components
import Title from "../Components/Title";
import CloseButton from "../Components/CloseButton";
import Button from "../Components/Button";
import ImageLogo from "../Components/ImageLogo";

interface TemplateProps {
  modalData: ModalDataType;
}

const Template8: React.FC<TemplateProps> = ({ modalData }) => {
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
          className={`flex flex-col items-center justify-between rounded-xl font-sans shadow-[0_0_12px_rgba(0,0,0,0.25)] bg-white text-black transition-transform duration-1000 ease-out ${
            color.background
          } ${sizes} ${sizes === "w-[320px]" ? "p-5 pt-10" : "p-10"} ${
            id
              ? "sticky top-10 left-1/2 scale-75 -translate-y-[12%] -translate-x-[12%]"
              : ""
          } ${!isModalGeneratorWebsite && (slide ? "" : position.slide)}`}
        >
          <div className="flex justify-start w-full items-center">
            {/* Logo  */}
            {image?.imageUrl && (
              <div
                className={`flex items-center justify-center rounded-full w-[80px] aspect-[1/1] mr-2 ${color.background} ${color.borderColor}`}
              >
                <ImageLogo image={image} tailwindClass="w-2/3" />
              </div>
            )}
            {content?.content1 && (
              <div
                className={`text-2xl font-bold w-full break-words text-wrap ${color.textBg}`}
              >
                {content.content1}
              </div>
            )}
          </div>

          {/* Title  */}
          <Title title={title} sizes={sizes} margin="mt-[8%]" />

          {/* Content  */}
          {content?.content2 && (
            <div className="text-xl text-left w-full break-words text-wrap mt-[6%]">
              {content.content2}
            </div>
          )}

          {/* Button */}
          <Button
            button={button}
            handleClick={handleClick}
            color={color}
            sizes={sizes}
            flexDirection="flex-row-reverse"
          />

          {/* Close Button  */}
          <CloseButton handleClick={handleClick} />
        </div>
      )}
    </>
  );
};

export default Template8;

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

            // Render the React component (Template8) inside the shadow DOM
            const root = ReactDOM.createRoot(modal);
            root.render(<Template8 modalData={modalData} />);
            console.log("Template rendered");
          };
          document.body.appendChild(container); // Append the container (with shadow DOM) to the body of the document
        },
        modalData.afterSeconds ? Number(modalData.afterSeconds) * 1000 : 0
      );
    },
  };
}
