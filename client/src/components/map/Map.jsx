import { MapContainer, TileLayer } from "react-leaflet";
import Pin from "../pin/Pin";
import "./map.scss";
import "leaflet/dist/leaflet.css";

function Map({ items }) {
  if (!items || items.length === 0) {
    return <p>No properties to display on the map.</p>;
  }

  return (
    <MapContainer
      center={[23.8103, 90.4125]}
      zoom={12}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {items.map((item) => (
        <Pin key={item.id} item={item} />
      ))}
    </MapContainer>
  );
}

export default Map;
