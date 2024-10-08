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
    slide: "translate-y-[400%]",
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
    background: "bg-black border-2",
    borderColor: "border-black",
    text: "text-white",
  },
  {
    background: "bg-orange-600 border-2",
    borderColor: "border-orange-600",
    text: "text-white",
  },
  {
    background: "bg-violet-600 border-2",
    borderColor: "border-violet-600",
    text: "text-white",
  },
  {
    background: "bg-gray-600 border-2",
    borderColor: "border-gray-600",
    text: "text-white",
  },
  {
    background: "bg-gray-300 border-2",
    borderColor: "border-gray-300",
    text: "text-black",
  },
  {
    background: "bg-white border-2",
    borderColor: "border-gray-300",
    text: "text-black",
  },
];
