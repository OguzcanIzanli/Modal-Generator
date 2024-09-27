"use client";

import React from "react";
import { createContext, useContext, ReactNode, useState } from "react";
import { modalData } from "../data/modalData";
import { initialModalData, ModalDataType } from "../data/types";

interface ModalContextInterface {
  selectedModal: number;
  setSelectedModal: (id: number) => void;
  size: "small" | "medium" | "large";
  setSize: (size: "small" | "medium" | "large") => void;
  modal: ModalDataType;
  setModal: (modal: ModalDataType) => void;
}

interface ModalProviderProps {
  children: ReactNode;
}

const ModalContext = createContext<ModalContextInterface>({
  selectedModal: 0,
  setSelectedModal: () => {},
  size: "medium",
  setSize: () => {},
  modal: initialModalData,
  setModal: () => {},
});

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [selectedModal, setSelectedModal] = useState(0);
  const [size, setSize] = useState<"small" | "medium" | "large">("medium");
  const modal = modalData[selectedModal - 1];

  const values = {
    selectedModal,
    setSelectedModal,
    size,
    setSize,
    modal,
  };

  return (
    <ModalContext.Provider value={values}>{children}</ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
