"use client";

import React from "react";
import ReactDOM from "react-dom/client";

// Type
import { ModalDataType } from "@/app/data/modalData";

// Hook
import { useModalHandler } from "../Hooks/useModalHandler";

// Component
import Title from "../Components/Title";
import CloseButton from "../Components/CloseButton";
import Input from "../Components/Input";
import Button from "../Components/Button";
import ImageLogo from "../Components/ImageLogo";

interface TemplateProps {
  modalData: ModalDataType;
}

const Template20: React.FC<TemplateProps> = ({ modalData }) => {
  const {
    id,
    title,
    image,
    content,
    button,
    input,
    radio,
    sizes,
    position,
    color,
    afterSeconds,
    afterScroll,
    trafficSource,
    webhookUrl,
  } = modalData;

  const {
    isModalVisible,
    slide,
    value,
    isModalGeneratorWebsite,
    handleInputChange,
    handleRadioClick,
    handleClick,
  } = useModalHandler({
    afterScroll: Number(afterScroll),
    trafficSource,
    afterSeconds: Number(afterSeconds),
    inputEmail: !!input?.email,
    radioSelection: !!radio,
    webhookUrl,
  });
  return (
    <>
      {isModalVisible && (
        <div
          className={`flex text-center relative flex-col items-center justify-between rounded-xl font-sans shadow-[0_0_12px_rgba(0,0,0,0.25)] bg-white text-black transition-transform duration-1000 ease-out ${sizes} ${
            sizes === "w-[320px]" ? "py-5 px-6" : "py-10 px-12"
          } ${
            id
              ? "sticky top-10 left-1/2 scale-75 -translate-y-[12%] -translate-x-[12%]"
              : ""
          } ${!isModalGeneratorWebsite && (slide ? "" : position.slide)}`}
        >
          {/* Image  */}
          <ImageLogo
            image={image}
            color={color}
            tailwindClass="w-full h-full absolute top-0"
          />

          {/* Title  */}
          <Title title={title} sizes={sizes} margin="mt-[8%]" />

          {/* Content  */}
          {content?.content1 && (
            <div
              className={`text-xl font-bold text-center w-full break-words text-wrap mt-[6%] rounded-full py-2 border-4 z-10 ${color.borderColor}`}
            >
              {content.content1}
            </div>
          )}
          {content?.content2 && (
            <div className="text-xl text-center w-[80%] break-words text-wrap mt-[6%] z-10">
              {content.content2}
            </div>
          )}

          {/* Input  */}
          <Input
            input={input}
            value={value}
            handleInputChange={handleInputChange}
          />

          {/* Radio */}
          <div className="flex gap-8 text-gray-400 z-10">
            {radio?.label1 && (
              <div className="flex gap-2 mt-6">
                <input
                  type="radio"
                  id={radio.label1}
                  value={radio.label1}
                  onClick={handleRadioClick}
                  className="relative appearance-none shrink-0 mt-1 w-5 h-5 border-2 border-gray-400 rounded-full cursor-pointer"
                />
                {value.radioSelection === radio.label1 && (
                  <div
                    className={`absolute mt-1 w-5 h-5 rounded-full border-[7px] ${color.borderColor}`}
                  />
                )}
                <label
                  className="flex flex-col cursor-pointer"
                  htmlFor={radio.label1}
                >
                  <span className="text-lg break-words text-wrap">
                    {radio.label1}
                  </span>
                </label>
              </div>
            )}

            {radio?.label2 && (
              <div className="flex gap-2 mt-6">
                <input
                  type="radio"
                  id={radio.label2}
                  value={radio.label2}
                  onClick={handleRadioClick}
                  className="relative appearance-none shrink-0 mt-1 w-5 h-5 border-2 border-gray-400 rounded-full cursor-pointer"
                />
                {value.radioSelection === radio.label2 && (
                  <div
                    className={`absolute mt-1 w-5 h-5 rounded-full border-[7px] ${color.borderColor}`}
                  />
                )}
                <label
                  className="flex flex-col cursor-pointer"
                  htmlFor={radio.label2}
                >
                  <span className="text-lg break-words text-wrap">
                    {radio.label2}
                  </span>
                </label>
              </div>
            )}
          </div>

          {/* Button */}
          <Button
            button={button}
            handleClick={handleClick}
            color={color}
            sizes={sizes}
          />

          {/* Close Button  */}
          <CloseButton handleClick={handleClick} />
        </div>
      )}
    </>
  );
};

export default Template20;

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

            // Render the React component (Template20) inside the shadow DOM
            const root = ReactDOM.createRoot(modal);
            root.render(<Template20 modalData={modalData} />);
            console.log("Template rendered");
          };
          document.body.appendChild(container); // Append the container (with shadow DOM) to the body of the document
        },
        modalData.afterSeconds ? Number(modalData.afterSeconds) * 1000 : 0
      );
    },
  };
}
