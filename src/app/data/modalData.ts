export interface ModalDataType {
  id: number;
  title: string;
  logo?: string;
  imageUrl?: string;
  contents: { content1: string };
  inputs?: { placeholder: string };
  buttons: {
    button1: string;
    button2: string;
  };
  sizes: string;
  color: { background: string; text: string };
}

export const modalData: ModalDataType[] = [
  {
    id: 1,
    title: "Security Code",
    logo: "logo",
    contents: {
      content1: "This code expires in 24 hours",
    },
    inputs: {
      placeholder: "Code",
    },
    buttons: {
      button1: "Cancel",
      button2: "Continue",
    },
    sizes: "w-[480px]",
    color: {
      background: "bg-violet-600 border-2 border-violet-600",
      text: "text-white",
    },
  },
  {
    id: 2,
    title: "Install local now",
    imageUrl: "http://localhost:3000/images/modal-images/modal2.png",
    contents: {
      content1: "We’ve gone native, try it!",
    },
    buttons: {
      button1: "Continue",
      button2: "Not now",
    },
    sizes: "scale-100",
    color: {
      background: "bg-violet-600 border-2 border-violet-600",
      text: "text-white",
    },
  },
  // {
  //   id: 3,
  //   container: "items-center flex-col py-10 px-16 w-[480px] bg-white",
  //   logo: "rounded-full w-[90px] h-[90px] bg-violet-600 mb-7",
  //   title: { content: "Security Code", style: "text-3xl font-bold mb-6" },
  //   contents: {
  //     content: "This code expires in 24 hours",
  //     style: "text-xl mb-10",
  //   },
  //   inputs: {
  //     placeholder: "Code",
  //   },
  //   buttons: {
  //     button1: {
  //       content: "Cancel",
  //       style: "border-2 border-gray-300",
  //     },
  //     button2: {
  //       content: "Continue",
  //       style: "bg-violet-600 text-white",
  //     },
  //     style: "flex justify-between w-full gap-4 text-base",
  //   },
  //   sizes: {
  //     small: "scale-75",
  //     medium: "scale-100",
  //     large: "scale-125",
  //   },
  // },
  // { id: 4 },
  // { id: 5 },
  // { id: 6 },
  // { id: 7 },
  // { id: 8 },
  // { id: 9 },
  // { id: 10 },
  // { id: 11 },
  // { id: 12 },
  // { id: 13 },
  // { id: 14 },
  // { id: 15 },
  // { id: 16 },
  // { id: 17 },
  // { id: 18 },
  // { id: 19 },
  // { id: 20 },
  // { id: 21 },
  // { id: 22 },
  // { id: 23 },
  // { id: 24 },
  // { id: 25 },
  // { id: 26 },
  // { id: 27 },
  // { id: 28 },
  // { id: 29 },
  // { id: 30 },
  // { id: 31 },
  // { id: 32 },
  // { id: 33 },
  // { id: 34 },
];
