import React from "react";
import Header from "./components/sections/Header";
import ModalGenerator from "./components/sections/ModalGenerator";
import FAQ from "./components/sections/FAQ";
import Footer from "./components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <ModalGenerator />
      <FAQ />
      <Footer />
    </>
  );
}
