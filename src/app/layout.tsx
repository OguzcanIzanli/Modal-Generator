import React from "react";
import type { Metadata } from "next";
import "./styles/main.scss";
import { ModalProvider } from "./context/ModalContext";

export const metadata: Metadata = {
  title: "Modal Generator",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ModalProvider>{children}</ModalProvider>
      </body>
    </html>
  );
}
