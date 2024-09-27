import { useModal } from "@/app/context/ModalContext";

const EmbedCode = () => {
  const { modal } = useModal();

  const scriptUrl = "https://dist/script.js"; // script.js dosyanızın URL'si

  return `<script type="text/javascript" src="${scriptUrl}"></script>
  <script>
    window.MyModal.init({
      container: "${modal.container}",
      logo: "${modal.logo}",
      images: { url: "${modal.image?.url}", style: "${modal.image?.style}" },
      title: { content: "${modal.title.content}", style: "${modal.title.style}" },
      contents: { content: "${modal.contents.content}", style: "${modal.contents.style}" },
      inputs: { placeholder: "${modal.inputs?.placeholder}" },
      buttons: {
        button1: { content: "${modal.buttons.button1.content}", style: "${modal.buttons.button1.style}" },
        button2: { content: "${modal.buttons.button2.style}", style: "${modal.buttons.button2.style}" },
        style: "${modal.buttons.style}",
     },
      sizes: "${modal.sizes.medium}",
    });
  </script>
`;
};

export default EmbedCode;
