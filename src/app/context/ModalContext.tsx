"use client";

import React from "react";
import { createContext, useContext, ReactNode, useState } from "react";
import { ModalDataType } from "../data/modalData";

export const initialModalData = {
  id: "",
  template: "",
  title: "",
  image: { logoUrl: "", imageUrl: "" },
  content: { content1: "", content2: "", content3: "" },
  button: {
    buttonAnchor: "",
    buttonAnchorLink: "",
    buttonAnchor2: "",
    buttonAnchorLink2: "",
    buttonAnchor3: "",
    buttonAnchorLink3: "",
    button2: "",
  },
  link: { link1: "", linkURL1: "", link2: "", linkURL2: "" },
  checkbox1: "",
  input: { name: "", email: "", phone: "", message: "" },
  radio: {
    label1: "",
    label1b: "",
    label2: "",
    label2b: "",
    label3: "",
    label3b: "",
  },
  feedback: {
    feedbackURL1: "",
    feedbackURL1Label: "",
    feedbackURL2: "",
    feedbackURL2Label: "",
    feedbackURL3: "",
    feedbackURL3Label: "",
    feedbackURL4: "",
    feedbackURL4Label: "",
    feedbackURL5: "",
    feedbackURL5Label: "",
  },
  sizes: "",
  position: { position: "", slide: "" },
  color: { background: "", borderColor: "", text: "", textBg: "" },
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
