import React from "react";
import styles from "./Pagination.module.scss";
import { useModal } from "@/app/context/ModalContext";

interface SizesType {
  small: string;
  medium: string;
  large: string;
}

const PaginationSize = () => {
  const sizes: SizesType = {
    small: "scale-75",
    medium: "scale-100",
    large: "scale-125",
  };

  const { setModal, modal } = useModal();

  return (
    <ul className={styles.paginationContainer}>
      {Object.keys(sizes).map((item) => (
        <li
          onClick={() =>
            setModal({ ...modal, sizes: sizes[item as keyof SizesType] })
          }
          className={`${styles.large} ${
            modal.sizes === sizes[item as keyof SizesType] ? styles.active : ""
          }`}
          key={item}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default PaginationSize;
