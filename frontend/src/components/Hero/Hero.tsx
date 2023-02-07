import styles from "./Hero.module.css";
import Button from "../Button/Button";

import React from "react";

const Hero = () => {
  return (
    <div className={styles.heroBanner}>
      <div className={styles.heroBannerContent}>
        <h1>TIME FOR AN ADVENTURE?</h1>
        <Button size="big" to="signup/user-info">
          HOP IN
        </Button>
      </div>
    </div>
  );
};

export default Hero;
