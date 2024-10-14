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
// import Radio from "../Components/Radio";

interface TemplateProps {
  modalData: ModalDataType;
}

const Template3: React.FC<TemplateProps> = ({ modalData }) => {
  const {
    id,
    title,
    content,
    button,
    radio,
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
  const [value, setValue] = useState<string | null>(null);

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
    radioSelection: "",
  };

  const { sendWebhookData } = useWebhook();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const { id } = e.currentTarget;
    if (!isModalGeneratorWebsite) {
      webhookData.userClick = id; // VARIABLE
      webhookData.radioSelection = value ? value : "Not selected.";
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
          <div className="text-xl">PLANS</div>

          {/* Title  */}
          {title && (
            <div className="text-3xl font-bold text-center w-full break-words text-wrap mt-3">
              {title}
            </div>
          )}

          {/* Content  */}
          {content?.content1 && (
            <div className="text-xl text-center w-full break-words text-wrap mt-[6%]">
              {content.content1}
            </div>
          )}

          {/* Radio */}
          <div className="flex flex-col">
            {radio?.label1 && (
              <div className="flex gap-2 mt-6">
                <input
                  type="radio"
                  id={radio.label1}
                  value={radio.label1}
                  onClick={(e) => setValue(e.currentTarget.value)}
                  className="relative appearance-none shrink-0 mt-1 w-5 h-5 border-2 border-gray-400 rounded-full cursor-pointer"
                />
                {value === radio.label1 && (
                  <div
                    className={`absolute mt-1 w-5 h-5 rounded-full border-[7px] ${color.borderColor}`}
                  />
                )}
                <label
                  className="flex flex-col cursor-pointer"
                  htmlFor={radio.label1}
                >
                  <span className="text-lg">{radio.label1}</span>
                  <span className="text-sm text-gray-400">{radio.label1b}</span>
                </label>
              </div>
            )}

            {radio?.label2 && (
              <div className="flex gap-2 mt-6">
                <input
                  type="radio"
                  id={radio.label2}
                  value={radio.label2}
                  onClick={(e) => setValue(e.currentTarget.value)}
                  className="relative appearance-none shrink-0 mt-1 w-5 h-5 border-2 border-gray-400 rounded-full cursor-pointer"
                />
                {value === radio.label2 && (
                  <div
                    className={`absolute mt-1 w-5 h-5 rounded-full border-[7px] ${color.borderColor}`}
                  />
                )}
                <label
                  className="flex flex-col cursor-pointer"
                  htmlFor={radio.label2}
                >
                  <span className="text-lg">{radio.label2}</span>
                  <span className="text-sm text-gray-400">{radio.label2b}</span>
                </label>
              </div>
            )}

            {radio?.label3 && (
              <div className="flex gap-2 mt-6">
                <input
                  type="radio"
                  id={radio.label3}
                  value={radio.label3}
                  onClick={(e) => setValue(e.currentTarget.value)}
                  className="relative appearance-none shrink-0 mt-1 w-5 h-5 border-2 border-gray-400 rounded-full cursor-pointer"
                />
                {value === radio.label3 && (
                  <div
                    className={`absolute mt-1 w-5 h-5 rounded-full border-[7px] ${color.borderColor}`}
                  />
                )}
                <label
                  className="flex flex-col cursor-pointer"
                  htmlFor={radio.label3}
                >
                  <span className="text-lg">{radio.label3}</span>
                  <span className="text-sm text-gray-400">{radio.label3b}</span>
                </label>
              </div>
            )}
          </div>

          {/* Button */}
          <div className="flex justify-between w-full text-base gap-4 break-words text-wrap">
            {button?.button2 && (
              <button
                id={button.button2}
                onClick={handleClick}
                className="w-full py-3 mt-[6%] rounded-xl hover:scale-105 active:scale-95 transition border-2 border-gray-400"
              >
                {button.button2}
              </button>
            )}
            {button?.buttonAnchor && (
              <a
                href={button.buttonAnchorLink}
                id={button.buttonAnchor}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClick}
                className={`w-full py-3 mt-[6%] rounded-xl hover:scale-105 active:scale-95 transition text-center cursor-pointer ${color.background} ${color.borderColor} ${color.text}`}
              >
                {button.buttonAnchor}
              </a>
            )}
          </div>

          {/* Close Button  */}
          <button
            id="Exit button"
            onClick={(e) => {
              handleClick(e);
            }}
            className={`absolute text-3xl top-6 right-6 rounded-full hover:scale-125 active:scale-95 z-10 transition-transform duration-1000 ease-out text-black`}
          >
            <IconClose />
          </button>
        </div>
      )}
    </>
  );
};

export default Template3;

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

            // Render the React component (Template3) inside the shadow DOM
            const root = ReactDOM.createRoot(modal);
            root.render(<Template3 modalData={modalData} />);
            console.log("Template rendered");
          };
          document.body.appendChild(container); // Append the container (with shadow DOM) to the body of the document
        },
        modalData.afterSeconds ? Number(modalData.afterSeconds) * 1000 : 0
      );
    },
  };
}
