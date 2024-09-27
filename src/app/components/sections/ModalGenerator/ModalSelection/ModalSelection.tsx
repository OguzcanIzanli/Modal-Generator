"use client";

import React from "react";
import PaginationPage from "@/app/components/navigation/Pagination/PaginationPage";
import styles from "./ModalSelection.module.scss";
import { modalData } from "@/app/data/modalData";
import Image from "next/image";
import { useState } from "react";
import { useModal } from "@/app/context/ModalContext";

const ModalSelection = () => {
  const pageNumbers = [];
  const [currentPage, setCurrentPage] = useState(1);
  const { setModal } = useModal();

  const modalPerPage = 12;

  const indexOfLastPost = Number(currentPage) * modalPerPage;
  const indexOfFirstPost = indexOfLastPost - modalPerPage;
  const currentModals = modalData.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(modalData.length / modalPerPage);
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
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
            <button
              onClick={() => setModal(modal)}
              className={styles.templateSelectionButton}
            >
              <span>Select template</span>
            </button>
          </div>
        ))}
      </div>

      <PaginationPage
        selectionArray={pageNumbers}
        setSelection={setCurrentPage}
        selection={currentPage}
        size="small"
      />
    </div>
  );
};

export default ModalSelection;
