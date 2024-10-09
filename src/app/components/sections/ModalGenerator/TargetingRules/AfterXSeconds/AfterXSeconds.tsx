import React, { useEffect, useState } from "react";
import { useModal } from "@/app/context/ModalContext";
import styles from "./AfterXSeconds.module.scss";

// Component
import Input from "@ui/Input";
import Toggle from "@ui/Toggle";

const AfterXSeconds = () => {
  const [toggle, setToggle] = useState(false);
  const { setModal } = useModal();

  useEffect(() => {
    if (!toggle) {
      setModal((prev) => ({ ...prev, afterSeconds: "" }));
    }
  }, [setModal, toggle]);

  return (
    <>
      <Toggle title="After X Seconds" checked={toggle} setToggle={setToggle} />
      <div
        className={`${styles.input} ${
          toggle ? "h-[52px] p-[2px]" : "h-0 px-[2px] py-0"
        }`}
      >
        <Input type="number" name="afterSeconds" placeholder="Seconds(s)" />
      </div>
    </>
  );
};

export default AfterXSeconds;
