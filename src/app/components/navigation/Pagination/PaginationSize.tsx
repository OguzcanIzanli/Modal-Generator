import React from "react";
import styles from "./Pagination.module.scss";
import { useModal } from "@/app/context/ModalContext";

const PaginationPage = () => {
  const sizeSelectionArray: Array<"small" | "medium" | "large"> = [
    "small",
    "medium",
    "large",
  ];
  const { modal, setModal } = useModal();

  return (
    <ul className={styles.paginationContainer}>
      {Object.keys(modal.sizes).map((item) => (
        <li
          onClick={() => setModal(item: modal.sizes.item)}
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
