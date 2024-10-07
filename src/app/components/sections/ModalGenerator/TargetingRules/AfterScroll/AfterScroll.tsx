import React, { useEffect, useState } from "react";
import Toggle from "@/app/components/ui/Toggle";
import Input from "../../../../ui/Input";
import styles from "./AfterScroll.module.scss";
import { useModal } from "@/app/context/ModalContext";

const AfterScroll = () => {
  const [toggle, setToggle] = useState(false);

  const { setModal } = useModal();

  useEffect(() => {
    if (!toggle) {
      setModal((prev) => ({ ...prev, afterScroll: 0 }));
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
        <Input type="number" name="afterScroll" />
      </div>
    </>
  );
};

export default AfterScroll;
