import React, { useEffect, useState } from "react";
import Toggle from "@/app/components/ui/Toggle";
import Input from "../../../../ui/Input";
import styles from "./AfterXSeconds.module.scss";
import { useModal } from "@/app/context/ModalContext";

const AfterXSeconds = () => {
  const [toggle, setToggle] = useState(false);
  const { setModal } = useModal();

  useEffect(() => {
    if (!toggle) {
      setModal((prev) => ({ ...prev, afterSeconds: 0 }));
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
        <Input type="number" name="afterSeconds" />
      </div>
    </>
  );
};

export default AfterXSeconds;
