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
        input1: modal.input1,
        button1: modal.button1,
        button2: modal.button2,
        button2Link: modal.button2Link,
        sizes: modal.sizes,
        position: modal.position,
        color: {
          background: modal.color.background,
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
