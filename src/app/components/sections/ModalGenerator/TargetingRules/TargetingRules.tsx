import React from "react";
import styles from "./TargetingRules.module.scss";
import VisitorDevice from "./VisitorDevice";

const TargetingRules = () => {
  return (
    <div className={styles.targetingRulesContainer}>
      <h3>
        <span>4</span>Targeting Rules
      </h3>
      <VisitorDevice />
    </div>
  );
};

export default TargetingRules;
