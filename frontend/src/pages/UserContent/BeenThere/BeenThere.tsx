import React from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "../UserContent.module.css";
import Map from "../../../components/Map/Map";

const BeenThere = () => {
  const coords = [54.689, 25.28];
  return (
    <>
      <div>
        <div>BeenThere</div>
        <Map coords={coords} />
        <h1>END</h1>
      </div>
    </>
  );
};

export default BeenThere;
