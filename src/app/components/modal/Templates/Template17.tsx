"use client";

import React from "react";
import ReactDOM from "react-dom/client";
import Image from "next/image";

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

const Template17: React.FC<TemplateProps> = ({ modalData }) => {
  const {
    id,
    title,
    image,
    content,
    feedback,
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
          className={`flex text-center flex-col items-center justify-between rounded-xl font-sans relative shadow-[0_0_12px_rgba(0,0,0,0.25)] mt-20 bg-white text-black transition-transform duration-1000 ease-out ${
            color.text
          } ${sizes} ${
            id
              ? "sticky top-20 left-1/2 scale-75 -translate-y-[12%] -translate-x-[12%]"
              : ""
          } ${!isModalGeneratorWebsite && (slide ? "" : position.slide)}`}
        >
          {/* Image */}
          {image?.imageUrl && (
            <div
              className={`flex items-center w-[30%] aspect-square justify-center rounded-full absolute top-0 -translate-y-[50%] z-10 ${color.background} ${color.borderColor}`}
            >
              <ImageLogo image={image} tailwindClass="w-2/3" />
            </div>
          )}

          <div className="absolute z-10 text-black top-10 w-full px-10">
            {/* Title  */}
            <Title title={title} sizes={sizes} margin="mt-[16%]" />

            {/* Content  */}
            <Content content={content} sizes={sizes} />
          </div>

          <div
            className={`flex flex-col items-center justify-between w-full font-sans relative rounded-t-xl py-14 opacity-20 ${
              sizes === "w-[320px]" ? "px-5" : "px-10"
            } ${color.background}`}
          >
            {/* Title  */}
            {title && <div className="mt-[16%] opacity-0">{title}</div>}

            {/* Content  */}
            {content?.content1 && (
              <div className="mt-[6%] opacity-0">{content.content1}</div>
            )}
          </div>

          {/* Feedback  */}
          <div
            className={`flex w-full justify-between text-black ${
              sizes === "w-[320px]" ? "p-4" : "p-8"
            }`}
          >
            {feedback?.feedbackURL1 && (
              <button
                className={`rounded-full flex flex-col gap-2 items-center justify-center transition hover:scale-125 hover:font-bold active:scale-110`}
                onClick={handleClick}
                id={feedback.feedbackURL1Label}
              >
                <Image
                  src={feedback.feedbackURL1 ? feedback?.feedbackURL1 : ""}
                  width={50}
                  height={50}
                  unoptimized
                  alt=""
                />
                {feedback.feedbackURL1Label}
              </button>
            )}

            {feedback?.feedbackURL2 && (
              <button
                className={`rounded-full flex flex-col gap-2 items-center justify-center transition hover:scale-125 hover:font-bold active:scale-110`}
                onClick={handleClick}
                id={feedback.feedbackURL2Label}
              >
                <Image
                  src={feedback.feedbackURL2 ? feedback?.feedbackURL2 : ""}
                  width={50}
                  height={50}
                  unoptimized
                  alt=""
                />
                {feedback.feedbackURL2Label}
              </button>
            )}

            {feedback?.feedbackURL3 && (
              <button
                className={`rounded-full flex flex-col gap-2 items-center justify-center transition hover:scale-125 hover:font-bold active:scale-110`}
                onClick={handleClick}
                id={feedback.feedbackURL3Label}
              >
                <Image
                  src={feedback.feedbackURL3 ? feedback?.feedbackURL3 : ""}
                  width={50}
                  height={50}
                  unoptimized
                  alt=""
                />
                {feedback.feedbackURL3Label}
              </button>
            )}

            {feedback?.feedbackURL4 && (
              <button
                className={`rounded-full flex flex-col gap-2 items-center justify-center transition hover:scale-125 hover:font-bold active:scale-110`}
                onClick={handleClick}
                id={feedback.feedbackURL4Label}
              >
                <Image
                  src={feedback.feedbackURL4 ? feedback?.feedbackURL4 : ""}
                  width={50}
                  height={50}
                  unoptimized
                  alt=""
                />
                {feedback.feedbackURL4Label}
              </button>
            )}

            {feedback?.feedbackURL5 && (
              <button
                className={`rounded-full flex flex-col gap-2 items-center justify-center transition hover:scale-125 hover:font-bold active:scale-110`}
                onClick={handleClick}
                id={feedback.feedbackURL5Label}
              >
                <Image
                  src={feedback.feedbackURL5 ? feedback?.feedbackURL5 : ""}
                  width={50}
                  height={50}
                  unoptimized
                  alt=""
                />
                {feedback.feedbackURL5Label}
              </button>
            )}
          </div>

          {/* Close Button  */}
          <CloseButton handleClick={handleClick} />
        </div>
      )}
    </>
  );
};

export default Template17;

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

            // Render the React component (Template17) inside the shadow DOM
            const root = ReactDOM.createRoot(modal);
            root.render(<Template17 modalData={modalData} />);
            console.log("Template rendered");
          };
          document.body.appendChild(container); // Append the container (with shadow DOM) to the body of the document
        },
        modalData.afterSeconds ? Number(modalData.afterSeconds) * 1000 : 0
      );
    },
  };
}
