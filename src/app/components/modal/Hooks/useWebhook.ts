export const useWebhook = () => {
  const getOperatingSystem = (): string => {
    const userAgent = window.navigator.userAgent;
    let os = "Unknown OS";

    if (userAgent.indexOf("Win") !== -1) os = "Windows";
    else if (userAgent.indexOf("Mac") !== -1) os = "MacOS";
    else if (userAgent.indexOf("Linux") !== -1) os = "Linux";
    else if (userAgent.indexOf("Android") !== -1) os = "Android";
    else if (userAgent.indexOf("like Mac") !== -1) os = "iOS";

    return os;
  };

  const sendWebhookData = (
    webhookData: { userClick: string },
    webhookUrl: string
  ) => {
    const dataToSend = {
      ...webhookData,
      date: new Date().toISOString(),
      browserLanguage: navigator.language,
      browserName: navigator.userAgent,
      operatingSystem: getOperatingSystem(),
      deviceType: /Mobi|Android/i.test(navigator.userAgent)
        ? "Mobile"
        : "Desktop",
    };

    fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => response.text())
      .then(() => {
        // console.log("Webhook success:", data);
      })
      .catch((error) => {
        console.error("Error sending webhook:", error);
      });
  };

  return { sendWebhookData };
};
