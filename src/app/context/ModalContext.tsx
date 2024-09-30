"use client";

import React from "react";
import { createContext, useContext, ReactNode, useState } from "react";
import { ModalDataType } from "../data/modalData";

export const initialModalData = {
  id: NaN,
  container: "",
  logo: "",
  images: { url: "", style: "" },
  title: { content: "", style: "" },
  contents: { content: "", style: "" },
  inputs: { placeholder: "" },
  buttons: {
    button1: { content: "", style: "" },
    button2: { content: "", style: "" },
    style: "",
  },
  sizes: "",
  color: { background: "", text: "" },
};

interface ModalContextInterface {
  modal: ModalDataType;
  setModal: (modal: ModalDataType) => void;
}

interface ModalProviderProps {
  children: ReactNode;
}

const ModalContext = createContext<ModalContextInterface>({
  modal: initialModalData,
  setModal: () => {},
});

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [modal, setModal] = useState<ModalDataType>(initialModalData);

  const values = {
    // size,
    // setSize,
    modal,
    setModal,
  };

  return (
    <ModalContext.Provider value={values}>{children}</ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
