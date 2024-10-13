import React from "react";

// Icon
import IconExclamation from "@icons/IconExclamation";

// Component
import EmbedCodeGenerator from "../EmbedCodeGenerator";
import Input from "@ui/Input";

const SettingsAndCode = () => {
  return (
    <div>
      <h3>
        <span>5</span>Settings and Code
      </h3>
      <p className="text-lg mb-4 font-semibold">Webhook to Send data</p>
      <p className="text-base">Enter your Webhook URL</p>
      <p className="text-xs mb-4">
        You can create a simple one with{" "}
        <a href="https://make.com" className="font-bold" target="_blank">
          make.com
        </a>
      </p>

      <div className="mb-4">
        <Input type="text" name="webhookUrl" placeholder="Your Webhook URL" />
      </div>

      <EmbedCodeGenerator />
      <div className="flex gap-1 mt-4">
        <IconExclamation className="text-3xl" />
        <p className="text-xs">
          Copy and paste the embed code above just before the closing
          &lt;/body&gt; tag of your website template file.
        </p>
      </div>
    </div>
  );
};

export default SettingsAndCode;
