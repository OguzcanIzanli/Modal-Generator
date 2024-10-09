export interface SizesDataType {
  small: string;
  medium: string;
  large: string;
  [key: string]: any;
}

export interface ColorDataType {
  background: string;
  text: string;
}

export const sizesData: SizesDataType = {
  small: "w-[320px]",
  medium: "w-[480px]",
  large: "w-[640px]",
};

export const positionData: string[] = [
  "top-5 left-5",
  "top-5 left-1/2 -translate-x-2/4",
  "top-5 right-5",
  "left-5 bottom-1/2 translate-y-2/4",
  "bottom-1/2 left-1/2 -translate-x-2/4 translate-y-2/4",
  "right-5 bottom-1/2 translate-y-2/4",
  "bottom-5 left-5",
  "bottom-5 left-1/2 -translate-x-2/4",
  "bottom-5 right-5",
];

export const colorData: ColorDataType[] = [
  { background: "bg-black border-2 border-black", text: "text-white" },
  {
    background: "bg-orange-600 border-2 border-orange-600",
    text: "text-white",
  },
  {
    background: "bg-violet-600 border-2 border-violet-600",
    text: "text-white",
  },
  { background: "bg-gray-600 border-2 border-gray-600", text: "text-white" },
  { background: "bg-gray-300 border-2 border-gray-300", text: "text-black" },
  { background: "bg-white border-2 border-gray-300", text: "text-black" },
];
