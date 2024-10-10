/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ModalDataType {
  id: string | number;
  title: string;
  logoUrl?: string;
  imageUrl?: string;
  content1: string;
  content2?: string;
  input1?: string;
  buttonAnchor: string;
  buttonAnchorLink: string;
  button2: string;
  label1?: string;
  label1b?: string;
  sizes: string;
  position: { position: string; slide: string };
  color: { background: string; borderColor: string; text: string };
  device: string;
  afterSeconds: string;
  afterScroll: string;
  trafficSource: string;
  webhookUrl: string;
  [key: string]: any;
}

export const modalData: ModalDataType[] = [
  {
    id: 1,
    title: "Security Code",
    logoUrl:
      "https://firebasestorage.googleapis.com/v0/b/dropzone-cd38e.appspot.com/o/images%2FSecure.png?alt=media&token=9b57cafe-8462-44a6-bee6-536899822a85",
    content1: "This code expires in 24 hours",
    content2: "Code",
    buttonAnchor: "Continue",
    buttonAnchorLink: "",
    button2: "Cancel",
    sizes: "w-[480px]",
    position: { position: "right-5 bottom-5", slide: "translate-x-[120%]" },
    color: {
      background: "bg-violet-600 border-2",
      borderColor: "border-violet-600",
      text: "text-white",
    },
    device: "",
    afterSeconds: "",
    afterScroll: "",
    trafficSource: "",
    webhookUrl: "",
  },
  {
    id: 2,
    title: "Install local now",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/dropzone-cd38e.appspot.com/o/images%2Fmodal2.png?alt=media&token=16a564ba-c07d-4c04-93b5-93adda03c245",
    content1: "We’ve gone native, try it!",
    buttonAnchor: "Continue",
    buttonAnchorLink: "",
    button2: "Not now",
    sizes: "w-[480px]",
    position: { position: "bottom-5 right-5", slide: "translate-x-[120%]" },
    color: {
      background: "bg-violet-600 border-2",
      borderColor: " border-violet-600",
      text: "text-white",
    },
    device: "",
    afterSeconds: "",
    afterScroll: "",
    trafficSource: "",
    webhookUrl: "",
  },
  {
    id: 3,
    title: "Choose best for you",
    content1: "Only pay for the capacity that you use.",
    buttonAnchor: "Continue",
    buttonAnchorLink: "",
    button2: "Cancel",
    label1: "Starter",
    label1b: "1 free (then $15 per meember / month)",
    sizes: "w-[480px]",
    position: { position: "right-5 bottom-5", slide: "translate-x-[120%]" },
    color: {
      background: "bg-violet-600 border-2 ",
      borderColor: "border-violet-600",
      text: "text-white",
    },
    device: "",
    afterSeconds: "",
    afterScroll: "",
    trafficSource: "",
    webhookUrl: "",
  },
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
