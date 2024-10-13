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

const Template8: React.FC<TemplateProps> = ({ modalData }) => {
  const {
    id,
    title,
    imageUrl,
    content,
    button,
    input,
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
  const [value, setValue] = useState<string>("");

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
    email: "",
  };

  const { sendWebhookData } = useWebhook();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const { id } = e.currentTarget;
    if (!isModalGeneratorWebsite) {
      webhookData.userClick = id; // VARIABLE
      webhookData.email = value ? value : "Not written.";
      sendWebhookData(webhookData, webhookUrl);
      setIsModalOpen(false);
    }
  };

  return (
    <>
      {isModalTriggered && isTrafficSource && isModalOpen && (
        <div
          className={`flex flex-col items-center justify-between rounded-xl font-sans shadow-[0_0_12px_rgba(0,0,0,0.25)] p-10 bg-white text-black transition-transform duration-1000 ease-out ${sizes} ${
            id
              ? "sticky top-10 left-1/2 scale-75 -translate-y-[12%] -translate-x-[12%]"
              : ""
          } ${!isModalGeneratorWebsite && (slide ? "" : position.slide)}`}
        >
          {/* Image  */}
          {imageUrl && (
            <Image
              src={imageUrl}
              className="w-1/2 rounded-t-xl"
              width={0}
              height={0}
              unoptimized
              alt=""
            />
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

          {/* Input  */}
          {input?.input1 && (
            <input
              type="text"
              value={value}
              name="name"
              onChange={(e) => setValue(e.currentTarget.value)}
              placeholder={input.input1}
              className="py-3 px-4 text-base w-full rounded-xl mt-[6%] border-2 border-gray-400 text-left"
            />
          )}

          {/* Button */}
          {(button?.buttonAnchor || button?.buttonAnchor2) && (
            <div className="flex flex-col justify-between gap-4 w-full text-base break-words text-wrap mt-[6%]">
              {button?.buttonAnchor && (
                <a
                  href={button.buttonAnchorLink}
                  id={button.buttonAnchor}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleClick}
                  className={`w-full py-3 rounded-xl hover:scale-105 active:scale-95 transition text-center ${color.background} ${color.borderColor} ${color.text}`}
                >
                  {button.buttonAnchor}
                </a>
              )}
              {button?.buttonAnchor2 && (
                <a
                  href={button.buttonAnchorLink}
                  id={button.buttonAnchor}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleClick}
                  className="text-black text-sm inline-block"
                >
                  {button.buttonAnchor2}
                </a>
              )}
            </div>
          )}

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
          linkElem.href = "http://localhost:3000/dist/tailwind.css"; // Set the href to point to the Tailwind CSS file
          // linkElem.href = "https://modal-generator.netlify.app/dist/tailwind.css";
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
