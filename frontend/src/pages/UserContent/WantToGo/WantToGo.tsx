import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserId } from "../../../redux/auth/authSlice";
import styles from "../UserContent.module.css";
import {
  selectContentError,
  selectContentStatus,
  fetchCountryCities,
  selectVisitedCitiesData,
  selectVisitedCities,
  selectWishCitiesData,
  selectWishCities,
} from "../../../redux/content/contentSlice";
import DotLoader from "react-spinners/DotLoader";
import { API } from "../../../constants";
import { AppDispatch } from "../../../redux/store";
import CityCard from "../../../components/CityCard/CityCard";

const WantToGo = () => {
  const dispatch = useDispatch<AppDispatch>();

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
