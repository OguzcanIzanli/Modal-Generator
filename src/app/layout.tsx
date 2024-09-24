import type { Metadata } from "next";
import "./styles/main.scss";
import { inter, poppins } from "./components/lib/fonts";

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
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
