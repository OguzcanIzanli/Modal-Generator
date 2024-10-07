import React from "react";
import styles from "./TargetingRules.module.scss";
import VisitorDevice from "./VisitorDevice";
import AfterXSeconds from "./AfterXSeconds";
import AfterScroll from "./AfterScroll";

const TargetingRules = () => {
  return (
    <div className={styles.targetingRulesContainer}>
      <h3>
        <span>4</span>Targeting Rules
      </h3>
      <VisitorDevice />
      <AfterXSeconds />
      <AfterScroll />
    </div>
  );
};

export default TargetingRules;
