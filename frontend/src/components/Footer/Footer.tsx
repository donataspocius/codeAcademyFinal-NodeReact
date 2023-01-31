import React from "react";
import creditCards from "../../imgs/creditCards.svg";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>
        Making people homesick since 1323. Yep, that's right - for 700 years.
        Copyright © 2023
      </p>
      <img src={creditCards} alt="credit card logos" height={"39px"} />
    </div>
  );
};

export default Footer;
