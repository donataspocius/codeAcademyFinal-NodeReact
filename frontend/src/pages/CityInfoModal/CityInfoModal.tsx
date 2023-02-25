import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToVisitedCities,
  addToWishCities,
  selectAllCities,
  selectWishCities,
  selectVisitedCities,
} from "../../redux/content/contentSlice";
import styles from "./CityInfoModal.module.css";
import { CityData } from "../../redux/interfaces";
import { IoIosPeople } from "react-icons/io";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { AiFillStar, AiFillCar } from "react-icons/ai";
import { FaAirbnb, FaCity } from "react-icons/fa";
import Button from "../../components/Button/Button";
import Map from "../../components/Map/Map";
import { RiCloseLine } from "react-icons/ri";
import { selectAuthToken } from "../../redux/auth/authSlice";

interface ModalProps {
  id: string;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  context: "cities" | "wishCities" | "visitedCities";
}

const CityInfoModal = ({ id, setModal, context }: ModalProps) => {
  const [cityData, setCityData] = useState<CityData>();

  const dispatch = useDispatch();
  const cities = useSelector(selectAllCities);
  const wishCities = useSelector(selectWishCities);
  const visitedCities = useSelector(selectVisitedCities);
  const authenticated = useSelector(selectAuthToken);

  let CityDataInState: CityData[];
  let disableVisitedBtn: boolean = true;
  let disableWishBtn: boolean = true;

  switch (context) {
    case "cities":
      CityDataInState = cities.filter((city) => city.id === id);
      const isInVisited = visitedCities.filter((city) => city.id === id);
      const isInWish = wishCities.filter((city) => city.id === id);

      !isInVisited.length
        ? (disableVisitedBtn = false)
        : (disableVisitedBtn = true);
      !isInWish.length ? (disableWishBtn = false) : (disableWishBtn = true);
      break;
    case "visitedCities":
      CityDataInState = visitedCities.filter((city) => city.id === id);
      break;
    case "wishCities":
      CityDataInState = wishCities.filter((city) => city.id === id);
      break;
    default:
      break;
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
    e.stopPropagation();
    setModal(false);
    dispatch(addToVisitedCities(cityData!));
  };

  const handleAddToWish = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setModal(false);
    dispatch(addToWishCities(cityData!));
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
                  {!Boolean(authenticated) && (
                    <div className={styles.messageDiv}>
                      Please login to manage your cities
                    </div>
                  )}
                  {Boolean(authenticated) && (
                    <div className={styles.buttonsContainer}>
                      <Button
                        disabled={disableVisitedBtn}
                        onClick={handleAddToVisited}
                      >
                        Been There
                      </Button>
                      <Button
                        disabled={disableWishBtn}
                        onClick={handleAddToWish}
                      >
                        Want to Go
                      </Button>
                    </div>
                  )}
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
