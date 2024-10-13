import React from "react";
import { useModal } from "@/app/context/ModalContext";
import styles from "./Input.module.scss";

interface InputProps {
  type: "text" | "number";
  name: string;
  name2?: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ type, name, name2, placeholder }) => {
  const { modal, setModal } = useModal();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setModal((prev) => ({
      ...prev,
      [name2 || name]: name2 ? { ...prev[name2], [name]: value } : value,
    }));
  };

  const inputValue = name2 ? modal[name2]?.[name] : modal[name];

  return (
    <div>
      {inputValue !== undefined && (
        <input
          type={type}
          name={name}
          value={inputValue}
          placeholder={placeholder}
          onChange={handleChange}
          className={styles.input}
        />
      )}
    </div>
  );
};

export default Input;
