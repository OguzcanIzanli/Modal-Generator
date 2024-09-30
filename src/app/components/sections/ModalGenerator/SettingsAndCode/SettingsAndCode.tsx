import React from "react";
import styles from "./SettingsAndCode.module.scss";

const SettingsAndCode = () => {
  return (
    <div>
      <h3>
        <span>5</span>Settings and Code
      </h3>
      <p className="text-lg mb-4 font-semibold">Webhook to Send data</p>
      <p className="text-base">Enter your Webhook URL</p>
      <p className="text-xs">
        You can create a simple one with{" "}
        <a href="https://make.com" className="font-bold" target="_blank">
          make.com
        </a>
      </p>

      <input
        type="text"
        placeholder="Your Webhook URL"
        className={styles.inputWebhookURL}
      />
    </div>
  );
};

export default SettingsAndCode;
