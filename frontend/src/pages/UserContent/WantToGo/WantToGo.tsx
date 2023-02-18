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

  const userId = useSelector(selectUserId);
  const wishCitiesData = useSelector(selectWishCitiesData);
  const wishCities = useSelector(selectWishCities);
  const status = useSelector(selectContentStatus);
  const error = useSelector(selectContentError);

  useEffect(() => {
    dispatch(
      fetchCountryCities({
        apiAddress: API.userWishCities(userId),
        type: "wishCities",
      })
    );
  }, [wishCities]);

  let content;
  switch (status) {
    case "loading":
      content = (
        <div className={styles.loaderContainer}>
          <DotLoader color="rgb(37, 150, 190)" />
        </div>
      );
      break;
    case "succeeded":
    case "failed":
      content = wishCitiesData.map((city) => {
        return (
          <CityCard
            key={city.id}
            id={city.id}
            name={city.name}
            photoUrl={city.photoUrl}
          />
        );
      });
      break;
    default:
      break;
  }

  return (
    <>
      <div className={styles.cardsContainer}>{content}</div>
    </>
  );
};

export default WantToGo;
