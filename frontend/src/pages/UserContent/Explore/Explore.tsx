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

  let content;
  switch (status) {
    case "loading":
      content = <DotLoader color="rgb(37, 150, 190)" />;
      break;
    case "succeeded":
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
    case "failed":
      content = <p>{error}</p>;
      break;
    default:
      break;
  }
  return <div>{content}</div>;
};

export default Explore;
