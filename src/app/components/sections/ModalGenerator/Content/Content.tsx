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

      <Input type="text" name="title" />
      <Input type="text" name="content1" />
      <Input type="text" name="button1" />
      <Input type="text" name="button2" />

      {modal.imageUrl && (
        <>
          <h4>Upload Image</h4> <Dropzone dropzone="imageUrl" />
        </>
      )}
    </div>
  );
};

export default Content;
