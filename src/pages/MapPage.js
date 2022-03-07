import { Container } from "@mui/material";
import { MapContainer, TileLayer, FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import { Box } from "@mui/system";
import "leaflet-draw/dist/leaflet.draw.css";

const MapPage = () => {
  const position = [44.8125, 20.4612];

  const handleOnCreate = (e) => {
    const { _latlngs } = e.layer;

    const polygon = Object.values(_latlngs[0]).map((obj) => Object.values(obj));

    console.log(polygon);
  };

  const handleOnEdited = (e) => {};

  const handleOnDeleted = (e) => {
    console.log("Polygon deleted.");
  };

  return (
    <Container sx={{ height: "60vh", width: "80%", padding: 0 }}>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
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
      </MapContainer>
      <Box></Box>
    </Container>
  );
};

export default MapPage;
