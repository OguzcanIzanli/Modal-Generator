"use client";

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

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

const Template6: React.FC<TemplateProps> = ({ modalData }) => {
  const {
    id,
    title,
    content,
    button,
    checkbox1,
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
  const [checked, setChecked] = useState<boolean>(false);

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
          className={`flex flex-col items-center justify-between rounded-xl font-sans shadow-[0_0_12px_rgba(0,0,0,0.25)] p-10 transition-transform duration-1000 ease-out ${
            color.background
          } ${color.text} ${sizes} ${
            id
              ? "sticky top-10 left-1/2 scale-75 -translate-y-[12%] -translate-x-[12%]"
              : ""
          } ${!isModalGeneratorWebsite && (slide ? "" : position.slide)}`}
        >
          {/* Title  */}
          {title && (
            <div className="text-3xl font-bold text-center w-full break-words text-wrap">
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
              type="email"
              value={value}
              onChange={(e) => setValue(e.currentTarget.value)}
              placeholder={input.input1}
              className={`py-3 px-4 text-base w-[280px] rounded-xl mt-[6%] border-2 border-gray-400 text-left ${color.background}`}
            />
          )}

          {/* Checkbox */}
          {checkbox1 && (
            <div className="flex items-center mt-[4%] w-[280px]">
              <label
                className="flex items-center cursor-pointer relative"
                htmlFor="checkbox1"
              >
                <input
                  id="checkbox1"
                  type="checkbox"
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                  className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded-full shadow border-gray-400 border-2"
                />
                <span
                  className={`absolute opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${modalData.color.text}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </label>
              <label
                className="cursor-pointer ml-2 text-sm"
                htmlFor="checkbox1"
              >
                {modalData.checkbox1}
              </label>
            </div>
          )}

          {/* Button */}
          {button?.buttonAnchor && (
            <div className="flex justify-end w-[280px] text-base break-words text-wrap">
              <a
                href={button.buttonAnchorLink}
                id={button.buttonAnchor}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClick}
                className={`w-1/2 py-3 mt-[6%] rounded-xl hover:scale-105 active:scale-95 transition text-center bg-white text-black cursor-pointer ${
                  color.borderColor
                } ${
                  checked
                    ? ""
                    : "pointer-events-none cursor-default opacity-50 scale-90"
                }`}
              >
                {button.buttonAnchor}
              </a>
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
      )}
    </>
  );
};

export default Template6;

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

            // Render the React component (Template6) inside the shadow DOM
            const root = ReactDOM.createRoot(modal);
            root.render(<Template6 modalData={modalData} />);
            console.log("Template rendered");
          };
          document.body.appendChild(container); // Append the container (with shadow DOM) to the body of the document
        },
        modalData.afterSeconds ? Number(modalData.afterSeconds) * 1000 : 0
      );
    },
  };
}
