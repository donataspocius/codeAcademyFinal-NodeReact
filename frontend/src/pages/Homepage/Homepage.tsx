import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CityCard from "../../components/CityCard/CityCard";
import Hero from "../../components/Hero/Hero";
import styles from "./Homepage.module.css";
import { AppDispatch } from "../../redux/store";
import { API } from "../../constants";
import {
  selectAllCities,
  selectContentError,
  selectContentStatus,
  fetchCountryCities,
} from "../../redux/content/contentSlice";
import DotLoader from "react-spinners/DotLoader";
import { selectUserId } from "../../redux/auth/authSlice";

const Homepage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const cities = useSelector(selectAllCities);
  const status = useSelector(selectContentStatus);
  const error = useSelector(selectContentError);
  const userId = useSelector(selectUserId);

  interface Event {
    onClick: (e: React.MouseEvent<HTMLElement>) => void;
  }

  useEffect(() => {
    if (status === "idle" || !cities) {
      dispatch(
        fetchCountryCities({
          apiAddress: API.countryCities("united-states"),
          type: "country",
        })
      );
      // dispatch(fetchCountryCities(API.countryCities("united-states")));
    }
  }, [status, dispatch, cities]);

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
      content = cities.map((city) => {
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
    <div>
      <Hero />
      <div className={styles.cityCardsContainer}>{content}</div>
    </div>
  );
};

export default Homepage;
