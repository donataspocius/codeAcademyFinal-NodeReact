import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { API } from "../../../constants";
import DotLoader from "react-spinners/DotLoader";
import CityCard from "../../../components/CityCard/CityCard";
import {
  selectAllCities,
  selectContentError,
  selectContentStatus,
  fetchCountryCities,
} from "../../../redux/content/contentSlice";
import styles from "../UserContent.module.css";

const Explore = () => {
  const dispatch = useDispatch<AppDispatch>();

  const cities = useSelector(selectAllCities);
  const status = useSelector(selectContentStatus);
  const error = useSelector(selectContentError);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCountryCities(API.countryCities("united-states")));
    }
  }, [status]);

  // const onClick = (e: React.MouseEvent<HTMLElement>) => {
  //   console.log("clicked card!");
  // };

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
      if (Array.isArray(cities)) {
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
      } else {
        content = <p>Please check your input - no such country found!</p>;
      }
      break;
    case "failed":
      content = <p>{error}</p>;
      break;
    default:
      break;
  }
  return <div className={styles.cardsContainer}>{content}</div>;
};

export default Explore;
