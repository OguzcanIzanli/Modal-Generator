/* eslint-disable @typescript-eslint/no-explicit-any */
export interface SizesDataType {
  small: string;
  medium: string;
  large: string;
  [key: string]: any;
}

export interface PositionDataType {
  position: string;
  slide: string;
}

export interface ColorDataType {
  background: string;
  borderColor: string;
  text: string;
  textBg: string;
}

export const sizesData: SizesDataType = {
  small: "w-[320px]",
  medium: "w-[480px]",
  large: "w-[640px]",
};

export const positionData: PositionDataType[] = [
  { position: "top-5 left-5", slide: "-translate-x-[120%]" },
  { position: "top-5 left-1/2 -translate-x-2/4", slide: "-translate-y-[120%]" },
  { position: "top-5 right-5", slide: "translate-x-[120%]" },
  {
    position: "left-5 bottom-1/2 translate-y-2/4",
    slide: "-translate-x-[120%]",
  },
  {
    position: "bottom-1/2 left-1/2 -translate-x-2/4 translate-y-2/4",
    slide: "translate-y-[500%]",
  },
  {
    position: "right-5 bottom-1/2 translate-y-2/4",
    slide: "translate-x-[120%]",
  },
  { position: "bottom-5 left-5", slide: "-translate-x-[120%]" },
  {
    position: "bottom-5 left-1/2 -translate-x-2/4",
    slide: "translate-y-[120%]",
  },
  { position: "bottom-5 right-5", slide: "translate-x-[120%]" },
];

export const colorData: ColorDataType[] = [
  {
    background: "bg-black",
    borderColor: "border-2 border-black",
    text: "text-white",
    textBg: "text-black",
  },
  {
    background: "bg-orange-600",
    borderColor: "border-2 border-orange-600",
    text: "text-white",
    textBg: "text-orange-600",
  },
  {
    background: "bg-violet-600",
    borderColor: "border-2 border-violet-600",
    text: "text-white",
    textBg: "text-violet-600",
  },
  {
    background: "bg-gray-600",
    borderColor: "border-2 border-gray-600",
    text: "text-white",
    textBg: "text-gray-600",
  },
  {
    background: "bg-gray-300",
    borderColor: "border-2 border-gray-400",
    text: "text-black",
    textBg: "text-black",
  },
  {
    background: "bg-white",
    borderColor: "border-2 border-gray-400",
    text: "text-black",
    textBg: "text-black",
  },
];
