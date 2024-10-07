import React from "react";
import styles from "./DeviceCheckbox.module.scss";

interface CheckboxProps {
  id: string;
  device: string;
  setDevice: (device: string) => void;
}

const DeviceCheckbox: React.FC<CheckboxProps> = ({ id, setDevice, device }) => {
  return (
    <div className={styles.checkboxContainer}>
      <input
        type="checkbox"
        id={id}
        checked={device === id ? true : false}
        onChange={() => setDevice(id)}
        className={styles.csscheckbox}
      />
      <label htmlFor={id} className={styles.customcheckbox}></label>
    </div>
  );
};

export default DeviceCheckbox;
