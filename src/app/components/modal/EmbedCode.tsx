import { useModal } from "@/app/context/ModalContext";

const EmbedCode = () => {
  const { modal } = useModal();

  const scriptUrl = "public/dist/script.js";
  return `<script type="text/javascript" src="${scriptUrl}"></script>
  <script>
    window.MyModal.init({
      id: "${modal.id}",
      container: "${modal.container}",
      
      ${modal.logo ? `logo: "${modal.logo}",` : ""}
      ${
        modal.images
          ? `images: { url: "${modal.images?.url}", style: "${modal.images?.style}"},`
          : ""
      }
      title: { content: "${modal.title.content}", style: "${
    modal.title.style
  }" },
      contents: { content: "${modal.contents.content}", style: "${
    modal.contents.style
  }" },
      ${
        modal.inputs
          ? `inputs: { placeholder: "${modal.inputs.placeholder}" },`
          : ""
      }
      buttons: {
        button1: { content: "${modal.buttons.button1.content}", style: "${
    modal.buttons.button1.style
  }" },
        button2: { content: "${modal.buttons.button2.content}", style: "${
    modal.buttons.button2.style
  }" },
        style: "${modal.buttons.style}",
     },
      sizes: "${modal.sizes}"
    });
  </script>
`;
};

export default EmbedCode;
