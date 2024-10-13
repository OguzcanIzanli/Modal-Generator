import React from "react";
import styles from "./Content.module.scss";
import { useModal } from "@/app/context/ModalContext";

// Component
import Dropzone from "@ui/Dropzone";
import Input from "@ui/Input";

const Content = () => {
  const { modal } = useModal();
  const inputCategories = ["content", "radio", "input"];

  return (
    <div className={styles.contentContainer}>
      <h3>
        <span>3</span>Content
      </h3>

      <h4>Edit your content</h4>

      {/* Title  */}
      <Input type="text" name="title" />

      {/* Content, Radio, Input  */}
      {inputCategories.map((category) =>
        Object.keys(modal[category] ?? {}).map((item: string) => (
          <Input key={item} type="text" name={item} name2={category} />
        ))
      )}

      {/* Button  */}
      <Input type="text" name="buttonAnchor" name2="button" />
      <Input
        type="text"
        name="buttonAnchorLink"
        name2="button"
        placeholder={`Hyperlink for ${
          modal.button?.buttonAnchor ? modal.button.buttonAnchor : ""
        } button`}
      />
      <Input type="text" name="buttonAnchor2" name2="button" />
      <Input
        type="text"
        name="buttonAnchorLink2"
        name2="button"
        placeholder={`Hyperlink for ${modal.button?.buttonAnchor2} button`}
      />
      <Input type="text" name="buttonAnchor3" name2="button" />
      <Input
        type="text"
        name="buttonAnchorLink3"
        name2="button"
        placeholder={`Hyperlink for ${modal.button?.buttonAnchor3} button`}
      />
      <Input type="text" name="button2" name2="button" />

      {/* Link */}
      <Input type="text" name="link1" name2="link" />
      <Input
        type="text"
        name="linkURL1"
        name2="link"
        placeholder={`Hyperlink for ${modal.link?.link1} button`}
      />
      <Input type="text" name="link2" name2="link" />
      <Input
        type="text"
        name="linkURL2"
        name2="link"
        placeholder={`Hyperlink for ${modal.link?.link2} button`}
      />

      {/* Checkbox  */}
      <Input type="text" name="checkbox1" />

      {/* Feedback  */}
      <Input
        type="text"
        name="feedbackURL1"
        placeholder="1st feedback"
        name2="feedback"
      />
      <Input
        type="text"
        name="feedbackURL2"
        placeholder="2nd feedback"
        name2="feedback"
      />
      <Input
        type="text"
        name="feedbackURL3"
        placeholder="3rd feedback"
        name2="feedback"
      />
      <Input
        type="text"
        name="feedbackURL4"
        placeholder="4th feedback"
        name2="feedback"
      />
      <Input
        type="text"
        name="feedbackURL5"
        placeholder="5th feedback"
        name2="feedback"
      />

      {modal.imageUrl && (
        <>
          <h4>Upload Image</h4> <Dropzone dropzone="imageUrl" />
        </>
      )}
    </div>
  );
};

export default Content;
