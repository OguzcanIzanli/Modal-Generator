export interface ModalData {
  id: number;
  container: string;
  logo: string;
  title: { content: string; style: string };
  contents: { content: string; style: string };
  inputs: { placeholder: string; style: string };
  buttons: {
    button1: { content: string; style: string };
    button2: { content: string; style: string };
    style: string;
  };
  sizes: { small: string; medium: string; large: string };
}

export const modalData: ModalData[] = [
  {
    id: 1,
    container:
      "relative flex flex-col items-center shadow-[0_0_12px_rgba(0,0,0,0.25)] rounded-xl font-sans",
    logo: "rounded-full w-[90px] h-[90px] bg-violet-600 mb-7",
    title: { content: "Security Code", style: "text-3xl font-bold mb-6" },
    contents: {
      content: "This code expires in 24 hours",
      style: "text-xl mb-10",
    },
    inputs: {
      placeholder: "Code",
      style: "py-3 px-4 w-full border-2 border-gray-300 rounded-xl mb-8",
    },
    buttons: {
      button1: {
        content: "Cancel",
        style:
          "py-3 w-full rounded-xl border-2 border-gray-300 hover:scale-105 transition",
      },
      button2: {
        content: "Continue",
        style:
          "py-3 w-full bg-violet-600 rounded-xl text-white hover:scale-105 transition",
      },
      style: "flex justify-between w-full gap-4 text-base	",
    },
    sizes: { small: "", medium: "py-10 px-16 w-[480px]", large: "" },
  },
  // { id: 2 },
  // { id: 3 },
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
