"use client";

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

// Type
import { ModalDataType } from "@/app/data/modalData";

// Hook
import useScrollModal from "../Hooks/useScrollModal";
import useTrafficSource from "../Hooks/useTrafficSource";
import { useWebhook } from "../Hooks/useWebhook";
import IconMoon from "../Icons/IconMoon";
import IconSun from "../Icons/IconSun";

// Component
import CloseButton from "../Components/CloseButton";

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

  const [isModalOpen, setIsModalOpen] = useState(
    localStorage.getItem("isOpen") ?? "true"
  );

  const [theme, setTheme] = useState<"light" | "dark">(
    localStorage.getItem("theme") as "light" | "dark"
  );
  const [recomTheme, setRecomTheme] = useState<string>("light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    setRecomTheme(theme === "dark" ? "light" : "dark");
  }, [theme]);

  // Scroll
  const isModalTriggered = useScrollModal({
    percentage: Number(afterScroll),
  });

  // Traffic source
  const isTrafficSource = useTrafficSource({
    domain: trafficSource,
  });

  const isModalVisible =
    isModalTriggered && isTrafficSource && isModalOpen === "true";

  // Slide Animation
  const [slide, setSlide] = useState(false);

  useEffect(() => {
    if (!isModalGeneratorWebsite && isModalVisible) {
      const timer = setTimeout(() => {
        setSlide(true);
      }, Number(afterSeconds + 500));

      return () => clearTimeout(timer);
    }
  }, [isModalVisible, isModalGeneratorWebsite, afterSeconds]);

  // Webhook - VARIABLE
  const webhookData = {
    userClick: "",
  };

  const { sendWebhookData } = useWebhook();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const { id } = e.currentTarget;
    if (!isModalGeneratorWebsite) {
      webhookData.userClick = id; // VARIABLE

      if (!id.includes("Keep") && !id.includes("Exit")) {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        setTimeout(() => {
          window.location.reload();
        }, 100);
      }

      localStorage.setItem("isOpen", "false");
      sendWebhookData(webhookData, webhookUrl);
      setIsModalOpen("false");
    }
  };

  return (
    <>
      {isModalVisible && (
        <div
          className={`flex text-center flex-col items-center justify-between rounded-xl font-sans shadow-[0_0_12px_rgba(0,0,0,0.25)] bg-white text-black transition-transform duration-1000 ease-out ${sizes} ${
            sizes === "w-[320px]" ? "p-5 pt-10" : "p-10"
          } ${
            id
              ? "sticky top-10 left-1/2 scale-75 -translate-y-[12%] -translate-x-[12%]"
              : ""
          } ${!isModalGeneratorWebsite && (slide ? "" : position.slide)}`}
        >
          {/* Logo  */}
          <div className="flex items-center justify-center w-[20%] aspect-[1/1]">
            {recomTheme === "dark" ? (
              <IconMoon className={`w-full h-full ${color.textBg}`} />
            ) : (
              <IconSun className={`w-full h-full ${color.textBg}`} />
            )}
          </div>

          {/* Title  */}
          <div className="text-3xl font-bold text-center w-full break-words text-wrap mt-[8%]">
            {recomTheme[0].toUpperCase() + recomTheme.slice(1)} mode
          </div>

          {/* Content  */}
          <div className="text-xl w-full break-words text-wrap mt-[6%]">
            Just letting you know that we have {recomTheme} mode.
          </div>

          {/* Button */}
          <div className="flex flex-col justify-between gap-4 w-full text-base break-words text-wrap mt-[6%]">
            <button
              id={`Turn on ${recomTheme} mode`}
              onClick={handleClick}
              className={`w-full py-3 rounded-xl hover:scale-105 active:scale-95 transition text-center ${color.background} ${color.borderColor} ${color.text}`}
            >
              Turn on {recomTheme} mode
            </button>

            <button
              id={`Keep using ${recomTheme} mode`}
              onClick={handleClick}
              className="w-full py-3 rounded-xl hover:scale-105 active:scale-95 transition border-2 border-gray-400 cursor-pointer"
            >
              Keep using {recomTheme === "dark" ? "light" : "dark"} mode
            </button>
          </div>

          {/* Close Button  */}
          <CloseButton handleClick={handleClick} />
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
          // linkElem.href = "http://localhost:3000/dist/tailwind.css"; // Set the href to point to the Tailwind CSS file
          linkElem.href =
            "https://modal-generator.netlify.app/dist/tailwind.css";
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
