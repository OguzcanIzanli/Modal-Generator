/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ModalDataType {
  id: string | number;
  template: string;
  title?: string;
  // Logo - Image
  image?: { logoUrl?: string; imageUrl?: string };
  // Content
  content?: { content1?: string; content2?: string; content3?: string };
  // Button
  button?: {
    buttonAnchor?: string;
    buttonAnchorLink?: string;
    buttonAnchor2?: string;
    buttonAnchorLink2?: string;
    buttonAnchor3?: string;
    buttonAnchorLink3?: string;
    button2?: string;
  };
  // Link
  link?: {
    link1?: string;
    linkURL1?: string;
    link2?: string;
    linkURL2?: string;
  };
  // Checkbox
  checkbox1?: string;
  // Input
  input?: { name?: string; email?: string; phone?: string; message?: string };
  // Radio
  radio?: {
    label1?: string;
    label1b?: string;
    label2?: string;
    label2b?: string;
    label3?: string;
    label3b?: string;
  };
  // Emoji
  feedback?: {
    feedbackURL1?: string;
    feedbackURL1Label?: string;
    feedbackURL2?: string;
    feedbackURL2Label?: string;
    feedbackURL3?: string;
    feedbackURL3Label?: string;
    feedbackURL4?: string;
    feedbackURL4Label?: string;
    feedbackURL5?: string;
    feedbackURL5Label?: string;
  };
  // Size
  sizes: string;
  // Position
  position: { position: string; slide: string };
  // Color
  color: {
    background: string;
    borderColor: string;
    text: string;
    textBg?: string;
  };
  // Mobile or Desktop
  device: string;
  // After X Seconds
  afterSeconds: string;
  // After Scroll
  afterScroll: string;
  // Traffic Source
  trafficSource: string;
  // Webhook
  webhookUrl: string;
  [key: string]: any;
}

