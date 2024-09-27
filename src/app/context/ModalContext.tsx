"use client";

import React from "react";
import { createContext, useContext, ReactNode, useState } from "react";
import { ModalDataType, initialModalData } from "./types";

interface ModalContextInterface {
  size: "small" | "medium" | "large";
  setSize: (size: "small" | "medium" | "large") => void;
  modal: ModalDataType;
  setModal: (modal: ModalDataType) => void;
}

interface ModalProviderProps {
  children: ReactNode;
}

const ModalContext = createContext<ModalContextInterface>({
  size: "medium",
  setSize: () => {},
  modal: initialModalData,
  setModal: () => {},
});

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [size, setSize] = useState<"small" | "medium" | "large">("medium");
  const [modal, setModal] = useState<ModalDataType>(initialModalData);

  const values = {
    size,
    setSize,
    modal,
    setModal,
  };

  return (
    <ModalContext.Provider value={values}>{children}</ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
