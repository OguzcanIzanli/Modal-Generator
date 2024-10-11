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
  const isModalGeneratorWebsite =
    process.env.NEXT_PUBLIC_API_URL?.includes("modal-generator");

  const [isModalOpen, setIsModalOpen] = useState(true);
  const [value, setValue] = useState<{ name: string; email: string }>({
    name: "",
    email: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
    name: "",
    email: "",
  };

  const { sendWebhookData } = useWebhook();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const { id } = e.currentTarget;
    if (!isModalGeneratorWebsite) {
      webhookData.userClick = id; // VARIABLE
      webhookData.name = value.name ? value.name : "Not written.";
      webhookData.email = value.email ? value.email : "Not written.";
      const webhookUrl = modalData.webhookUrl;
      sendWebhookData(webhookData, webhookUrl);
      setIsModalOpen(false);
    }
  };

  return (
    <>
      {isModalTriggered && isTrafficSource && isModalOpen && (
        <div
          className={`flex rounded-xl w-min text-black font-sans shadow-[0_0_12px_rgba(0,0,0,0.25)] items-center justify-between bg-white transition-transform duration-1000 ease-out ${
            modalData.id
              ? "sticky top-10 left-1/2 scale-75 -translate-y-[12%] -translate-x-[12%]"
              : ""
          } ${
            !isModalGeneratorWebsite && (slide ? "" : modalData.position.slide)
          }`}
        >
          <div className={`py-10 ${modalData.sizes}`}>
            {/* Title  */}
            {modalData.title && (
              <div className="text-3xl font-bold text-left mb-[6%] w-full break-words text-wrap px-10">
                {modalData.title}
              </div>
            )}

            {/* Content  */}
            {modalData.content1 && (
              <div className="text-xl text-left mb-[6%] w-full break-words text-wrap px-10">
                {modalData.content1}
              </div>
            )}

            {/* Input  */}
            <div className="px-10 w-full">
              {modalData.input1 && (
                <input
                  type="text"
                  value={value.name}
                  name="name"
                  onChange={handleInputChange}
                  placeholder={modalData.input1}
                  className="py-3 px-4 text-base w-full rounded-xl mb-[6%] border-2 border-gray-400 text-left"
                />
              )}
              {modalData.input2 && (
                <input
                  type="email"
                  value={value.email}
                  name="email"
                  onChange={handleInputChange}
                  placeholder={modalData.input2}
                  className="py-3 px-4 text-base w-full rounded-xl mb-[6%] border-2 border-gray-400 text-left"
                />
              )}
            </div>

            {/* Button */}
            <div className="flex w-full gap-4 text-base justify-between break-words text-wrap px-10">
              {modalData.buttonAnchor && (
                <a
                  href={modalData.buttonAnchorLink || "#"}
                  id={modalData.buttonAnchor}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleClick}
                  className={`w-full py-3 rounded-xl hover:scale-105 active:scale-95 transition text-center ${modalData.color.background} ${modalData.color.borderColor} ${modalData.color.text}`}
                >
                  {modalData.buttonAnchor}
                </a>
              )}
            </div>

            <div className="flex w-full text-base justify-between break-words text-wrap pt-2 px-10">
              {modalData.buttonAnchor2 && (
                <div>
                  <a
                    href={modalData.buttonAnchorLink2 || "#"}
                    id={modalData.buttonAnchor2}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleClick}
                    className="text-black text-sm inline-block"
                  >
                    {modalData.buttonAnchor2}
                  </a>
                </div>
              )}
              {modalData.buttonAnchor3 && (
                <div>
                  <a
                    href={modalData.buttonAnchorLink3 || "#"}
                    id={modalData.buttonAnchor3}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleClick}
                    className="text-black text-sm inline-block"
                  >
                    {modalData.buttonAnchor3}
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Image  */}
          <div className={`${modalData.sizes}`}>
            <Image
              src={modalData.imageUrl ? modalData?.imageUrl : ""}
              className="w-full rounded-r-xl"
              width={0}
              height={0}
              unoptimized
              alt=""
            />
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
          //   linkElem.href = "http://localhost:3000/dist/tailwind.css"; // Set the href to point to the Tailwind CSS file
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
