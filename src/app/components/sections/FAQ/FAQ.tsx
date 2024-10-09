"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./FAQ.module.scss";
import { FAQData, FAQPopupPropertyData } from "@/app/data/FAQFooterData";

// Icon
import IconPlusCircle from "@icons/IconPlusCircle";
import IconMinusCircle from "@icons/IconMinusCircle";

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    if (openFAQ === id) {
      setOpenFAQ(null);
    } else {
      setOpenFAQ(id);
    }
  };

  return (
    <div className={styles.FAQContainer}>
      <h2>Conversion & UX ready popups & modals</h2>
      <div className={styles.popupPropertiesContainer}>
        {FAQPopupPropertyData.map((property) => (
          <div key={property.id} className={styles.popupProperty}>
            <div className={styles.image}>
              <Image
                src={property.imgUrl}
                width={55}
                height={55}
                alt={property.title}
              />
            </div>
            <h3>{property.title}</h3>
            <p>{property.content}</p>
          </div>
        ))}
      </div>

      <h2>Frequently Asked Questions</h2>
      {FAQData.map((FAQ) => (
        <div
          key={FAQ.id}
          className={`${styles.FAQBox} ${
            openFAQ === FAQ.id ? styles.open : ""
          }`}
          onClick={() => toggleFAQ(FAQ.id)}
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
