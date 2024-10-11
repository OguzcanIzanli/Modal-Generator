"use client";

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Image from "next/image";

// Icon
import IconClose from "../../ui/icons/IconClose";

// Type
import { ModalDataType } from "@/app/data/modalData";

// Hook
import useScrollModal from "../Hooks/useScrollModal";
import useTrafficSource from "../Hooks/useTrafficSource";
import { useWebhook } from "../Hooks/useWebhook";

interface TemplateProps {
  modalData: ModalDataType;
}

const Template4: React.FC<TemplateProps> = ({ modalData }) => {
  const isModalGeneratorWebsite =
    process.env.NEXT_PUBLIC_API_URL?.includes("modal-generator");

  const [isModalOpen, setIsModalOpen] = useState(true);

  // Scroll
  const isModalTriggered = useScrollModal({
    percentage: Number(modalData.afterScroll),
  });

  // Traffic source
  const isTrafficSource = useTrafficSource({
    domain: modalData.trafficSource,
  });

  // Slide Animation
  const [slide, setSlide] = useState(false);

  useEffect(() => {
    if (
      !isModalGeneratorWebsite &&
      isModalTriggered &&
      isTrafficSource &&
      isModalOpen
    ) {
      const timer = setTimeout(() => {
        setSlide(true);
      }, Number(modalData.afterSeconds + 500));

      return () => clearTimeout(timer);
    }
  }, [
    isModalTriggered,
    isTrafficSource,
    isModalOpen,
    isModalGeneratorWebsite,
    modalData.afterSeconds,
  ]);

  // Webhook - VARIABLE
  const webhookData = {
    userClick: "",
  };

  const { sendWebhookData } = useWebhook();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const { id } = e.currentTarget;
    if (!isModalGeneratorWebsite) {
      webhookData.userClick = id; // VARIABLE
      const webhookUrl = modalData.webhookUrl;
      sendWebhookData(webhookData, webhookUrl);
      setIsModalOpen(false);
    }
  };

  return (
    <>
      {isModalTriggered && isTrafficSource && isModalOpen && (
        <div
          className={`flex rounded-xl text-black font-sans shadow-[0_0_12px_rgba(0,0,0,0.25)] items-center justify-between flex-col bg-white p-10 transition-transform duration-1000 ease-out  ${
            modalData.sizes
          } ${
            modalData.id
              ? "sticky top-10 left-1/2 scale-75 -translate-y-[12%] -translate-x-[12%]"
              : ""
          } ${
            !isModalGeneratorWebsite && (slide ? "" : modalData.position.slide)
          }`}
        >
          {/* Logo  */}
          <div
            className={`rounded-full flex items-center justify-center w-[25%] aspect-[1/1] mb-[8%] ${modalData.color.background} ${modalData.color.borderColor}`}
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

          {/* Content 2  */}
          {modalData.content2 && (
            <div className="text-base w-[80%] text-center mb-[6%] break-words text-wrap text-gray-400">
              {modalData.content2}
            </div>
          )}

          {/* Button */}
          <div className="flex flex-col w-full gap-4 text-base justify-between break-words text-wrap">
            {modalData.buttonAnchor && (
              <a
                href={modalData.buttonAnchorLink}
                id={modalData.buttonAnchor}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClick}
                className={`w-full py-3 rounded-xl hover:scale-105 active:scale-95 transition text-center ${modalData.color.background} ${modalData.color.borderColor} ${modalData.color.text}`}
              >
                {modalData.buttonAnchor}
              </a>
            )}
            {modalData.button2 && (
              <button
                id={modalData.button2}
                onClick={handleClick}
                className="w-full py-3 rounded-xl hover:scale-105 active:scale-95 transition border-2 border-gray-300"
              >
                {modalData.button2}
              </button>
            )}
          </div>

          {/* Close Button  */}
          <button
            id="Exit button"
            onClick={(e) => {
              handleClick(e);
            }}
            className="absolute text-3xl top-6 right-6 border-2 text-gray-400 border-gray-400 rounded-full hover:scale-105 active:scale-95"
          >
            <IconClose />
          </button>
        </div>
      )}
    </>
  );
};

export default Template4;

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
          linkElem.href = "http://localhost:3000/dist/tailwind.css"; // Set the href to point to the Tailwind CSS file
          // linkElem.href = "https://modal-generator.netlify.app/dist/tailwind.css";
          shadow.appendChild(linkElem); // Append the link element to the shadow DOM to load the styles

          // Once the CSS file is fully loaded, proceed with rendering the modal
          linkElem.onload = () => {
            const modal = document.createElement("div"); // Create the modal element
            modal.className = `fixed z-50 ${modalData.position.position} ${modalData.device}`; // Add fixed positioning and other necessary classes from modalData
            shadow.appendChild(modal); // Append the modal element to the shadow DOM

            // Render the React component (Template4) inside the shadow DOM
            const root = ReactDOM.createRoot(modal);
            root.render(<Template4 modalData={modalData} />);
            console.log("Template rendered");
          };
          document.body.appendChild(container); // Append the container (with shadow DOM) to the body of the document
        },
        modalData.afterSeconds ? Number(modalData.afterSeconds) * 1000 : 0
      );
    },
  };
}
