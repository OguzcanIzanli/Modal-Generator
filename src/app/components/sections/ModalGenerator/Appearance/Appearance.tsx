"use client";

import React from "react";
import styles from "./Appearance.module.scss";
import PaginationSize from "@/app/components/navigation/Pagination/PaginationSize";
import IconImage from "../../../../../../public/images/Icons/IconImage";
import IconUpload from "../../../../../../public/images/Icons/IconUpload";
import { useModal } from "@/app/context/ModalContext";

const Appearance = () => {
  const boxes = Array.from({ length: 9 }, (_, i) => <div key={i}></div>);
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

      <div className={styles.positionBoxesContainer}>{boxes}</div>

      <h4>Colors</h4>

      <div className={styles.colorBoxesContainer}>
        {colors.map((color) => (
          <button
            key={color.background}
            className={`${styles.colorBox} ${color.background}`}
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

      <h4>Upload Logo</h4>
      <div className={styles.uploadLogoContainer}>
        <IconImage className={styles.iconImage} />
        <div className={styles.uploadLogo}>
          <IconUpload /> Drop your image here or upload
        </div>
      </div>
    </div>
  );
};

export default Appearance;
