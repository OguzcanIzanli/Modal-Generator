import React, { useState } from "react";
import { useModal } from "@/app/context/ModalContext";

const GenerateButton = () => {
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
        contents: { content1: modal.contents.content1 },
        inputs: { placeholder: modal.inputs?.placeholder },
        buttons: {
          button1: modal.buttons.button1,
          button2: modal.buttons.button2,
        },
        sizes: modal.sizes,
        position: modal.position,
        color: {
          background: modal.color.background,
          text: modal.color.text,
        },
        webhookUrl:
          "https://hook.eu2.make.com/owgs6fu2vf8fr4m2m4zfe6grgmvt6me7",
      };

      const response = await fetch("http://localhost:3000/api/generate-modal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(modalConfig),
      });

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
      <button onClick={handleGenerateClick} disabled={loading}>
        {loading ? "Generating..." : "Get your Code"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {embedCode && (
        <div>
          <h3>Your Embed Code:</h3>
          <pre>{embedCode}</pre>
          <button onClick={() => navigator.clipboard.writeText(embedCode)}>
            Copy Code
          </button>
        </div>
      )}
    </div>
  );
};

export default GenerateButton;
