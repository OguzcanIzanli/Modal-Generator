// components/GenerateButton.tsx
import React from "react";
import { useState } from "react";
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
        logo: modal.logo,
        imageUrl: modal.imageUrl,
        contents: { content1: modal.contents.content1 },
        inputs: { placeholder: modal.inputs?.placeholder },
        buttons: {
          button1: modal.buttons.button1,
          button2: modal.buttons.button2,
        },
        sizes: modal.sizes,
        color: { background: modal.color.background, text: modal.color.text },
      };

      const response = await fetch("/api/generate-modal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(modalConfig),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Modal generation failed!");
      }

      const data = await response.json();
      setEmbedCode(data.embedCode);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      // console.error("Error generating modal:", err);
      setError("An error occurred." || err.message);
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
