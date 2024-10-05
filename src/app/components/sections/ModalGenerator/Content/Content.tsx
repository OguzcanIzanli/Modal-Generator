import React from "react";
import styles from "./Content.module.scss";
import { useModal } from "@/app/context/ModalContext";

const Content = () => {
  const { modal, setModal } = useModal();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setModal((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.contentContainer}>
      <h3>
        <span>3</span>Content
      </h3>

      <h4>Edit your content</h4>

      {(modal.title || modal.title === "") && (
        <input
          type="text"
          name="title"
          value={modal.title}
          onChange={handleChange}
        />
      )}

      {(modal.content1 || modal.content1 === "") && (
        <input
          type="text"
          name="content1"
          value={modal.content1}
          onChange={handleChange}
        />
      )}

      {(modal.button1 || modal.button1 === "") && (
        <input
          type="text"
          name="button1"
          value={modal.button1}
          onChange={handleChange}
        />
      )}

      {(modal.button2 || modal.button2 === "") && (
        <input
          type="text"
          name="button2"
          value={modal.button2}
          onChange={handleChange}
        />
      )}
    </div>
  );
};

export default Content;
