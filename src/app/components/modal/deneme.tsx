"use client";

import ReactDOM from "react-dom/client";
import Template1 from "./Templates";
import React from "react";
import { ModalDataType } from "@/app/data/modalData";
import "../../styles/output.css";

if (typeof window !== "undefined") {
  window.MyModal = {
    init: (modalData: ModalDataType) => {
      console.log("Initializing modal...");

      const container = document.createElement("div");
      document.body.appendChild(container);
      console.log("Container created and appended.");

      const root = ReactDOM.createRoot(container);
      console.log("ReactDOM root created.");

      root.render(<Template1 modalData={modalData} />);
      console.log("Template1 rendered.");
    },
  };
  console.log("MyModal initialized and added to window object.");
}
