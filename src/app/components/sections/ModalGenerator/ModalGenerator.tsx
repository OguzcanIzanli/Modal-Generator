"use client";

import React from "react";
import styles from "./ModalGenerator.module.scss";
import { useModal } from "../../../context/ModalContext";

// Component
import ModalSelection from "./ModalSelection";
import Appearance from "./Appearance";
import SettingsAndCode from "./SettingsAndCode";
import TemplateSelector from "./TemplateSelector";
import Content from "./Content";
import TargetingRules from "./TargetingRules";

const ModalGenerator = () => {
  const { modal } = useModal();
  return (
    <div id="modalGenerator" className={styles.modalGenerator}>
      <div className={styles.generatorTitle}>
        <h2>Modal Card Generator</h2>
        <p className={styles.generatorTitleContent}>
          Measure your return on email marketing efforts easier and faster by
          using the best online tools. Modal generator is ready to help you
          build an efficient email list!
        </p>
      </div>
      <ModalSelection />

      <div className={styles.generatorContainer}>
        <div className={styles.modalPropertiesSelectionContainer}>
          {modal.id ? (
            <>
              <Appearance />
              <Content />
              <TargetingRules />
              <SettingsAndCode />
            </>
          ) : (
            <></>
          )}
        </div>
        <div className={styles.modalPreviewContainer}>
          <TemplateSelector />
        </div>
      </div>
    </div>
  );
};

export default ModalGenerator;
