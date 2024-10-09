import React from "react";
import Image from "next/image";
import styles from "./Navbar.module.scss";

// Component
import Button from "@ui/Button";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarHeader}>
        <Image src="/icon.png" width={36} height={36} alt="" />
        <span>Modal Generator</span>
      </div>

      <ul className={styles.navbarLinks}>
        <li>
          <a href="#">Solutions</a>
        </li>
        <li>
          <a href="#">Product Tour</a>
        </li>
        <li>
          <a href="#">Showcase</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
      </ul>

      <div className={styles.navbarBtns}>
        <button>
          <a href="#">Sign in</a>
        </button>
        <Button size="medium">
          <a href="#modalGenerator">Try for free</a>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
