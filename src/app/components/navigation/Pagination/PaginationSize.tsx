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
    small: "w-[320px]",
    medium: "w-[480px]",
    large: "w-[640px]",
  };

  const { setModal, modal } = useModal();

  return (
    <ul className={styles.paginationContainer}>
      {Object.keys(sizes).map((item) => (
        <li
          key={item}
          onClick={() =>
            setModal({ ...modal, sizes: sizes[item as keyof SizesType] })
          }
          className={`${styles.large} ${
            modal.sizes === sizes[item as keyof SizesType] ? styles.active : ""
          }`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default PaginationSize;
