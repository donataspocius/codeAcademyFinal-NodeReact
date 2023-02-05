import React from "react";
import styles from "./CityCard.module.css";
// import { CityData } from "../../../../ts_interfaces.ts";

interface CityData {
  id: string;
  name: string;
  photoUrl: string;
}

const CityCard = ({ id, name, photoUrl }: CityData) => {
  return (
    <div className={styles.cardContainer}>
      <picture className={styles.picture}>
        <source srcSet={photoUrl} />
        <img src={photoUrl} alt={photoUrl} />
      </picture>
      <h1 className={styles.header}>{name}</h1>
    </div>
  );
};

export default CityCard;
