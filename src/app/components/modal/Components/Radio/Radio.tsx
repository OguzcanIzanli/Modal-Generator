"use client";

import { useModal } from "@/app/context/ModalContext";
import { ModalDataType } from "@/app/data/modalData";
import React, { useState } from "react";

interface RadioProps {
  modalData: ModalDataType;
}

const Radio: React.FC<RadioProps> = ({ modalData }) => {
  const { modal } = useModal();
  const [value, setValue] = useState<string | null>(null);

  return (
    <div className="flex flex-col">
      {modalData.radio.map((radio: ModalDataType) => (
        <div key={radio.label1} className="flex gap-2 mb-6">
          <input
            type="radio"
            id={radio.label1}
            value={radio.label1}
            onClick={(e) => setValue(e.currentTarget.value)}
            className="relative appearance-none shrink-0 mt-1 w-5 h-5 border-2 border-gray-400 rounded-full cursor-pointer"
          />
          {value === radio.label1 && (
            <div
              className={`absolute mt-1 w-5 h-5 rounded-full border-[7px] ${modal.color.borderColor}`}
            />
          )}
          <label
            className="flex flex-col cursor-pointer"
            htmlFor={radio.label1}
          >
            <span className="text-lg">{radio.label1}</span>
            <span className="text-sm text-gray-400">{radio.label2}</span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default Radio;
