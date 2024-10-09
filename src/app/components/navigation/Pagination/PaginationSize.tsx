import React from "react";
import styles from "./Pagination.module.scss";
import { useModal } from "@/app/context/ModalContext";
import { sizesData } from "@/app/data/templatePropertiesData";

const PaginationSize = () => {
  const { setModal, modal } = useModal();

  return (
    <ul className={styles.paginationContainer}>
      {Object.keys(sizesData).map((size) => (
        <li
          key={size}
          onClick={() =>
            setModal({
              ...modal,
              sizes: sizesData[size],
            })
          }
          className={`${styles.large} ${
            modal.sizes === sizesData[size] ? styles.active : ""
          }`}
        >
          {size}
        </li>
      ))}
    </ul>
  );
};

export default PaginationSize;
