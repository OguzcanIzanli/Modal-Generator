"use client";

import styles from "./Appearance.module.scss";
import Pagination from "@/app/components/navigation/Pagination";
import IconImage from "@/app/components/ui/icons/IconImage";
import IconUpload from "@/app/components/ui/icons/IconUpload";
import { useState } from "react";

const Appearance = () => {
  const sizeSelectionArray = ["Small", "Medium", "Large"];
  const [size, setSize] = useState("Small");

  const boxes = Array.from({ length: 9 }, (_, i) => <div key={i}></div>);

  const colors = [
    "black",
    "orange-600",
    "violet-600",
    "gray-600",
    "gray-300",
    "white",
  ];

  return (
    <>
      <h3>
        <span>2</span>Appearance (Size, colors, logo)
      </h3>
      <p>Size</p>

      <Pagination
        selectionArray={sizeSelectionArray}
        setSelection={setSize}
        selection={size}
        size="large"
      />

      <p>Position</p>

      <div className={styles.positionBoxesContainer}>{boxes}</div>

      <p>Colors</p>

      <div className={styles.colorBoxesContainer}>
        {colors.map((color) => (
          <div
            key={color}
            className="hover:drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition hover:scale-105"
          >
            <button className={`${styles.colorBox} bg-${color}`}></button>
          </div>
        ))}
      </div>

      <p>Upload Logo</p>
      <div className={styles.uploadLogoContainer}>
        <IconImage className={styles.iconImage} />
        <div className={styles.uploadLogo}>
          <IconUpload /> Drop your image here or upload
        </div>
      </div>
    </>
  );
};

export default Appearance;
