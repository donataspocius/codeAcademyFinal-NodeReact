import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/images/marker-shadow.png";
import styles from "./Map.module.css";

interface coordsProps {
  coords: [number, number];
}

const Map = ({ coords }: any) => {
  const [latLong, setLatLong] = useState<[number, number]>(coords);

  return (
    <MapContainer
      className={styles.map}
      center={latLong}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default Map;
