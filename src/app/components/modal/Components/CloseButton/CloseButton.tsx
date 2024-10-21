import IconClose from "../../../ui/icons/IconClose";
import React from "react";

interface CloseButtonProps {
  handleClick: (e: React.MouseEvent<HTMLElement>) => void;
  color?: string;
}

const CloseButton: React.FC<CloseButtonProps> = ({ color, handleClick }) => {
  return (
    <>
      <button
        id="Exit button"
        onClick={handleClick}
        className={`absolute text-3xl top-6 right-6 rounded-full hover:scale-125 active:scale-95 z-10 transition-transform duration-1000 ease-out text-black ${color}`}
      >
        <IconClose />
      </button>
    </>
  );
};

export default CloseButton;
