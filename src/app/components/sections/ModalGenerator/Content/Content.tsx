import React from "react";
import styles from "./Content.module.scss";
import { useModal } from "@/app/context/ModalContext";
import Dropzone from "@/app/components/ui/Dropzone";
import Input from "@/app/components/ui/Input";

const Content = () => {
  const { modal } = useModal();

  return (
    <div className={styles.contentContainer}>
      <h3>
        <span>3</span>Content
      </h3>

      <h4>Edit your content</h4>

      <Input name="title" content={modal.title} />
      <Input name="content1" content={modal.content1} />
      <Input name="button1" content={modal.button1} />
      <Input name="button2" content={modal.button2} />

      {modal.imageUrl && (
        <>
          <h4>Upload Image</h4> <Dropzone dropzone="imageUrl" />
        </>
      )}
    </div>
  );
};

export default Content;
