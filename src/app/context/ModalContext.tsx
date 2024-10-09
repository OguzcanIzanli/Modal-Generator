"use client";

import React from "react";
import { createContext, useContext, ReactNode, useState } from "react";
import { ModalDataType } from "../data/modalData";

export const initialModalData = {
  id: null,
  title: "",
  logoUrl: "",
  imageUrl: "",
  content1: "",
  input1: "",
  button1: "",
  button2: "",
  sizes: "",
  position: "",
  color: { background: "", text: "" },
  device: "",
  afterSeconds: "",
  afterScroll: "",
  trafficSource: "",
  webhookUrl: "",
};

interface ModalContextInterface {
  modal: ModalDataType;
  setModal: React.Dispatch<React.SetStateAction<ModalDataType>>;
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
  console.log(modal.webhookUrl);
  return (
    <ModalContext.Provider value={values}>{children}</ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
