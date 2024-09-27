import React from "react";
import styles from "./Pagination.module.scss";
import { useModal } from "@/app/context/ModalContext";
// import { modalData } from "@/app/data/modalData";

const PaginationPage = () => {
  const sizeSelectionArray: Array<"small" | "medium" | "large"> = [
    "small",
    "medium",
    "large",
  ];
  const { size, setSize } = useModal();

  return (
    <ul className={styles.paginationContainer}>
      {sizeSelectionArray.map((item) => (
        <li
          onClick={() => setSize(item)}
          className={`${styles.large} ${size === item ? styles.active : ""}`}
          key={item}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default PaginationPage;
