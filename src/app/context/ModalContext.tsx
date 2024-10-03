"use client";

import React from "react";
import { createContext, useContext, ReactNode, useState } from "react";
import { ModalDataType } from "../data/modalData";

export const initialModalData = {
  id: NaN,
  title: "",
  logo: "",
  imageUrl: "",
  contents: { content1: "" },
  inputs: { placeholder: "" },
  buttons: {
    button1: "",
    button2: "",
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
    modal,
    setModal,
  };

  return (
    <ModalContext.Provider value={values}>{children}</ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
