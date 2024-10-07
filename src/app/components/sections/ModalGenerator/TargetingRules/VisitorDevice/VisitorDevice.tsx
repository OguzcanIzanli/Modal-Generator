import React, { useEffect, useState } from "react";
import styles from "./VisitorDevice.module.scss";
import Toggle from "@/app/components/ui/Toggle";
import IconMobile from "@/app/components/ui/icons/IconMobile";
import IconDesktop from "@/app/components/ui/icons/IconDesktop";
import DeviceCheckbox from "@/app/components/ui/DeviceCheckbox";
import { useModal } from "@/app/context/ModalContext";

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
          toggle ? "h-[48px]" : "h-0"
        } `}
      >
        <div className={styles.devices}>
          <DeviceCheckbox id="mobile" setDevice={setDevice} device={device} />
          <IconMobile className={styles.iconDevices} />
          Mobile
        </div>

        <div className={styles.devices}>
          <DeviceCheckbox id="desktop" setDevice={setDevice} device={device} />
          <IconDesktop className={styles.iconDevices} />
          Desktop
        </div>
      </div>
    </>
  );
};

export default VisitorDevice;
