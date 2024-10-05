"use client";

import React from "react";
import styles from "./Appearance.module.scss";
import PaginationSize from "@/app/components/navigation/Pagination/PaginationSize";
import { useModal } from "@/app/context/ModalContext";
import Dropzone from "@/app/components/ui/Dropzone";

const Appearance = () => {
  // const boxes = Array.from({ length: 9 }, (_, i) => <div key={i}></div>);

  const positions = [
    "top-5 left-5",
    "top-5 left-1/2 -translate-x-2/4",
    "top-5 right-5",
    "left-5 bottom-1/2 translate-y-2/4",
    "bottom-1/2 left-1/2 -translate-x-2/4 translate-y-2/4",
    "right-5 bottom-1/2 translate-y-2/4",
    "bottom-5 left-5",
    "bottom-5 left-1/2 -translate-x-2/4",
    "bottom-5 right-5",
  ];

  const { modal, setModal } = useModal();

  const colors = [
    { background: "bg-black border-2 border-black", text: "text-white" },
    {
      background: "bg-orange-600 border-2 border-orange-600",
      text: "text-white",
    },
    {
      background: "bg-violet-600 border-2 border-violet-600",
      text: "text-white",
    },
    { background: "bg-gray-600 border-2 border-gray-600", text: "text-white" },
    { background: "bg-gray-300 border-2 border-gray-300", text: "text-black" },
    { background: "bg-white border-2 border-gray-300", text: "text-black" },
  ];

  return (
    <div className={styles.appearanceContainer}>
      <h3>
        <span>2</span>Appearance (Size, colors, logo)
      </h3>

      <h4>Size</h4>
      <PaginationSize />

      <h4>Position</h4>

      <div className={styles.positionBoxesContainer}>
        {positions.map((position) => (
          <div
            key={position}
            className={`${modal.position === position ? styles.active : ""}`}
            onClick={() =>
              setModal({
                ...modal,
                position: position,
              })
            }
          ></div>
        ))}
      </div>

      <h4>Colors</h4>

      <div className={styles.colorBoxesContainer}>
        {colors.map((color) => (
          <button
            key={color.background}
            className={`${styles.colorBox} ${color.background} ${
              modal.color.background === color.background ? styles.active : ""
            }`}
            onClick={() =>
              setModal({
                ...modal,
                color: {
                  background: color.background,
                  text: color.text,
                },
              })
            }
          ></button>
        ))}
      </div>

      {modal.logoUrl && (
        <>
          <h4>Upload Logo</h4> <Dropzone dropzone="logo" />
        </>
      )}
    </div>
  );
};

export default Appearance;
