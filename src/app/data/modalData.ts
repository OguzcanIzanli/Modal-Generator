export interface ModalDataType {
  id: number;
  container: string;
  logo?: string;
  images?: { url: string; style: string };
  title: { content: string; style: string };
  contents: { content: string; style: string };
  inputs?: { placeholder: string };
  buttons: {
    button1: { content: string; style: string };
    button2: { content: string; style: string };
    style: string;
  };
  sizes: string;
  color: { background: string; text: string };
}

export const modalData: ModalDataType[] = [
  {
    id: 1,
    container: "items-center flex-col py-10 px-16 w-[480px] bg-white",
    logo: "rounded-full w-[90px] h-[90px] mb-7",
    title: { content: "Security Code", style: "" },
    contents: {
      content: "This code expires in 24 hours",
      style: "text-xl mb-10",
    },
    inputs: {
      placeholder: "Code",
    },
    buttons: {
      button1: {
        content: "Cancel",
        style: "border-2 border-gray-300",
      },
      button2: {
        content: "Continue",
        style: "text-white",
      },
      style: "flex justify-between w-full gap-4 text-base",
    },
    sizes: "scale-100",
    color: { background: "bg-violet-600", text: "" },
  },
  {
    id: 2,
    container: "items-center flex-col w-[480px]",
    images: {
      url: "http://localhost:3000/images/modal-images/modal2.png",
      style: "w-full h-1/2 rounded-t-xl mb-10",
    },
    title: {
      content: "Install local now",
      style: "",
    },
    contents: {
      content: "We’ve gone native, try it!",
      style: "text-xl mb-10 px-16",
    },
    buttons: {
      button1: {
        content: "Continue",
        style: "text-white bg-violet-600",
      },
      button2: {
        content: "Not now",
        style: "border-2 border-gray-300 ",
      },
      style: "flex flex-col w-full gap-4 text-base pb-10 px-16",
    },
    sizes: "scale-100",
    color: { background: "bg-violet-600", text: "" },
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
