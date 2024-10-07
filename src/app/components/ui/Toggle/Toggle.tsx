import React from "react";
import styles from "./Toggle.module.scss";

interface ToggleProps {
  title: string;
  checked: boolean;
  setToggle: (checkbox: boolean) => void;
}

const Toggle: React.FC<ToggleProps> = ({ title, checked, setToggle }) => {
  const handleToggleChange = () => {
    setToggle(!checked);
  };

  return (
    <div className={styles.toggleContainer}>
      <div className={styles.toggleTitle}>{title}</div>
      <input
        type="checkbox"
        id="switch"
        className={styles.toggleInput}
        checked={checked}
        onChange={handleToggleChange}
      />
    </div>
  );
};

export default Toggle;
