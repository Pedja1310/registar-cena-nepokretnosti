import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  FeatureGroup,
} from "react-leaflet";
import { EditControl } from "react-leaflet-draw";

import { createPolygon, removePolygon } from "../store/actions/polygonActions";

import "./Map.css";
import "leaflet-draw/dist/leaflet.draw.css";

const Map = () => {
  const dispatch = useDispatch();
  // const data = useSelector((state) => state.data);

  // let markers = [];

  // if (Object.entries(data).length !== 0) {
  //   markers = Object.values(data.Ugovori).map((item) => item.n[0].latlon);
  // }

  const handleOnCreate = (e) => {
    const { _latlngs } = e.layer;

    const polygon = Object.values(_latlngs[0]).map((obj) => Object.values(obj));

    dispatch(createPolygon(polygon));
  };

  const handleOnEdited = (e) => {};

  const handleOnDeleted = (e) => {
    dispatch(removePolygon());
  };

  return (
    <Grid item sx={{ padding: "1rem" }}>
      <MapContainer
        center={[44.8125, 20.4612]}
        zoom={12}
        scrollWheelZoom={true}
      >
        <FeatureGroup>
          <EditControl
            position="topright"
            onCreated={handleOnCreate}
            onEdited={handleOnEdited}
            onDeleted={handleOnDeleted}
            draw={{
              rectangle: false,
              polyline: false,
              circle: false,
              circlemarker: false,
              marker: false,
            }}
          />
        </FeatureGroup>

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[44.8125, 20.4612]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </Grid>
  );
};

export default Map;
