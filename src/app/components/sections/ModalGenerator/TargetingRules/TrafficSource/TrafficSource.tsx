import React, { useEffect, useState } from "react";
import { useModal } from "@/app/context/ModalContext";
import styles from "./TrafficSource.module.scss";

// Component
import Input from "@ui/Input";
import Toggle from "@ui/Toggle";

const TrafficSource = () => {
  const [toggle, setToggle] = useState(false);
  const { setModal } = useModal();

  useEffect(() => {
    if (!toggle) {
      setModal((prev) => ({ ...prev, trafficSource: "" }));
    }
  }, [setModal, toggle]);

  return (
    <>
      <Toggle title="Traffic Source" checked={toggle} setToggle={setToggle} />
      <div
        className={`${styles.input} ${
          toggle ? "h-[52px] p-[2px]" : "h-0 px-[2px] py-0"
        }`}
      >
        <Input
          type="text"
          name="trafficSource"
          placeholder="Enter your traffic source domain"
        />
      </div>
    </>
  );
};

export default TrafficSource;
