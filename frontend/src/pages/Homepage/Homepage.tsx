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

const Homepage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const cities = useSelector(selectAllCities);
  const status = useSelector(selectContentStatus);
  const error = useSelector(selectContentError);

  let mockData = [
    {
      id: "1",
      name: "New York, NY",
      photoUrl:
        "https://cdn.roadgoat.com/uploads/photo/image/608/large_travel-guide-of-new-york-ny-usa-original.jpg",
    },
    {
      id: "2",
      name: "Honolulu, HI",
      photoUrl:
        "https://cdn.roadgoat.com/uploads/photo/image/417/large_travel-guide-of-honolulu-hi-usa-original.jpg",
    },
    {
      id: "3",
      name: "Yosemite Village, CA",
      photoUrl:
        "https://cdn.roadgoat.com/uploads/photo/image/1913/large_Yosemite.jpeg",
    },
    {
      id: "4",
      name: "Burlington, VT",
      photoUrl:
        "https://cdn.roadgoat.com/uploads/photo/image/345/large_travel-guide-of-burlington-vt-usa-original.jpg",
    },
    {
      id: "5",
      name: "South San Francisco, CA",
      photoUrl:
        "https://cdn.roadgoat.com/uploads/photo/image/2161/large_38904301632_a915ab07d8_o.jpg",
    },
    {
      id: "6",
      name: "Lahaina, HI",
      photoUrl:
        "https://cdn.roadgoat.com/uploads/photo/image/1931/large_lahaina.jpeg",
    },
    {
      id: "7",
      name: "West Yellowstone, MT",
      photoUrl:
        "https://cdn.roadgoat.com/uploads/photo/image/1929/large_WY.jpeg",
    },
  ];

  interface Event {
    onClick: (e: React.MouseEvent<HTMLElement>) => void;
  }

  // const onClick = (e: React.MouseEvent<HTMLElement>) => {
  //   console.log("clicked card!");
  //   console.log("id -->", e.target);
  // };
  // const onClick = () => {
  //   console.log("clicked card!");
  //   console.log("id -->");
  // };

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCountryCities(API.countryCities("united-states")));
    }
  }, [status, dispatch]);

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

  return (
    <div>
      <Hero />
      <div className={styles.cityCardsContainer}>{content}</div>
    </div>
  );
};

export default Homepage;
