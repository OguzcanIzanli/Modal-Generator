"use client";

import React, { useState } from "react";
import styles from "./FAQ.module.scss";
import Image from "next/image";
import { FAQData } from "@/app/data/FAQFooterData";
import IconPlusCircle from "../../ui/icons/IconPlusCircle";
import IconMinusCircle from "../../ui/icons/IconMinusCircle";

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    if (openFAQ === id) {
      setOpenFAQ(null);
    } else {
      setOpenFAQ(id);
    }
    console.log(id);
  };

  return (
    <div className={styles.FAQContainer}>
      <h2>Conversion & UX ready popups & modals</h2>
      <div className={styles.popupPropertiesContainer}>
        <div className={styles.popupProperty}>
          <div className={styles.image}>
            <Image
              src="/images/logos/pixel-perfect.png"
              width={55}
              height={55}
              alt=""
            />
          </div>
          <h3>Pixel Perfect</h3>
          <p>
            Helps you calculate your email marketing roi to measure success.
          </p>
        </div>

        <div className={styles.popupProperty}>
          <div className={styles.image}>
            <Image
              src="/images/logos/conversion.png"
              width={55}
              height={55}
              alt=""
            />
          </div>
          <h3>Conversion Ready</h3>
          <p>
            Empowers your emails by generating afree code for a CTA in your
            subject line.
          </p>
        </div>

        <div className={styles.popupProperty}>
          <div className={styles.image}>
            <Image
              src="/images/logos/verified.png"
              width={55}
              height={55}
              alt=""
            />
          </div>
          <h3>Modern & Useful</h3>
          <p>
            Enables you to estimate the total profit of your investment on a
            popup service.
          </p>
        </div>
      </div>

      <h2>Frequently Asked Questions</h2>
      {FAQData.map((FAQ) => (
        <div
          className={`${styles.FAQBox} ${
            openFAQ === FAQ.id ? styles.open : ""
          }`}
          onClick={() => toggleFAQ(FAQ.id)}
          key={FAQ.id}
        >
          <h3>{FAQ.title}</h3>
          <p>{FAQ.content}</p>
          {openFAQ === FAQ.id ? (
            <IconMinusCircle className={styles.iconMinus} />
          ) : (
            <IconPlusCircle className={styles.iconPlus} />
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
