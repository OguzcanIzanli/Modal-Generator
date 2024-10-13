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

const Template1: React.FC<TemplateProps> = ({ modalData }) => {
  const {
    id,
    title,
    logoUrl,
    content,
    feedback,
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
  interface WebhookData {
    userClick?: string;
    email?: string;
  }

  const { sendWebhookData } = useWebhook();
  const webhookData: WebhookData = {};

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const { id } = e.currentTarget;
    if (!isModalGeneratorWebsite) {
      webhookData.userClick = id;

      if (input) {
        webhookData.email = value || "Not written.";
      } else {
        delete webhookData?.email;
      }

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
          {/* Logo  */}
          {logoUrl && (
            <div
              className={`flex items-center justify-center rounded-full w-[25%] aspect-[1/1] ${color.background} ${color.borderColor}`}
            >
              <Image src={logoUrl} width={50} height={50} unoptimized alt="" />
            </div>
          )}

          {/* Title  */}
          {title && (
            <div className="text-3xl font-bold text-center w-full break-words text-wrap mt-[8%]">
              {title}
            </div>
          )}

          {/* Feedback  */}
          <div className="flex justify-between mt-[6%]">
            {feedback?.feedbackURL1 && (
              <button
                className={`rounded-full flex items-center justify-center w-[12%] transition hover:scale-125 active:scale-110`}
                onClick={handleClick}
                id="Sad"
              >
                <Image
                  src={feedback.feedbackURL1 ? feedback?.feedbackURL1 : ""}
                  className="w-full"
                  width={0}
                  height={0}
                  unoptimized
                  alt=""
                />
              </button>
            )}

            {feedback?.feedbackURL2 && (
              <button
                className={`rounded-full flex items-center justify-center w-[12%] transition hover:scale-125 active:scale-110`}
                onClick={handleClick}
                id="Confused"
              >
                <Image
                  src={feedback.feedbackURL2 ? feedback?.feedbackURL2 : ""}
                  className="w-full"
                  width={0}
                  height={0}
                  unoptimized
                  alt=""
                />
              </button>
            )}

            {feedback?.feedbackURL3 && (
              <button
                className={`rounded-full flex items-center justify-center w-[12%] transition hover:scale-125 active:scale-110`}
                onClick={handleClick}
                id="Pleased"
              >
                <Image
                  src={feedback.feedbackURL3 ? feedback?.feedbackURL3 : ""}
                  className="w-full"
                  width={0}
                  height={0}
                  unoptimized
                  alt=""
                />
              </button>
            )}

            {feedback?.feedbackURL4 && (
              <button
                className={`rounded-full flex items-center justify-center w-[12%] transition hover:scale-125 active:scale-110`}
                onClick={handleClick}
                id="Happy"
              >
                <Image
                  src={feedback.feedbackURL4 ? feedback?.feedbackURL4 : ""}
                  className="w-full"
                  width={0}
                  height={0}
                  unoptimized
                  alt=""
                />
              </button>
            )}

            {feedback?.feedbackURL5 && (
              <button
                className={`rounded-full flex items-center justify-center w-[12%] transition hover:scale-125 active:scale-110`}
                onClick={handleClick}
                id="Very Happy"
              >
                <Image
                  src={feedback.feedbackURL5 ? feedback?.feedbackURL5 : ""}
                  className="w-full"
                  width={0}
                  height={0}
                  unoptimized
                  alt=""
                />
              </button>
            )}
          </div>

          {/* Content  */}
          {content?.content1 && (
            <div className="text-xl text-center w-full break-words text-wrap mt-[6%]">
              {content.content1}
            </div>
          )}
          {content?.content2 && (
            <div className="text-base text-left w-full rounded-xl py-3 px-4 mt-[6%] border-2 border-gray-400 break-words text-wrap">
              {content.content2}
            </div>
          )}

          {/* Input  */}
          {input?.input1 && (
            <input
              type="email"
              value={value}
              onChange={(e) => setValue(e.currentTarget.value)}
              placeholder={input.input1}
              className="py-3 px-4 text-base w-full rounded-xl mt-[6%] border-2 border-gray-400 text-left"
            />
          )}

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

export default Template1;

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

            // Render the React component (Template1) inside the shadow DOM
            const root = ReactDOM.createRoot(modal);
            root.render(<Template1 modalData={modalData} />);
            console.log("Template rendered");
          };
          document.body.appendChild(container); // Append the container (with shadow DOM) to the body of the document
        },
        modalData.afterSeconds ? Number(modalData.afterSeconds) * 1000 : 0
      );
    },
  };
}
