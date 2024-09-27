import React from "react";
import styles from "./Header.module.scss";
import Navbar from "../../navigation/Navbar";
import Hero from "../Hero";

const Header = () => {
  return (
    <header className={styles.header}>
      <Navbar />
      <Hero />
    </header>
  );
};

export default Header;
