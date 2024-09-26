"use client";

import { createContext, useContext, ReactNode, useState } from "react";
import { modalData } from "../data/modalData";

export interface ModalInterface {
  id: number;
  container: string;
  logo: string;
  image: { url: string; style: string };
  title: { content: string; style: string };
  contents: { content: string; style: string };
  inputs: { placeholder: string; style: string };
  buttons: {
    button1: { content: string; style: string };
    button2: { content: string; style: string };
    style: string;
  };
  sizes: { small: string; medium: string; large: string };
}

interface ModalContextInterface {
  id: number;
  setId: (id: number) => void;
  size: "small" | "medium" | "large";
  setSize: (size: "small" | "medium" | "large") => void;
  modal: ModalInterface;
}

interface ModalProviderProps {
  children: ReactNode;
}

const ModalContext = createContext<ModalContextInterface>({
  id: 0,
  setId: () => {},
  size: "medium",
  setSize: () => {},
  modal: {
    id: 0,
    container: "",
    logo: "",
    image: { url: "", style: "" },
    title: { content: "", style: "" },
    contents: { content: "", style: "" },
    inputs: { placeholder: "", style: "" },
    buttons: {
      button1: { content: "", style: "" },
      button2: { content: "", style: "" },
      style: "",
    },
    sizes: { small: "", medium: "", large: "" },
  },
});

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [id, setId] = useState(0);
  const [size, setSize] = useState<"small" | "medium" | "large">("medium");
  const modal = modalData[id - 1];

  const values = {
    id,
    setId,
    size,
    setSize,
    modal,
  };

  return (
    <ModalContext.Provider value={values}>{children}</ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
