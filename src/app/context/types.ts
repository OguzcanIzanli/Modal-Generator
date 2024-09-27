export interface ModalDataType {
  id: number;
  container: string;
  logo?: string;
  image?: { url: string; style: string };
  title: { content: string; style: string };
  contents: { content: string; style: string };
  inputs?: { placeholder: string };
  buttons: {
    button1: { content: string; style: string };
    button2: { content: string; style: string };
    style: string;
  };
  sizes: { small: string; medium: string; large: string };
}

export const initialModalData = {
  id: NaN,
  container: "",
  logo: "",
  image: { url: "", style: "" },
  title: { content: "", style: "" },
  contents: { content: "", style: "" },
  inputs: { placeholder: "" },
  buttons: {
    button1: { content: "", style: "" },
    button2: { content: "", style: "" },
    style: "",
  },
  sizes: { small: "", medium: "", large: "" },
};
