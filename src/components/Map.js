import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.css";

const Map = () => {
  const data = useSelector((state) => state.data);

  let markers = [];

  if (Object.entries(data).length !== 0) {
    markers = Object.values(data.Ugovori).map((item) => item.n[0].latlon);
  }

  console.log(markers);

  return (
    <Grid item sx={{ padding: "1rem", flex: 1 }}>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </Grid>
  );
};

export default Map;
