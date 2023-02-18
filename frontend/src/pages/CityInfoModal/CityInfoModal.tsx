import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToVisitedCities,
  addToWishCities,
  selectAllCities,
  selectVisitedCitiesData,
  selectWishCitiesData,
} from "../../redux/content/contentSlice";
import styles from "./CityInfoModal.module.css";
import { CityData } from "../../redux/interfaces";
import { IoIosPeople } from "react-icons/Io";
import { BsFillPersonCheckFill } from "react-icons/Bs";
import { AiFillStar, AiFillCar } from "react-icons/Ai";
import { FaAirbnb, FaCity } from "react-icons/Fa";
import Button from "../../components/Button/Button";
import Map from "../../components/Map/Map";
import { RiCloseLine } from "react-icons/ri";
import { selectAuthToken } from "../../redux/auth/authSlice";

interface ModalProps {
  id: string;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const CityInfoModal = ({ id, setModal }: ModalProps) => {
  const [cityData, setCityData] = useState<CityData>();

  const cities = useSelector(selectAllCities);
  const wishCities = useSelector(selectWishCitiesData);
  const visitedCities = useSelector(selectVisitedCitiesData);
  const authenticated = useSelector(selectAuthToken);
  const dispatch = useDispatch();

  const CityDataInState = cities.filter((city) => city.id === id);

  //   TO-DO
  if (!CityDataInState) {
  }

  useEffect(() => {
    setCityData(CityDataInState[0]);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setModal(false);
  };

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setModal(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  const coords = [
    Number(cityData?.coordinates.lat),
    Number(cityData?.coordinates.long),
  ];

  const handleAddToVisited = (e: React.MouseEvent<HTMLElement>) => {
    setModal(false);
    dispatch(addToVisitedCities(cityData?.id!));
  };

  const handleAddToWish = (e: React.MouseEvent<HTMLElement>) => {
    setModal(false);
    dispatch(addToWishCities(cityData?.id!));
  };

  return (
    <>
      {cityData && (
        <div className={styles.darkBackground}>
          <div className={styles.centered}>
            <div className={styles.modal}>
              <h1 className={styles.heading}>{cityData?.name}</h1>
              <button className={styles.closeBtn} onClick={handleClick}>
                <RiCloseLine style={{ marginBottom: "-3px" }} />
              </button>
              <div className={styles.contentContainer}>
                <div className={styles.pictureContainer}>
                  <img
                    className={styles.picture}
                    src={cityData?.photoUrl}
                    alt={cityData?.name}
                  />
                </div>
                <div className={styles.content}>
                  <ul>
                    <li>
                      {" "}
                      <IoIosPeople size={50} className={styles.icons} />
                      Population:&nbsp;
                      {cityData?.population}
                    </li>
                    <li>
                      <BsFillPersonCheckFill
                        size={50}
                        className={styles.icons}
                      />
                      CheckIn Count:&nbsp;
                      {cityData?.checkInCount}
                    </li>
                    <li>
                      <AiFillStar size={50} className={styles.icons} />
                      Average Rating:&nbsp;{cityData?.averageRating.toFixed(2)}
                    </li>
                  </ul>
                  <div className={styles.linksContainer}>
                    <div className={styles.link}>
                      <a href={cityData?.airbnbUrl}>
                        <FaAirbnb size={50} className={styles.icons} />
                      </a>
                      Check Airbnb&nbsp;
                    </div>
                    <div className={styles.link}>
                      <a href={cityData?.carRentalUrl}>
                        <AiFillCar size={50} className={styles.icons} />
                      </a>
                      Rent a Car&nbsp;
                    </div>
                    <div className={styles.link}>
                      <a href={cityData?.cityGuideUrl}>
                        <FaCity size={50} className={styles.icons} />
                      </a>
                      Plan a City Tour&nbsp;
                    </div>
                  </div>
                  <div className={styles.buttonsContainer}>
                    <Button
                      disabled={!Boolean(authenticated)}
                      onClick={handleAddToVisited}
                    >
                      Been There
                    </Button>
                    <Button
                      disabled={!Boolean(authenticated)}
                      onClick={handleAddToWish}
                    >
                      Want to Go
                    </Button>
                  </div>
                </div>
              </div>
              <Map coords={coords} />
            </div>
          </div>
        </div>
      )}
      ;
    </>
  );
};

export default CityInfoModal;
