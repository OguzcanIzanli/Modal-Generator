import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: "small" | "medium" | "large";
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = "medium",
  className = "",
  ...rest
}) => {
  const buttonClass = `${styles.button} ${styles[size]} ${className}`.trim();

  return (
    <button className={buttonClass} {...rest}>
      {children}
    </button>
  );
};

export default Button;
