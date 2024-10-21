"use client";

import React from "react";
import styles from "./Appearance.module.scss";
import { useModal } from "@/app/context/ModalContext";
import { colorData, positionData } from "@/app/data/templatePropertiesData";

// Component
import Dropzone from "@ui/Dropzone";
import PaginationSize from "@/app/components/navigation/Pagination/PaginationSize";

const Appearance = () => {
  const { modal, setModal } = useModal();

  return (
    <div className={styles.appearanceContainer}>
      <h3>
        <span>2</span>Appearance (Size, colors, logo)
      </h3>

      <h4>Size</h4>
      <PaginationSize />

      <h4>Position</h4>

      <div className={styles.positionBoxesContainer}>
        {positionData.map((data) => (
          <div
            key={data.position}
            className={`${
              modal.position.position === data.position ? styles.active : ""
            }`}
            onClick={() =>
              setModal({
                ...modal,
                position: { position: data.position, slide: data.slide },
              })
            }
          ></div>
        ))}
      </div>

      <h4>Colors</h4>

      <div className={styles.colorBoxesContainer}>
        {colorData.map((color) => (
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
                  borderColor: color.borderColor,
                  text: color.text,
                  textBg: color.textBg,
                },
              })
            }
          ></button>
        ))}
      </div>

      {modal.image?.logoUrl && (
        <>
          <h4>Upload Logo</h4> <Dropzone dropzone="logoUrl" />
        </>
      )}
    </div>
  );
};

export default Appearance;
