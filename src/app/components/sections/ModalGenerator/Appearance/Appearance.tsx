"use client";

import styles from "./Appearance.module.scss";
import PaginationSize from "@/app/components/navigation/Pagination/PaginationSize";
import IconImage from "@/app/components/ui/icons/IconImage";
import IconUpload from "@/app/components/ui/icons/IconUpload";

const Appearance = () => {
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
          <div
            key={color}
            className="hover:drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition hover:scale-105"
          >
            <button className={`${styles.colorBox} bg-${color}`}></button>
          </div>
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
