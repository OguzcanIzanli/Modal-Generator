"use client";

import React from "react";
import Appearance from "./Appearance";
import styles from "./ModalGenerator.module.scss";
import ModalSelection from "./ModalSelection";
import EmbedCode from "../../modal/EmbedCode";
import { useModal } from "@/app/context/ModalContext";
import SettingsAndCode from "./SettingsAndCode";
import TemplateSelector from "../../modal/TemplateSelector";

const ModalGenerator = () => {
  const { modal } = useModal();
  return (
    <div className={styles.modalGenerator}>
      <div className={styles.generatorTitle}>
        <h2>Modal Card Generator</h2>
        <p className={styles.generatorTitleContent}>
          Measure your return on email marketing efforts easier and faster by
          using thebest online tools. Popupsmart is ready to help you build an
          efficient email list!
        </p>
      </div>
      <ModalSelection />

      <div className={styles.generatorContainer}>
        <div className={styles.modalPropertiesSelectionContainer}>
          <Appearance />
          <SettingsAndCode />
        </div>
        <div className={styles.modalPreviewContainer}>
          <TemplateSelector modalData={modal} />
        </div>
        <div>
          <EmbedCode />
        </div>
      </div>
    </div>
  );
};

export default ModalGenerator;
