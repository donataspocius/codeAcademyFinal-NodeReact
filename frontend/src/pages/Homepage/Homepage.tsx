import React from "react";
import Hero from "../../components/Hero/Hero";
import styles from "./Homepage.module.css";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <div className={styles.horizontalLine}></div>
    </div>
  );
};

export default Homepage;
