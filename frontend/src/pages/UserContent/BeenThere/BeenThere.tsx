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
} from "../../../redux/content/contentSlice";
import DotLoader from "react-spinners/DotLoader";
import { API } from "../../../constants";
import { AppDispatch } from "../../../redux/store";
import CityCard from "../../../components/CityCard/CityCard";

const BeenThere = () => {
  const dispatch = useDispatch<AppDispatch>();

  const userId = useSelector(selectUserId);
  const visitedCitiesData = useSelector(selectVisitedCitiesData);
  const visitedCities = useSelector(selectVisitedCities);
  const status = useSelector(selectContentStatus);
  const error = useSelector(selectContentError);

  // useEffect(() => {
  //   dispatch(
  //     fetchCountryCities({
  //       apiAddress: API.userVisitedCities(userId),
  //       type: "visitedCities",
  //     })
  //   );
  // }, []);

  // let content;
  // switch (status) {
  //   case "loading":
  //     content = (
  //       <div className={styles.loaderContainer}>
  //         <DotLoader color="rgb(37, 150, 190)" />
  //       </div>
  //     );
  //     break;
  //   case "succeeded":
  //   case "failed":
  //     content = visitedCities.map((city) => {
  //       // ---> content = visitedCitiesData.map((city) => {
  //       return (
  //         <CityCard
  //           key={city.id}
  //           id={city.id}
  //           name={city.name}
  //           photoUrl={city.photoUrl}
  //         />
  //       );
  //     });
  //     break;
  //   default:
  //     break;
  // }

  let content = visitedCities.map((city) => {
    // ---> content = visitedCitiesData.map((city) => {
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
