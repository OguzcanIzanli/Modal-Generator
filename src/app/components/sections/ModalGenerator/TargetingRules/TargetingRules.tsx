import React from "react";
import styles from "./TargetingRules.module.scss";

// Component
import VisitorDevice from "./VisitorDevice";
import AfterXSeconds from "./AfterXSeconds";
import AfterScroll from "./AfterScroll";
import TrafficSource from "./TrafficSource";

const TargetingRules = () => {
  return (
    <div className={styles.targetingRulesContainer}>
      <h3>
        <span>4</span>Targeting Rules
      </h3>
      <VisitorDevice />
      <AfterXSeconds />
      <AfterScroll />
      <TrafficSource />
    </div>
  );
};

export default TargetingRules;
