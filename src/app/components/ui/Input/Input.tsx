import React from "react";
import { useModal } from "@/app/context/ModalContext";
import styles from "./Input.module.scss";

interface InputProps {
  name: string;
  content: string | null;
}

const Input: React.FC<InputProps> = ({ name, content }) => {
  const { setModal } = useModal();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setModal((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      {(content || content === "") && (
        <input
          type="text"
          name={name}
          value={content}
          onChange={handleChange}
          className={styles.input}
        />
      )}
    </div>
  );
};

export default Input;
