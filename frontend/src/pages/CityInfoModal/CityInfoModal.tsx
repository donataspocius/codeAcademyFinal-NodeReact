import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectAllCities } from "../../redux/content/contentSlice";
import styles from "./CityInfoModal.module.css";
import { CityData } from "../../redux/interfaces";
import { IoIosPeople } from "react-icons/Io";
import { BsFillPersonCheckFill } from "react-icons/Bs";
import { AiFillStar, AiFillCar } from "react-icons/Ai";
import { FaAirbnb, FaCity } from "react-icons/Fa";
import Button from "../../components/Button/Button";

interface ModalProps {
  id: string;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const CityInfoModal = ({ id, setModal }: ModalProps) => {
  const [cityData, setCityData] = useState<CityData>();

  const cities = useSelector(selectAllCities);
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

  return (
    <>
      <div className={styles.darkBackground}>
        <div className={styles.centered}>
          <div className={styles.modal}>
            <h1 className={styles.heading}>{cityData?.name}</h1>
            <div className={styles.contentContainer}>
              <div>
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
                    <BsFillPersonCheckFill size={50} className={styles.icons} />
                    CheckIn Count:&nbsp;
                    {cityData?.checkInCount}
                  </li>
                  <li>
                    <AiFillStar size={50} className={styles.icons} />
                    Average Rating:&nbsp;{cityData?.averageRating}
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
                  <Button>Been There 👍</Button>
                  <FaCity size={50} className={styles.icons} />
                  <Button>Want to Go 🚀</Button>
                </div>
              </div>
              <button onClick={handleClick}>SET MODAL BUTTON</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CityInfoModal;
