"use client";

import { useEffect, useState } from "react";
import useScrollModal from "./useScrollModal";
import useTrafficSource from "./useTrafficSource";
import { useWebhook } from "./useWebhook";

interface UseModalHandlerProps {
  afterScroll: number;
  trafficSource: string;
  afterSeconds: number;
  inputEmail?: boolean;
  inputName?: boolean;
  inputPhone?: boolean;
  inputMessage?: boolean;
  radioSelection?: boolean;
  webhookUrl: string;
  alwaysOpen?: boolean;
}

export const useModalHandler = ({
  afterScroll,
  trafficSource,
  afterSeconds,
  inputEmail,
  inputName,
  inputPhone,
  inputMessage,
  radioSelection,
  webhookUrl,
  alwaysOpen,
}: UseModalHandlerProps) => {
  const isModalGeneratorWebsite =
    process.env.NEXT_PUBLIC_API_URL?.includes("modal-generator");

  const [isModalOpen, setIsModalOpen] = useState(
    localStorage.getItem("isOpen") ?? "true"
  );

  const [slide, setSlide] = useState(false);
  const [checked, setChecked] = useState<boolean>(false);

  const [value, setValue] = useState<{
    name: string;
    email: string;
    phone: number | null;
    message: string;
    radioSelection: string | null;
  }>({
    name: "",
    email: "",
    phone: null,
    message: "",
    radioSelection: "",
  });

  const handleRadioClick = (e: React.MouseEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setValue((prev) => ({
      ...prev,
      radioSelection: target.value,
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const isModalTriggered = useScrollModal({ percentage: afterScroll });
  const isTrafficSource = useTrafficSource({ domain: trafficSource });
  const isModalVisible =
    isModalTriggered && isTrafficSource && isModalOpen === "true";

  const { sendWebhookData } = useWebhook();

  const webhookData: {
    userClick?: string;
    email?: string;
    name?: string;
    phone?: number | string;
    message?: string;
    radioSelection?: string;
  } = {};

  useEffect(() => {
    if (!isModalGeneratorWebsite && isModalVisible) {
      const timer = setTimeout(() => setSlide(true), afterSeconds + 500);
      return () => clearTimeout(timer);
    }
    alwaysOpen && localStorage.setItem("isOpen", "true");
  }, [isModalVisible, isModalGeneratorWebsite, afterSeconds, alwaysOpen]);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const { id } = e.currentTarget;

    if (!isModalGeneratorWebsite) {
      webhookData.userClick = id;
      inputEmail && (webhookData.email = value.email || "Not written.");
      inputName && (webhookData.name = value.name || "Not written.");
      inputPhone && (webhookData.phone = value.phone || "Not written.");
      inputMessage && (webhookData.message = value.message || "Not written.");
      radioSelection &&
        (webhookData.radioSelection = value.radioSelection || "Not selected.");

      !alwaysOpen && localStorage.setItem("isOpen", "false");
      sendWebhookData(webhookData, webhookUrl);
      setIsModalOpen("false");
    }
  };

  return {
    isModalVisible,
    slide,
    isModalGeneratorWebsite,
    value,
    checked,
    setChecked,
    handleRadioClick,
    handleInputChange,
    handleClick,
  };
};
