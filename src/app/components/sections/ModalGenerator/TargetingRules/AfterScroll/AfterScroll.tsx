import React, { useEffect, useState } from "react";
import { useModal } from "@/app/context/ModalContext";
import styles from "./AfterScroll.module.scss";

// Component
import Input from "@ui/Input";
import Toggle from "@ui/Toggle";

const AfterScroll = () => {
  const [toggle, setToggle] = useState(false);

  const { setModal } = useModal();

  useEffect(() => {
    if (!toggle) {
      setModal((prev) => ({ ...prev, afterScroll: "" }));
    }
  }, [setModal, toggle]);

  return (
    <>
      <Toggle title={"After % Scroll"} checked={toggle} setToggle={setToggle} />
      <div
        className={`${styles.input} ${
          toggle ? "h-[52px] p-[2px]" : "h-0 px-[2px] py-0"
        }`}
      >
        <Input type="number" name="afterScroll" placeholder="Percent(%)" />
      </div>
    </>
  );
};

export default AfterScroll;
