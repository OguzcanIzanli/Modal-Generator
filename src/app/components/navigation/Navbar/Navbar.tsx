import Image from "next/image";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarHeader}>
        <Image
          src="/icon.png"
          width={36}
          height={36}
          alt="Picture of the author"
        />
        <span>Modal Generator</span>
      </div>

      <ul className={styles.navbarBtnsLeft}>
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

      <ul className={styles.navbarBtnsRight}>
        <li>
          <a href="#">Sign in</a>
        </li>
        <li>
          <a className={styles.tryForFreeBtn} href="#">
            Try for free
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
