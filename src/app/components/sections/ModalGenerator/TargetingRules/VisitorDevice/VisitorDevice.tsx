import React, { useEffect, useState } from "react";
import styles from "./VisitorDevice.module.scss";
import { useModal } from "@/app/context/ModalContext";

// Icon
import IconDesktop from "@ui/icons/IconDesktop";
import IconMobile from "@ui/icons/IconMobile";

// Content
import Toggle from "@ui/Toggle";
import DeviceCheckbox from "@ui/DeviceCheckbox";

const VisitorDevice = () => {
  const [toggle, setToggle] = useState(false);
  const [device, setDevice] = useState("desktop");
  const { setModal } = useModal();

  useEffect(() => {
    setModal((prev) => ({
      ...prev,
      device: toggle
        ? device === "desktop"
          ? "hidden sm:flex"
          : "sm:hidden"
        : "",
    }));
  }, [device, setModal, toggle]);

  return (
    <>
      <Toggle title="Visitor Device" checked={toggle} setToggle={setToggle} />

      <div
        className={`${styles.deviceSelectionContainer} ${
          toggle ? "h-[78px]" : "h-0"
        } `}
      >
        <label className={styles.devices}>
          <DeviceCheckbox id="mobile" setDevice={setDevice} device={device} />
          <IconMobile className={styles.iconDevices} />
          Mobile
        </label>

        <label className={styles.devices}>
          <DeviceCheckbox id="desktop" setDevice={setDevice} device={device} />
          <IconDesktop className={styles.iconDevices} />
          Desktop
        </label>
      </div>
    </>
  );
};

export default VisitorDevice;
