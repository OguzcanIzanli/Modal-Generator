import React, { useEffect, useState } from "react";
import Toggle from "@/app/components/ui/Toggle";
import Input from "../../../../ui/Input";
import styles from "./TrafficSource.module.scss";
import { useModal } from "@/app/context/ModalContext";

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
