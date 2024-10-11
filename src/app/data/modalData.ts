/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ModalDataType {
  id: string | number;
  title: string;
  logoUrl?: string;
  imageUrl?: string;
  content1: string;
  content2?: string;
  buttonAnchor?: string;
  buttonAnchorLink?: string;
  buttonAnchor2?: string;
  buttonAnchorLink2?: string;
  buttonAnchor3?: string;
  buttonAnchorLink3?: string;
  button2?: string;
  input1?: string;
  input2?: string;
  checkbox1?: string;
  label1?: string;
  label1b?: string;
  label2?: string;
  label2b?: string;
  label3?: string;
  label3b?: string;
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
    position: { position: "bottom-5 right-5", slide: "translate-x-[120%]" },
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
    id: 3,
    title: "Choose best for you",
    content1: "Only pay for the capacity that you use.",
    buttonAnchor: "Continue",
    buttonAnchorLink: "",
    button2: "Cancel",
    label1: "Starter",
    label1b: "1 free (then $15 per meember / month)",
    label2: "Pro",
    label2b: "$19 per member/month",
    label3: "Business",
    label3b: "$29 per member/month",
    sizes: "w-[480px]",
    position: { position: "bottom-5 right-5", slide: "translate-x-[120%]" },
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
    id: 4,
    title: "Delete your profile",
    logoUrl:
      "https://firebasestorage.googleapis.com/v0/b/dropzone-cd38e.appspot.com/o/images%2Fdelete.png?alt=media&token=059d29f4-f8a0-48c6-ac3a-5d82673918cf",
    content1: "Your profile will be automatically deleted after 1 month.",
    content2: "You won’t be able to access to your profile after 30.08.2021.",
    buttonAnchor: "Delete my profile",
    buttonAnchorLink: "",
    button2: "Cancel",
    sizes: "w-[480px]",
    position: { position: "bottom-5 right-5", slide: "translate-x-[120%]" },
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
    id: 5,
    title: "The file is on it's way",
    content1: "You’ll get an notified when the receiver has opened the email.",
    buttonAnchor: "Go to dashboard",
    buttonAnchorLink: "",
    sizes: "w-[480px]",
    position: { position: "bottom-5 right-5", slide: "translate-x-[120%]" },
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
    id: 6,
    title: "Join our mail list",
    logoUrl:
      "https://firebasestorage.googleapis.com/v0/b/dropzone-cd38e.appspot.com/o/images%2Fpercentage.png?alt=media&token=0fba65d3-8460-4abb-97e8-63d03962f265",
    content1: "Save up to 30% of your next order",
    buttonAnchor: "Join now",
    buttonAnchorLink: "",
    button2: "Later",
    input1: "Enter your email",
    sizes: "w-[480px]",
    position: { position: "bottom-5 right-5", slide: "translate-x-[120%]" },
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
    id: 7,
    title: "Hi, stranger",
    content1: "This code expires in 24 hours",
    buttonAnchor: "Log In",
    buttonAnchorLink: "",
    buttonAnchor2: "Sign up now",
    buttonAnchorLink2: "",
    sizes: "w-[480px]",
    position: { position: "bottom-5 right-5", slide: "translate-x-[120%]" },
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
    id: 8,
    title: "Subscribe to our newsletter",
    content1: "Receive the flash news in your inbox.",
    buttonAnchor: "Sign up now",
    buttonAnchorLink: "",
    input1: "Enter your email",
    checkbox1: "By subscribe this form I agree to Privacy Policy.",
    sizes: "w-[480px]",
    position: { position: "bottom-5 right-5", slide: "translate-x-[120%]" },
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
    id: 9,
    title: "Hello stranger",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/dropzone-cd38e.appspot.com/o/images%2Fmodal9.png?alt=media&token=8d4ee152-7ca7-4691-8c0a-2ab18f84f11a",
    content1: "Sign up now and get 30% discount",
    buttonAnchor: "Sign up",
    buttonAnchorLink: "",
    buttonAnchor2: "Already have an account?",
    buttonAnchorLink2: "",
    input1: "Enter Full name",
    input2: "Enter your email",
    sizes: "w-[480px]",
    position: { position: "bottom-5 right-5", slide: "translate-x-[120%]" },
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
    id: 10,
    title: "Sign up",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/dropzone-cd38e.appspot.com/o/images%2Fmodal10.png?alt=media&token=7a7ee844-84c9-486e-bd82-b10cbcb5c0b9",
    content1: "Join new adventure",
    buttonAnchor: "Sign up",
    buttonAnchorLink: "",
    buttonAnchor2: "Forgot password",
    buttonAnchorLink2: "",
    buttonAnchor3: "Log In",
    buttonAnchorLink3: "",
    input1: "Enter Full name",
    input2: "Enter your email",
    sizes: "w-[480px]",
    position: { position: "bottom-5 right-5", slide: "translate-x-[120%]" },
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
    id: 11,
    title: "Check your email",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/dropzone-cd38e.appspot.com/o/images%2Fmailbox.png?alt=media&token=6a7c6cf8-d569-4e6a-ba0d-a505cd3808da",
    content1:
      "Once you deletet your account, you’ll lose all data associatted with it.",
    buttonAnchor: "Sign up",
    buttonAnchorLink: "",
    buttonAnchor2: "Already have an account?",
    buttonAnchorLink2: "",
    input1: "Enter your email",
    sizes: "w-[480px]",
    position: { position: "bottom-5 right-5", slide: "translate-x-[120%]" },
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
    id: 12,
    title: "Sign up",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/dropzone-cd38e.appspot.com/o/images%2Fmodal12.png?alt=media&token=e8af9335-53ea-4b69-8565-3c554124572b",
    content1: "Join new adventure",
    buttonAnchor: "Sign up",
    buttonAnchorLink: "",
    buttonAnchor2: "Forgot password",
    buttonAnchorLink2: "",
    buttonAnchor3: "Log In",
    buttonAnchorLink3: "",
    input1: "Enter Full name",
    input2: "Enter your email",
    sizes: "w-[480px]",
    position: { position: "bottom-5 right-5", slide: "translate-x-[120%]" },
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
    id: 13,
    title: "Welcome to talk",
    logoUrl:
      "https://firebasestorage.googleapis.com/v0/b/dropzone-cd38e.appspot.com/o/images%2Fsmile.png?alt=media&token=ccac9450-a311-4ec7-a16e-78fdef9e9a20",
    content1:
      "Send friends photos, videos, locations, songs, voice messages, and more.",
    buttonAnchor: "Let’s get started",
    buttonAnchorLink: "",
    sizes: "w-[480px]",
    position: { position: "bottom-5 right-5", slide: "translate-x-[120%]" },
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
    id: 14,
    title: "Jenny Yelriver",
    logoUrl:
      "https://firebasestorage.googleapis.com/v0/b/dropzone-cd38e.appspot.com/o/images%2Fpp.png?alt=media&token=a9f98998-ef44-4cf1-9d04-ca5374523e18",
    content1: "@jennyyelriver",
    content2:
      "Duis eget elit erat. Aliam euismod, mauris quis tristique feugiat, elit diam tincidunt erat, nec fringilla odio orci dapibu magna. Vestibulum ultrices sem nec ex efficitur aliquam.",
    button2: "10 SEP 2021 - 16:33 PM",
    sizes: "w-[480px]",
    position: { position: "bottom-5 right-5", slide: "translate-x-[120%]" },
    color: {
      background: "bg-white border-2",
      borderColor: "border-gray-400",
      text: "text-black",
    },
    device: "",
    afterSeconds: "",
    afterScroll: "",
    trafficSource: "",
    webhookUrl: "",
  },
  {
    id: 15,
    title: "Let’s feedback",
    logoUrl:
      "https://firebasestorage.googleapis.com/v0/b/dropzone-cd38e.appspot.com/o/images%2Fsad.png?alt=media&token=4e334908-1699-46ee-9037-9220b34a6c73",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/dropzone-cd38e.appspot.com/o/images%2Fconfused.png?alt=media&token=481e2e62-58f5-48f4-aed6-9917edb4975b",
    content1:
      "https://firebasestorage.googleapis.com/v0/b/dropzone-cd38e.appspot.com/o/images%2Fhappy.png?alt=media&token=8f11f8f7-6f91-4a3c-b844-e957527fcda8",
    content2:
      "https://firebasestorage.googleapis.com/v0/b/dropzone-cd38e.appspot.com/o/images%2Fhappy-face.png?alt=media&token=1852b6a1-de1b-464d-b564-420023fe1e39",
    button2:
      "https://firebasestorage.googleapis.com/v0/b/dropzone-cd38e.appspot.com/o/images%2Fhappy-face2.png?alt=media&token=435b6971-7c9d-4d17-a06a-d5555a30e2de",
    sizes: "w-[480px]",
    position: { position: "bottom-5 right-5", slide: "translate-x-[120%]" },
    color: {
      background: "bg-white border-2",
      borderColor: "border-gray-400",
      text: "text-black",
    },
    device: "",
    afterSeconds: "",
    afterScroll: "",
    trafficSource: "",
    webhookUrl: "",
  },
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
