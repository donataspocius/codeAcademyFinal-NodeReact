import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/images/marker-shadow.png";
import { LatLng } from "leaflet";
import styles from "./Map.module.css";

// interface MapCentreProps {
//   mapCentre: LatLng;
// }

interface coordsProps {
  coords: [number, number];
}

function SetViewOnClick({ coords }: coordsProps) {
  const map = useMap();
  map.panTo(coords);

  return null;
}

const Map = (coords: any) => {
  const [latLong, setLatLong] = useState<[number, number]>([51.505, -0.09]);

  // useEffect(() => {
  //   setLatLong(coords);
  // }, [latLong]);

  //   const lat = Number(cityData?.coordinates.lat!.toFixed(3));
  //   const long = Number(cityData?.coordinates.long!.toFixed(3));

  //   const cityCoords = {
  //     lat: lat,
  //     lng: long,
  //   };

  //   function UpdateMapCentre(props: MapCentreProps) {
  //     const map = useMap();
  //     map.panTo(props.mapCentre);
  //     return null;
  //   }
  // const Recenter = ({ lat, lng }: any) => {
  //   const map = useMap();
  //   useEffect(() => {
  //     map.setView([lat, lng]);
  //   }, [lat, lng]);
  //   return null;
  // };

  return (
    <MapContainer
      className={styles.map}
      // center={[lat, long]}
      center={latLong}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Recenter coords={coords} /> */}
      {/* <SetViewOnClick coords={coords} /> */}
      {/* <Marker position={[51.505, -0.09]}> */}
      {/* <Marker
    position={[
      cityData?.coordinates.lat!,
      cityData?.coordinates.long!,
    ]}
  > */}
      {/* <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker> */}
      {/* <UpdateMapCentre mapCentre={cityCoords} /> */}
      {/* <Recenter lat={coords[0]} lng={coords[1]} /> */}
    </MapContainer>
  );
};

export default Map;
