import { Inter, Poppins } from "next/font/google";

const inter = Inter({
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--inter-font",
});

const poppins = Poppins({
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--poppins-font",
});

export { inter, poppins };
