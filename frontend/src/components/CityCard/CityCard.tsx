import React, { useState } from "react";
import { createPortal } from "react-dom";
import styles from "./CityCard.module.css";
import CityInfoModal from "../../pages/CityInfoModal/CityInfoModal";

interface CityData {
  id: string;
  name: string;
  photoUrl: string;
}
const CityCard = ({ name, photoUrl, id }: CityData) => {
  const [modal, setModal] = useState(false);

  const onClick = () => {
    setModal(true);
  };
  return (
    <div className={styles.cardContainer} onClick={onClick}>
      <picture className={styles.picture}>
        <source srcSet={photoUrl} />
        <img src={photoUrl} alt={photoUrl} />
      </picture>
      <h1 className={styles.header}>{name}</h1>
      {modal &&
        createPortal(
          <CityInfoModal id={id} setModal={setModal} />,
          document.getElementById("root")!
        )}
    </div>
  );
};

export default CityCard;
