import type { Metadata } from "next";
import localFont from "next/font/local";
import "./styles/main.scss";

export const metadata: Metadata = {
  title: "Modal Generator",
  description: "",
};

const poppins = localFont({
  src: "../../public/fonts/Poppins-Regular.woff",
  variable: "--font-poppins",
});

const inter = localFont({
  src: "../../public/fonts/Inter-Regular.woff",
  variable: "--font-inter",
});

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
