import { ModalDataType } from "@/app/data/modalData";
import React from "react";

interface ButtonProps {
  button: ModalDataType["button"];
  handleClick: (e: React.MouseEvent<HTMLElement>) => void;
  color: ModalDataType["color"];
  sizes: ModalDataType["sizes"];
  flexDirection?: string;
}

const Button: React.FC<ButtonProps> = ({
  button,
  handleClick,
  color,
  sizes,
  flexDirection,
}) => {
  return (
    <>
      {(button?.button2 ||
        button?.buttonAnchor ||
        button?.buttonAnchor2 ||
        button?.buttonAnchor3) && (
        <div
          className={`flex gap-4 justify-between w-full break-words text-wrap mt-[6%] z-10 ${flexDirection} ${
            sizes === "w-[320px]"
              ? "text-sm"
              : sizes === "w-[640px]"
              ? "text-xl"
              : "text-lg"
          }`}
        >
          {button.button2 && (
            <button
              id={button.button2}
              onClick={handleClick}
              className="w-full py-3 rounded-xl hover:scale-105 active:scale-95 transition text-black bg-white border-2 border-gray-400"
            >
              {button.button2}
            </button>
          )}

          {button.buttonAnchor && (
            <a
              href={button.buttonAnchorLink}
              id={button.buttonAnchor}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClick}
              className={`w-full py-3 rounded-xl hover:scale-105 active:scale-95 transition text-center cursor-pointer border-2 border-gray-400 ${color.background} ${color.text}`}
            >
              {button.buttonAnchor}
            </a>
          )}

          {button.buttonAnchor2 && (
            <a
              href={button.buttonAnchorLink2}
              id={button.buttonAnchor2}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClick}
              className={`w-full py-3 rounded-xl hover:scale-105 active:scale-95 transition text-center cursor-pointer border-2 border-gray-400 ${color.background} ${color.text}`}
            >
              {button.buttonAnchor2}
            </a>
          )}

          {button.buttonAnchor3 && (
            <a
              href={button.buttonAnchorLink3}
              id={button.buttonAnchor3}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClick}
              className={`w-full py-3 rounded-xl hover:scale-105 active:scale-95 transition text-center cursor-pointer bg-white text-black ${color.borderColor}`}
            >
              {button.buttonAnchor3}
            </a>
          )}
        </div>
      )}
    </>
  );
};

export default Button;
