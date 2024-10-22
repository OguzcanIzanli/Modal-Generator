import React from "react";
import { ModalDataType } from "@/app/data/modalData";

interface InputProps {
  input: ModalDataType["input"];
  sizes: ModalDataType["sizes"];
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: Record<"name" | "email" | "phone", string | number | null>;
  color?: ModalDataType["color"];
}

const Input: React.FC<InputProps> = ({
  input,
  value,
  handleInputChange,
  color,
  sizes,
}) => {
  return (
    <div className="w-full z-10">
      {Object.keys(input ?? {}).map((item) => (
        <div key={item}>
          {input?.[item as keyof typeof value] && (
            <input
              type={item === "phone" ? "number" : "text"}
              value={value?.[item as keyof typeof value] || ""}
              name={item}
              onChange={handleInputChange}
              placeholder={input[item as keyof typeof value]}
              className={`py-3 px-4 w-full rounded-xl mt-[6%] border-2 border-gray-400 text-left outline-none ${
                sizes === "w-[320px]"
                  ? "text-base"
                  : sizes === "w-[640px]"
                  ? "text-xl"
                  : "text-lg"
              } ${color?.background} ${color?.text}`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Input;