export const modalData: ModalDataType[] = [
  {
    id: 1,
    template: "Template1",
    title: "Security Code",
    image: {
      logoUrl:
        "https://firebasestorage.googleapis.com/v0/b/dropzone-cd38e.appspot.com/o/images%2FSecure.png?alt=media&token=9b57cafe-8462-44a6-bee6-536899822a85",
    },
    content: { content1: "This code expires in 24 hours", content2: "Code" },
    button: {
      buttonAnchor: "Continue",
      buttonAnchorLink: "",
      button2: "Cancel",
    },
    sizes: "w-[480px]",
    position: { position: "bottom-5 right-5", slide: "translate-x-[120%]" },
    color: {
      background: "bg-violet-600",
      borderColor: "border-2 border-violet-600",
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
    template: "Template2",
    title: "Install local now",
    image: {
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/dropzone-cd38e.appspot.com/o/images%2Fmodal2.png?alt=media&token=16a564ba-c07d-4c04-93b5-93adda03c245",
    },
    content: { content1: "We’ve gone native, try it!" },
    button: {
      buttonAnchor: "Continue",
      buttonAnchorLink: "",
      button2: "Not now",
    },
    sizes: "w-[480px]",
    position: { position: "bottom-5 right-5", slide: "translate-x-[120%]" },
    color: {
      background: "bg-violet-600",
      borderColor: "border-2 border-violet-600",
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
    template: "Template1",
    title: "Choose best for you",
    content: { content1: "Only pay for the capacity that you use." },
    button: {
      buttonAnchor: "Continue",
      buttonAnchorLink: "",
      button2: "Cancel",
    },
    radio: {
      label1: "Starter",
      label1b: "1 free (then $15 per meember / month)",
      label2: "Pro",
      label2b: "$19 per member/month",
      label3: "Business",
      label3b: "$29 per member/month",
    },
    sizes: "w-[480px]",
    position: { position: "bottom-5 right-5", slide: "translate-x-[120%]" },
    color: {
      background: "bg-violet-600",
      borderColor: "border-2 border-violet-600",
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
    template: "Template1",
    title: "Delete your profile",
    image: {
      logoUrl:
        "https://firebasestorage.googleapis.com/v0/b/dropzone-cd38e.appspot.com/o/images%2Fdelete.png?alt=media&token=059d29f4-f8a0-48c6-ac3a-5d82673918cf",
    },
    content: {
      content1: "Your profile will be automatically deleted after 1 month.",
      content3: "You won’t be able to access to your profile after 30.08.2021.",
    },
    button: {
      buttonAnchor: "Delete my profile",
      buttonAnchorLink: "",
      button2: "Cancel",
    },
    sizes: "w-[480px]",
    position: { position: "bottom-5 right-5", slide: "translate-x-[120%]" },
    color: {
      background: "bg-violet-600",
      borderColor: "border-2 border-violet-600",
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
    template: "Template1",
    title: "The file is on it's way",
    content: {
      content1:
        "You’ll get an notified when the receiver has opened the email.",
    },
    button: { buttonAnchor: "Go to dashboard", buttonAnchorLink: "" },
    sizes: "w-[480px]",
    position: { position: "bottom-5 right-5", slide: "translate-x-[120%]" },
    color: {
      background: "bg-violet-600",
      borderColor: "border-2 border-violet-600",
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
    template: "Template1",
    title: "Join our mail list",
    image: {
      logoUrl:
        "https://firebasestorage.googleapis.com/v0/b/dropzone-cd38e.appspot.com/o/images%2Fpercentage.png?alt=media&token=0fba65d3-8460-4abb-97e8-63d03962f265",
    },
    content: { content1: "Save up to 30% of your next order" },
    button: {
      buttonAnchor: "Join now",
      buttonAnchorLink: "",
      button2: "Later",
    },
    input: { email: "Enter your email" },
    sizes: "w-[480px]",
    position: { position: "bottom-5 right-5", slide: "translate-x-[120%]" },
    color: {
      background: "bg-violet-600",
      borderColor: "border-2 border-violet-600",
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
    template: "Template3",
    title: "Sign up for our newsletter",
    image: {
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/dropzone-cd38e.appspot.com/o/images%2Fmodal26bg.png?alt=media&token=67ecc25d-77be-465b-8c35-6e4afdf31b52",
    },
    content: {
      content1: "GET 30% OF DISCOUNT",
      content2: "Be the first to learn about new trends and offers.",
    },
    button: {
      buttonAnchor: "Subscribe",
      buttonAnchorLink: "",
    },
    radio: {
      label1: "Women",
      label2: "Men",
    },
    input: { email: "Enter your email address" },
    sizes: "w-[480px]",
    position: { position: "bottom-5 right-5", slide: "translate-x-[120%]" },
    color: {
      background: "bg-violet-600",
      borderColor: "border-2 border-violet-600",
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
    template: "Template6",
    title: "Subscribe to our newsletter",
    content: { content1: "Receive the flash news in your inbox." },
    button: { buttonAnchor: "Sign up now", buttonAnchorLink: "" },
    input: { email: "Enter your email" },
    checkbox1: "By subscribe this form I agree to Privacy Policy.",
    sizes: "w-[480px]",
    position: { position: "bottom-5 right-5", slide: "translate-x-[120%]" },
    color: {
      background: "bg-violet-600",
      borderColor: "border-2 border-violet-600",
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
    template: "Template2",
    title: "Hello stranger",
    image: {
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/dropzone-cd38e.appspot.com/o/images%2Fmodal9.png?alt=media&token=8d4ee152-7ca7-4691-8c0a-2ab18f84f11a",
    },
    content: { content1: "Sign up now and get 30% discount" },
    button: {
      buttonAnchor: "Sign up",
      buttonAnchorLink: "",
    },
    link: { link1: "Already have an account?", linkURL1: "" },
    input: { name: "Enter Full name", email: "Enter your email" },
    sizes: "w-[480px]",
    position: { position: "bottom-5 right-5", slide: "translate-x-[120%]" },
    color: {
      background: "bg-violet-600",
      borderColor: "border-2 border-violet-600",
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
    template: "Template7",
    title: "Sign up",
    image: {
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/dropzone-cd38e.appspot.com/o/images%2Fmodal10.png?alt=media&token=7a7ee844-84c9-486e-bd82-b10cbcb5c0b9",
    },
    content: { content1: "Join new adventure" },
    button: {
      buttonAnchor: "Sign up",
      buttonAnchorLink: "",
    },
    link: {
      link1: "Forgot password",
      linkURL1: "",
      link2: "Log In",
      linkURL2: "",
    },
    input: { name: "Enter Full name", email: "Enter your email" },
    sizes: "w-[480px]",
    position: { position: "bottom-5 right-5", slide: "translate-x-[120%]" },
    color: {
      background: "bg-violet-600",
      borderColor: "border-2 border-violet-600",
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
    template: "Template1",
    title: "Check your email",
    image: {
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/dropzone-cd38e.appspot.com/o/images%2Fmailbox.png?alt=media&token=6a7c6cf8-d569-4e6a-ba0d-a505cd3808da",
    },
    content: {
      content1:
        "Once you deletet your account, you’ll lose all data associatted with it.",
    },
    button: {
      buttonAnchor: "Sign up",
      buttonAnchorLink: "",
    },
    link: { link1: "Already have an account?", linkURL1: "" },
    input: { email: "Enter your email" },
    sizes: "w-[480px]",
    position: { position: "bottom-5 right-5", slide: "translate-x-[120%]" },
    color: {
      background: "bg-violet-600",
      borderColor: "border-2 border-violet-600",
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
    template: "Template9",
    title: "Sign up",
    image: {
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/dropzone-cd38e.appspot.com/o/images%2Fmodal12.png?alt=media&token=e8af9335-53ea-4b69-8565-3c554124572b",
    },
    content: { content1: "Join new adventure" },
    button: {
      buttonAnchor: "Sign up",
      buttonAnchorLink: "",
    },
    link: {
      link1: "Forgot password",
      linkURL1: "",
      link2: "Log In",
      linkURL2: "",
    },
    input: { name: "Enter Full name", email: "Enter your email" },
    sizes: "w-[480px]",
    position: { position: "bottom-5 right-5", slide: "translate-x-[120%]" },
    color: {
      background: "bg-violet-600",
      borderColor: "border-2 border-violet-600",
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
    template: "Template10",
    title: "Welcome to talk",
    image: {
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/dropzone-cd38e.appspot.com/o/images%2Fsmile.png?alt=media&token=ccac9450-a311-4ec7-a16e-78fdef9e9a20",
    },
    content: {
      content1:
        "Send friends photos, videos, locations, songs, voice messages, and more.",
    },
    button: { buttonAnchor: "Let’s get started", buttonAnchorLink: "" },
    sizes: "w-[480px]",
    position: { position: "bottom-5 right-5", slide: "translate-x-[120%]" },
    color: {
      background: "bg-violet-600",
      borderColor: "border-2 border-violet-600",
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
    template: "Template11",
    title: "Jenny Yelriver",
    image: {
      logoUrl:
        "https://firebasestorage.googleapis.com/v0/b/dropzone-cd38e.appspot.com/o/images%2Fpp.png?alt=media&token=a9f98998-ef44-4cf1-9d04-ca5374523e18",
    },
    content: {
      content1: "@jennyyelriver",
      content2:
        "Duis eget elit erat. Aliam euismod, mauris quis tristique feugiat, elit diam tincidunt erat, nec fringilla odio orci dapibu magna. Vestibulum ultrices sem nec ex efficitur aliquam.",
    },
    button: { button2: "10 SEP 2021 - 16:33 PM" },
    sizes: "w-[480px]",
    position: { position: "bottom-5 right-5", slide: "translate-x-[120%]" },
    color: {
      background: "bg-white",
      borderColor: "border-2 border-gray-400",
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
    template: "Template5",
    title: "Let’s feedback",
    feedback: {
      feedbackURL1:
        "https://firebasestorage.googleapis.com/v0/b/dropzone-cd38e.appspot.com/o/images%2Fsad.png?alt=media&token=4e334908-1699-46ee-9037-9220b34a6c73",
      feedbackURL2:
        "https://firebasestorage.googleapis.com/v0/b/dropzone-cd38e.appspot.com/o/images%2Fconfused.png?alt=media&token=481e2e62-58f5-48f4-aed6-9917edb4975b",
      feedbackURL3:
        "https://firebasestorage.googleapis.com/v0/b/dropzone-cd38e.appspot.com/o/images%2Fhappy.png?alt=media&token=8f11f8f7-6f91-4a3c-b844-e957527fcda8",
      feedbackURL4:
        "https://firebasestorage.googleapis.com/v0/b/dropzone-cd38e.appspot.com/o/images%2Fhappy-face.png?alt=media&token=1852b6a1-de1b-464d-b564-420023fe1e39",
      feedbackURL5:
        "https://firebasestorage.googleapis.com/v0/b/dropzone-cd38e.appspot.com/o/images%2Fhappy-face2.png?alt=media&token=435b6971-7c9d-4d17-a06a-d5555a30e2de",
    },
    sizes: "w-[480px]",
    position: { position: "bottom-5 right-5", slide: "translate-x-[120%]" },
    color: {
      background: "bg-white",
      borderColor: "border-2 border-gray-400",
      text: "text-black",
    },
    device: "",
    afterSeconds: "",
    afterScroll: "",
    trafficSource: "",
    webhookUrl: "",
  },
  {
    id: 16,
    template: "Template1",
    title: "Hey there🥳",
    image: {
      logoUrl:
        "https://firebasestorage.googleapis.com/v0/b/dropzone-cd38e.appspot.com/o/images%2Funion.png?alt=media&token=d0dde543-3ac2-4f34-83e7-b506d9e9e97a",
    },
    content: {
      content1:
        "We’re launching our product and we would be happy to have you.",
    },
    button: { buttonAnchor: "Sign up now", buttonAnchorLink: "" },
    sizes: "w-[480px]",
    position: { position: "bottom-5 right-5", slide: "translate-x-[120%]" },
    color: {
      background: "bg-violet-600",
      borderColor: "border-2 border-violet-600",
      text: "text-white",
    },
    device: "",
    afterSeconds: "",
    afterScroll: "",
    trafficSource: "",
    webhookUrl: "",
  },
  {
    id: 17,
    template: "Template13",
    title: "Reminders",
    content: { content1: "How often would you like to be reminded to write?" },
    button: {
      buttonAnchor: "Daily",
      buttonAnchorLink: "",
      buttonAnchor2: "Weekly",
      buttonAnchorLink2: "",
      buttonAnchor3: "No Reminders",
      buttonAnchorLink3: "",
    },
    sizes: "w-[480px]",
    position: { position: "bottom-5 right-5", slide: "translate-x-[120%]" },
    color: {
      background: "bg-violet-600",
      borderColor: "border-2 border-violet-600",
      text: "text-white",
      textBg: "text-violet-600",
    },
    device: "",
    afterSeconds: "",
    afterScroll: "",
    trafficSource: "",
    webhookUrl: "",
  },
  {
    id: 18,
    template: "Template14",
    title: "Don’t miss out",
    content: { content1: "Allow notifications get free ebook." },
    button: { buttonAnchorLink: "" },
    sizes: "w-[480px]",
    position: { position: "bottom-5 right-5", slide: "translate-x-[120%]" },
    color: {
      background: "bg-violet-600",
      borderColor: "border-2 border-violet-600",
      text: "text-white",
      textBg: "text-violet-600",
    },
    device: "",
    afterSeconds: "",
    afterScroll: "",
    trafficSource: "",
    webhookUrl: "",
  },
  {
    id: 19,
    template: "Template15",
    sizes: "w-[480px]",
    position: { position: "bottom-5 right-5", slide: "translate-x-[120%]" },
    color: {
      background: "bg-violet-600",
      borderColor: "border-2 border-violet-600",
      text: "text-white",
      textBg: "text-violet-600",
    },
    device: "",
    afterSeconds: "",
    afterScroll: "",
    trafficSource: "",
    webhookUrl: "",
  },
  {
    id: 20,
    template: "Template16",
    title: "5 reasons to purchase desktop computers",
    image: {
      logoUrl:
        "https://firebasestorage.googleapis.com/v0/b/dropzone-cd38e.appspot.com/o/images%2Fpp.png?alt=media&token=a9f98998-ef44-4cf1-9d04-ca5374523e18",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/dropzone-cd38e.appspot.com/o/images%2Fmodal20.png?alt=media&token=b2ca7e5b-66a5-41b3-a8bf-296fe09f6f4e",
    },
    content: {
      content1: "Jenny Yelriver",
      content2: "Creative Director",
      content3:
        "Our award winning templates are the most beautiful way to present your ideas online.",
    },
    button: {
      buttonAnchor: "Read Article",
      buttonAnchorLink: "",
      button2: "Maybe Later",
    },
    sizes: "w-[480px]",
    position: { position: "bottom-5 right-5", slide: "translate-x-[120%]" },
    color: {
      background: "bg-violet-600",
      borderColor: "border-2 border-violet-600",
      text: "text-white",
    },
    device: "",
    afterSeconds: "",
    afterScroll: "",
    trafficSource: "",
    webhookUrl: "",
  },
  {
    id: 21,
    template: "Template12",
    title: "Do you like our design?",
    image: {
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/dropzone-cd38e.appspot.com/o/images%2Funion.png?alt=media&token=d0dde543-3ac2-4f34-83e7-b506d9e9e97a",
    },
    content: { content1: "Help us to improve it." },
    feedback: {
      feedbackURL1:
        "https://firebasestorage.googleapis.com/v0/b/dropzone-cd38e.appspot.com/o/images%2Fp-cool.png?alt=media&token=1f47efb1-48fd-48f2-a567-f7810ad52da2",
      feedbackURL1Label: "Cool",
      feedbackURL2:
        "https://firebasestorage.googleapis.com/v0/b/dropzone-cd38e.appspot.com/o/images%2Fp-happy-face2.png?alt=media&token=6f1dccca-7cae-4ac7-9de5-87421ac4cc37",
      feedbackURL2Label: "Not Bad",
      feedbackURL3:
        "https://firebasestorage.googleapis.com/v0/b/dropzone-cd38e.appspot.com/o/images%2Fp-happy-face.png?alt=media&token=90eaadeb-815e-4ee3-9530-b4d64c339d22",
      feedbackURL3Label: "Average",
      feedbackURL4:
        "https://firebasestorage.googleapis.com/v0/b/dropzone-cd38e.appspot.com/o/images%2Fp-winking-face.png?alt=media&token=d32520ec-8eb0-405e-8de8-462f20fa84c2",
      feedbackURL4Label: "Good",
      feedbackURL5:
        "https://firebasestorage.googleapis.com/v0/b/dropzone-cd38e.appspot.com/o/images%2Fp-sad-face.png?alt=media&token=70139095-4a01-4ffc-8e48-f5d97318d3e2",
      feedbackURL5Label: "Bad",
    },
    sizes: "w-[480px]",
    position: { position: "bottom-5 right-5", slide: "translate-x-[120%]" },
    color: {
      background: "bg-violet-600",
      borderColor: "border-2 border-violet-600",
      text: "text-white",
    },
    device: "",
    afterSeconds: "",
    afterScroll: "",
    trafficSource: "",
    webhookUrl: "",
  },
  {
    id: 22,
    template: "Template8",
    title: "Learn, share and connect with our community.",
    image: {
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/dropzone-cd38e.appspot.com/o/images%2Funion.png?alt=media&token=d0dde543-3ac2-4f34-83e7-b506d9e9e97a",
    },
    content: {
      content1: "tailwind",
      content2:
        "Explore our amazing products curated by our team just for you.",
    },
    button: {
      buttonAnchor: "Join the club",
      buttonAnchorLink: "",
      button2: "Maybe Later",
    },
    sizes: "w-[480px]",
    position: { position: "bottom-5 right-5", slide: "translate-x-[120%]" },
    color: {
      background: "bg-violet-600",
      borderColor: "border-2 border-violet-600",
      text: "text-white",
    },
    device: "",
    afterSeconds: "",
    afterScroll: "",
    trafficSource: "",
    webhookUrl: "",
  },
  {
    id: 23,
    template: "Template4",
    title: "Get straight to growing your business well",
    content: {
      content1: "There’s good news for parents who have child born.",
    },
    input: { email: "Enter your email address", phone: "Enter your phone" },
    button: { buttonAnchor: "Sign up", buttonAnchorLink: "" },
    link: {
      link1: "I have an account",
      linkURL1: "",
      link2: "Forgot Password",
      linkURL2: "",
    },
    sizes: "w-[480px]",
    position: { position: "bottom-5 right-5", slide: "translate-x-[120%]" },
    color: {
      background: "bg-violet-600",
      borderColor: "border-2 border-violet-600",
      text: "text-white",
    },
    device: "",
    afterSeconds: "",
    afterScroll: "",
    trafficSource: "",
    webhookUrl: "",
  },
  {
    id: 24,
    template: "Template1",
    title: "Opps",
    image: {
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/dropzone-cd38e.appspot.com/o/images%2Fpage-not-found.png?alt=media&token=fc438e6b-3895-4dc8-8f6c-5cf4c11f5f74",
    },
    content: {
      content1: "Page not found",
    },
    button: {
      buttonAnchor: "Back to home",
      buttonAnchorLink: "",
    },
    sizes: "w-[480px]",
    position: { position: "bottom-5 right-5", slide: "translate-x-[120%]" },
    color: {
      background: "bg-violet-600",
      borderColor: "border-2 border-violet-600",
      text: "text-white",
    },
    device: "",
    afterSeconds: "",
    afterScroll: "",
    trafficSource: "",
    webhookUrl: "",
  },
  {
    id: 25,
    template: "Template5",
    title: "Hi, stranger",
    content: { content1: "This code expires in 24 hours" },
    button: {
      buttonAnchor: "Log In",
      buttonAnchorLink: "",
      buttonAnchor3: "Sign up now",
      buttonAnchorLink3: "",
    },
    sizes: "w-[480px]",
    position: { position: "bottom-5 right-5", slide: "translate-x-[120%]" },
    color: {
      background: "bg-violet-600",
      borderColor: "border-2 border-violet-600",
      text: "text-white",
    },
    device: "",
    afterSeconds: "",
    afterScroll: "",
    trafficSource: "",
    webhookUrl: "",
  },
  {
    id: 26,
    template: "Template17",
    title: "Let's get in touch",
    image: {
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/dropzone-cd38e.appspot.com/o/images%2Fmodal26bg.png?alt=media&token=67ecc25d-77be-465b-8c35-6e4afdf31b52",
    },
    content: {
      content1: "Let's create something beautiful together.",
    },
    input: {
      name: "Enter your name",
      email: "Enter your email address",
      message: "Enter your message",
    },
    button: { buttonAnchor: "Send message" },
    link: {
      link1: "GitHub",
      linkURL1: "",
      link2: "LinkedIn",
      linkURL2: "",
    },
    sizes: "w-[480px]",
    position: { position: "bottom-5 right-5", slide: "translate-x-[120%]" },
    color: {
      background: "bg-violet-600",
      borderColor: "border-2 border-violet-600",
      text: "text-white",
    },
    device: "",
    afterSeconds: "",
    afterScroll: "",
    trafficSource: "",
    webhookUrl: "",
  },
];
