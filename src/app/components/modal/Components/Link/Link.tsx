import { ModalDataType } from "@/app/data/modalData";
import React from "react";

interface LinkProps {
  link: ModalDataType["link"];
  handleClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const Link: React.FC<LinkProps> = ({ link, handleClick }) => {
  return (
    <>
      {(link?.link1 || link?.link2) && (
        <div className="flex justify-between gap-4 w-full text-base break-words text-wrap">
          {link?.link1 && (
            <a
              href={link.linkURL1}
              id={link.link1}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClick}
              className="text-black text-sm inline-block cursor-pointer mt-[6%]"
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
              className="text-black text-sm inline-block cursor-pointer mt-[6%]"
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
