import React from "react";
import CityCard from "../../components/CityCard/CityCard";
import Hero from "../../components/Hero/Hero";
import styles from "./Homepage.module.css";

const Homepage = () => {
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

  return (
    <div>
      <Hero />
      <div className={styles.horizontalLine}></div>
      <div className={styles.cityCardsContainer}>
        {mockData.map((city) => {
          return (
            <CityCard
              key={city.id}
              id={city.id}
              name={city.name}
              photoUrl={city.photoUrl}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Homepage;
