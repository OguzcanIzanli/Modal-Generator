import React from "react";
import { ModalDataType } from "@/app/data/modalData";

interface RadioProps {
  radio: ModalDataType["radio"];
  color: ModalDataType["color"];
  sizes: ModalDataType["sizes"];
  handleRadioClick: (e: React.MouseEvent<HTMLInputElement>) => void;
  value: { radioSelection: string | null };
  flexDirection?: string;
}

const radioLabels = ["label1", "label2", "label3"];

const Radio: React.FC<RadioProps> = ({
  radio,
  value,
  handleRadioClick,
  color,
  sizes,
  flexDirection,
}) => {
  return (
    <div
      className={`flex text-left ${flexDirection} gap-6 ${
        radio && "mt-[6%]"
      } z-10`}
    >
      {radioLabels.map((item, index) =>
        radio?.[item as keyof typeof radio] ? (
          <div key={index} className="flex gap-2 relative">
            <input
              type="radio"
              id={radio[item as keyof typeof radio]}
              value={radio[item as keyof typeof radio]}
              onClick={handleRadioClick}
              className="appearance-none shrink-0 mt-1 w-5 h-5 border-2 border-gray-400 rounded-full cursor-pointer"
            />
            {value.radioSelection === radio[item as keyof typeof radio] && (
              <div
                className={`absolute mt-1 w-5 h-5 rounded-full border-[7px] ${color.borderColor}`}
              />
            )}
            <label
              className="flex flex-col cursor-pointer"
              htmlFor={radio[item as keyof typeof radio]}
            >
              <span
                className={`${
                  sizes === "w-[320px]"
                    ? "text-base"
                    : sizes === "w-[640px]"
                    ? "text-xl"
                    : "text-lg"
                }`}
              >
                {radio[item as keyof typeof radio]}
              </span>
              <span
                className={` text-gray-400 ${
                  sizes === "w-[320px]"
                    ? "text-xs"
                    : sizes === "w-[640px]"
                    ? "text-base"
                    : "text-sm"
                }`}
              >
                {radio[(item + "b") as keyof typeof radio]}
              </span>
            </label>
          </div>
        ) : null
      )}
    </div>
  );
};

export default Radio;
