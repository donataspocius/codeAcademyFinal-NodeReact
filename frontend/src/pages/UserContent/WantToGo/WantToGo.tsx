import React from "react";
import { useSelector } from "react-redux";
import styles from "../UserContent.module.css";
import { selectWishCities } from "../../../redux/content/contentSlice";
import CityCard from "../../../components/CityCard/CityCard";

const WantToGo = () => {
  const wishCities = useSelector(selectWishCities);

  let content = wishCities.map((city) => {
    return (
      <CityCard
        key={city.id}
        id={city.id}
        name={city.name}
        photoUrl={city.photoUrl}
        context="wishCities"
      />
    );
  });

  return (
    <>
      {!content.length && (
        <div className={styles.infoText}>No cities in your wish list</div>
      )}
      <div className={styles.cardsContainer}>{content}</div>
    </>
  );
};

export default WantToGo;
