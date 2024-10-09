import React from "react";
import { useModal } from "@/app/context/ModalContext";
import styles from "./Input.module.scss";

interface InputProps {
  name: string;
  type: "text" | "number";
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ name, type, placeholder }) => {
  const { modal, setModal } = useModal();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setModal((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      {modal[name] !== undefined && (
        <input
          type={type}
          name={name}
          value={modal[name]}
          placeholder={placeholder}
          onChange={handleChange}
          className={styles.input}
        />
      )}
    </div>
  );
};

export default Input;
