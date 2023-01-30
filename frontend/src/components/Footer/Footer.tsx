import React from "react";
import creditCards from "../../imgs/creditCards.png";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>Making people homesick since 1999. Copyright © 2023</p>
      <img src={creditCards} alt="credit card logos" />
    </div>
  );
};

export default Footer;
