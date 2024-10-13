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
import IconMoon from "../Icons/IconMoon";
import IconSun from "../Icons/IconSun";

interface TemplateProps {
  modalData: ModalDataType;
}

const Template15: React.FC<TemplateProps> = ({ modalData }) => {
  const {
    id,
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

  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useState<"light" | "dark">(
    isDarkMode ? "dark" : "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

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

      const newTheme = theme === "dark" ? "light" : "dark";
      setTheme(newTheme);
      localStorage.setItem("theme", newTheme);

      sendWebhookData(webhookData, webhookUrl);
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, []);

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
          <div className="flex items-center justify-center w-[20%] aspect-[1/1]">
            {theme === "dark" ? (
              <IconMoon className={`w-full h-full ${color.textBg}`} />
            ) : (
              <IconSun className={`w-full h-full ${color.textBg}`} />
            )}
          </div>

          {/* Title  */}
          <div className="text-3xl font-bold text-center w-full break-words text-wrap mt-[8%]">
            {theme[0].toUpperCase() + theme.slice(1)} mode
          </div>

          {/* Content  */}

          <div className="text-xl text-center w-full break-words text-wrap mt-[6%]">
            Just letting you know that we have {theme} mode.
          </div>

          {/* Button */}

          <div className="flex flex-col justify-between gap-4 w-full text-base break-words text-wrap mt-[6%]">
            <button
              id={`Turn on ${theme} mode`}
              onClick={handleClick}
              className={`w-full py-3 rounded-xl hover:scale-105 active:scale-95 transition text-center ${color.background} ${color.borderColor} ${color.text}`}
            >
              Turn on {theme} mode
            </button>

            <button
              id={`Keep using ${theme} mode`}
              onClick={handleClick}
              className="w-full py-3 rounded-xl hover:scale-105 active:scale-95 transition border-2 border-gray-400"
            >
              Keep using {theme === "dark" ? "light" : "dark"} mode
            </button>
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

export default Template15;

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

            // Render the React component (Template15) inside the shadow DOM
            const root = ReactDOM.createRoot(modal);
            root.render(<Template15 modalData={modalData} />);
            console.log("Template rendered");
          };
          document.body.appendChild(container); // Append the container (with shadow DOM) to the body of the document
        },
        modalData.afterSeconds ? Number(modalData.afterSeconds) * 1000 : 0
      );
    },
  };
}
