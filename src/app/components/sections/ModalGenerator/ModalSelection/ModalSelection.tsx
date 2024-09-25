"use client";

import Pagination from "@/app/components/navigation/Pagination";
import styles from "./ModalSelection.module.scss";
import { modalData } from "@/app/data/modalData";
import Image from "next/image";
import { useState } from "react";

const ModalSelection = () => {
  const pageNumbers = [];
  const [currentPage, setCurrentPage] = useState("1");

  const modalPerPage = 12;

  const indexOfLastPost = Number(currentPage) * modalPerPage;
  const indexOfFirstPost = indexOfLastPost - modalPerPage;
  const currentModals = modalData.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(modalData.length / modalPerPage);
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i.toString());
  }

  return (
    <div className={styles.appearanceContainer}>
      <h3>
        <span>1</span>Choose your template
      </h3>

      <div className={styles.modalCardsContainer}>
        {currentModals.map((modal) => (
          <div className={styles.modalCard} key={modal.id}>
            <Image
              src={`/images/modals/${modal.id}.png`}
              width={200}
              height={200}
              alt=""
            />
            <button className={styles.templateSelectionButton}>
              <span>Select template</span>
            </button>
          </div>
        ))}
      </div>

      <Pagination
        selectionArray={pageNumbers}
        setSelection={setCurrentPage}
        selection={currentPage}
        size="small"
      />
    </div>
  );
};

export default ModalSelection;
