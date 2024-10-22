import { ModalDataType } from "@/app/data/modalData";
import React from "react";

interface LinkProps {
  link: ModalDataType["link"];
  sizes: ModalDataType["sizes"];
  handleClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const Link: React.FC<LinkProps> = ({ link, handleClick, sizes }) => {
  return (
    <>
      {(link?.link1 || link?.link2) && (
        <div
          className={`flex justify-between gap-4 w-full break-words text-wrap ${
            sizes === "w-[320px]"
              ? "text-xs"
              : sizes === "w-[640px]"
              ? "text-base"
              : "text-sm"
          }`}
        >
          {link?.link1 && (
            <a
              href={link.linkURL1}
              id={link.link1}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClick}
              className="text-black inline-block cursor-pointer mt-[4%]"
            >
              {link.link1}
            </a>
          )}
          {link?.link2 && (
            <a
              href={link.linkURL2}
              id={link.link2}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClick}
              className="text-black inline-block cursor-pointer mt-[4%]"
            >
              {link.link2}
            </a>
          )}
        </div>
      )}
    </>
  );
};

export default Link;
