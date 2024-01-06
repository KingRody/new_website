import { useRef } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { geoJSON } from "leaflet";
import geoJsonStyles from "./geoJsonStyles";

const OpenStreetMap = () => {
  const mapRef = useRef();

  // geoJSON(JSON.parse(geoJsonStyles)).addTo(mapRef.current);

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
      ref={mapRef}
      style={{ height: "400px", zIndex: "0!important" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}></Marker>
    </MapContainer>
  );
};

export default OpenStreetMap;
