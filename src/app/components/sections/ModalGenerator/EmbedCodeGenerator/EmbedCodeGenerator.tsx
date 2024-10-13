import React, { useState } from "react";
import styles from "./EmbedCodeGenerator.module.scss";
import { useModal } from "@/app/context/ModalContext";

// Component
import Button from "@/app/components/ui/Button";

const EmbedCodeGenerator = () => {
  const [embedCode, setEmbedCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { modal } = useModal();

  const handleGenerateClick = async () => {
    setLoading(true);
    setError("");
    const {
      template,
      title,
      logoUrl,
      imageUrl,
      content,
      button,
      link,
      input,
      radio,
      feedback,
    } = modal;
    try {
      const modalConfig = {
        entry: template,
        title: title,
        logoUrl: logoUrl,
        imageUrl: imageUrl,
        content: {
          content1: content?.content1,
          content2: content?.content2,
        },
        button: {
          buttonAnchor: button?.buttonAnchor,
          buttonAnchorLink: button?.buttonAnchorLink,
          buttonAnchor2: button?.buttonAnchor2,
          buttonAnchorLink2: button?.buttonAnchorLink2,
          buttonAnchor3: button?.buttonAnchor3,
          buttonAnchorLink3: button?.buttonAnchorLink3,
          button2: button?.button2,
        },
        link: {
          link1: link?.link1,
          linkURL1: link?.linkURL1,
          link2: link?.link2,
          linkURL2: link?.linkURL2,
        },
        input: { input1: input?.input1, input2: input?.input2 },
        checkbox1: modal.checkbox1,
        radio: {
          label1: radio?.label1,
          label1b: radio?.label1b,
          label2: radio?.label2,
          label2b: radio?.label2b,
          label3: radio?.label3,
          label3b: radio?.label3b,
        },
        feedback: {
          feedbackURL1: feedback?.feedbackURL1,
          feedbackURL1Label: feedback?.feedbackURL1Label,
          feedbackURL2: feedback?.feedbackURL2,
          feedbackURL2Label: feedback?.feedbackURL2Label,
          feedbackURL3: feedback?.feedbackURL3,
          feedbackURL3Label: feedback?.feedbackURL3Label,
          feedbackURL4: feedback?.feedbackURL4,
          feedbackURL4Label: feedback?.feedbackURL4Label,
          feedbackURL5: feedback?.feedbackURL5,
          feedbackURL5Label: feedback?.feedbackURL5Label,
        },
        sizes: modal.sizes,
        position: {
          position: modal.position.position,
          slide: modal.position.slide,
        },
        color: {
          background: modal.color.background,
          borderColor: modal.color.borderColor,
          text: modal.color.text,
          textBg: modal.color.textBg,
        },
        device: modal.device,
        afterSeconds: modal.afterSeconds,
        afterScroll: modal.afterScroll,
        trafficSource: modal.trafficSource,
        webhookUrl: modal.webhookUrl,
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/generate-modal`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(modalConfig),
        }
      );

      if (!response.ok) {
        throw new Error(
          (await response.json()).error || "Modal generation failed!"
        );
      }

      const data = await response.json();
      setEmbedCode(data.embedCode);
    } catch {
      setError("An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button onClick={handleGenerateClick} size="large" disabled={loading}>
        {loading ? "Generating..." : "Get your Code"}
      </Button>

      <div className={styles.embedCodeContainer}>
        <pre>{embedCode}</pre>
        {error && <p style={{ color: "red" }}>{error}</p>}

        <div className={styles.copyEmbedCodeBtn}>
          <Button
            onClick={() => navigator.clipboard.writeText(embedCode)}
            size="small"
          >
            Copy Code
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmbedCodeGenerator;
