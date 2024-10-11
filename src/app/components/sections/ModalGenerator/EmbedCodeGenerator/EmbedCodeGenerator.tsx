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

    try {
      const modalConfig = {
        entry: modal.id,
        title: modal.title,
        logoUrl: modal.logoUrl,
        imageUrl: modal.imageUrl,
        content1: modal.content1,
        content2: modal.content2,
        buttonAnchor: modal.buttonAnchor,
        buttonAnchorLink: modal.buttonAnchorLink,
        buttonAnchor2: modal.buttonAnchor2,
        buttonAnchorLink2: modal.buttonAnchorLink2,
        buttonAnchor3: modal.buttonAnchor3,
        buttonAnchorLink3: modal.buttonAnchorLink3,
        button2: modal.button2,
        input1: modal.input1,
        input2: modal.input2,
        checkbox1: modal.checkbox1,
        label1: modal.label1,
        label1b: modal.label1b,
        label2: modal.label2,
        label2b: modal.label2b,
        label3: modal.label3,
        label3b: modal.label3b,
        sizes: modal.sizes,
        position: {
          position: modal.position.position,
          slide: modal.position.slide,
        },
        color: {
          background: modal.color.background,
          borderColor: modal.color.borderColor,
          text: modal.color.text,
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
