import React from "react";
import { useSelector } from "react-redux";
import styles from "../UserContent.module.css";
import { selectVisitedCities } from "../../../redux/content/contentSlice";
import CityCard from "../../../components/CityCard/CityCard";

const BeenThere = () => {
  const visitedCities = useSelector(selectVisitedCities);

  let content = visitedCities.map((city) => {
    return (
      <CityCard
        key={city.id}
        id={city.id}
        name={city.name}
        photoUrl={city.photoUrl}
        context="visitedCities"
      />
    );
  });

  return (
    <>
      {!content.length && (
        <div className={styles.infoText}>No cities visited yet!</div>
      )}
      <div className={styles.cardsContainer}>{content}</div>
    </>
  );
};

export default BeenThere;
