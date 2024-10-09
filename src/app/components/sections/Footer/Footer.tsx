import React from "react";
import Image from "next/image";
import styles from "./Footer.module.scss";
import { FooterData } from "@/app/data/FAQFooterData";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <h2>Build great popups without code</h2>
      <div className={styles.footerBox}>
        {FooterData.map((footer) => (
          <div key={footer.id} className={styles.footer}>
            <div className={styles.img}>
              <Image src={footer.imgUrl} height={60} width={60} alt="" />
            </div>
            <h3>{footer.title}</h3>
            <p>{footer.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
