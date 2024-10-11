"use client";

import React from "react";
import { createContext, useContext, ReactNode, useState } from "react";
import { ModalDataType } from "../data/modalData";

export const initialModalData = {
  id: "",
  title: "",
  logoUrl: "",
  imageUrl: "",
  content1: "",
  content2: "",
  buttonAnchor: "",
  buttonAnchorLink: "",
  buttonAnchor2: "",
  buttonAnchorLink2: "",
  buttonAnchor3: "",
  buttonAnchorLink3: "",
  button2: "",
  input1: "",
  input2: "",
  checkbox1: "",
  label1: "",
  label1b: "",
  label2: "",
  label2b: "",
  label3: "",
  label3b: "",
  sizes: "",
  position: { position: "", slide: "" },
  color: { background: "", borderColor: "", text: "" },
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

  return (
    <ModalContext.Provider value={values}>{children}</ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
