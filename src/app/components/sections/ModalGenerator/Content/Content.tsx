import React from "react";
import styles from "./Content.module.scss";
import { useModal } from "@/app/context/ModalContext";

// Component
import Dropzone from "@ui/Dropzone";
import Input from "@ui/Input";

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
      <Input type="text" name="content2" />
      <Input type="text" name="input1" />
      <Input type="text" name="buttonAnchor" />
      <Input
        type="text"
        name="buttonAnchorLink"
        placeholder={`Hyperlink for ${modal.buttonAnchor} button`}
      />
      <Input type="text" name="button2" />
      <Input type="text" name="label1" />
      <Input type="text" name="label1b" />

      {modal.imageUrl && (
        <>
          <h4>Upload Image</h4> <Dropzone dropzone="imageUrl" />
        </>
      )}
    </div>
  );
};

export default Content;
