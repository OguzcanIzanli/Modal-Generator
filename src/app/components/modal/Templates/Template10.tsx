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

const Template10: React.FC<TemplateProps> = ({ modalData }) => {
  const {
    id,
    title,
    logoUrl,
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

  const isModalGeneratorWebsite =
    process.env.NEXT_PUBLIC_API_URL?.includes("modal-generator");

  const [isModalOpen, setIsModalOpen] = useState(true);

  // Scroll
  const isModalTriggered = useScrollModal({
    percentage: Number(afterScroll),
  });

  // Traffic source
  const isTrafficSource = useTrafficSource({
    domain: trafficSource,
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
      }, Number(afterSeconds + 500));

      return () => clearTimeout(timer);
    }
  }, [
    isModalTriggered,
    isTrafficSource,
    isModalOpen,
    isModalGeneratorWebsite,
    afterSeconds,
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
      sendWebhookData(webhookData, webhookUrl);
      setIsModalOpen(false);
    }
  };

  return (
    <>
      {isModalTriggered && isTrafficSource && isModalOpen && (
        <div
          className={`rounded-xl font-sans shadow-[0_0_12px_rgba(0,0,0,0.25)] transition-transform duration-1000 ease-out ${
            color.text
          } ${sizes} ${
            id
              ? "sticky top-10 left-1/2 scale-75 -translate-y-[12%] -translate-x-[12%]"
              : ""
          } ${!isModalGeneratorWebsite && (slide ? "" : position.slide)}`}
        >
          <div
            className={`p-10 flex flex-col items-center rounded-t-xl opacity-90 ${color.background}`}
          >
            {logoUrl && (
              <div
                className={`rounded-full flex items-center justify-center w-[40%] aspect-[1/1] ${color.background} ${color.borderColor}`}
              >
                <Image
                  src={logoUrl}
                  className="w-full"
                  width={0}
                  height={0}
                  unoptimized
                  alt=""
                />
              </div>
            )}

            {/* Title  */}
            {title && (
              <div className="text-3xl font-bold text-center w-full break-words text-wrap mt-[8%]">
                {title}
              </div>
            )}

            {/* Content  */}
            {content?.content1 && (
              <div className="text-xl text-center w-full break-words text-wrap mt-[6%]">
                {content.content1}
              </div>
            )}

            {/* Close Button  */}
            <button
              id="Exit button"
              onClick={(e) => {
                handleClick(e);
              }}
              className={`absolute text-3xl top-6 right-6 rounded-full hover:scale-125 active:scale-95 z-10 transition-transform duration-1000 ease-out ${color.text}`}
            >
              <IconClose />
            </button>
          </div>

          {/* Button */}
          <div className="flex w-full gap-4 text-base justify-between break-words text-wrap">
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
