import { useState } from "react";
import { Button, Typography, Collapse } from "@mui/material";
import { Box } from "@mui/system";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

const Apartment = ({ contract, index }) => {
  const [showMap, setShowMap] = useState(false);

  const toggleMap = () => {
    setShowMap(!showMap);
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: `${index % 2 ? "white" : "#eff3ff"}`,
          paddingX: "2rem",
          paddingY: ".5rem",
          color: "#080F58",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: ".5rem",
            }}
          >
            <Box>
              <Typography variant="caption">Cena</Typography>
              <Typography
                variant="p"
                sx={{ fontWeight: 600, lineHeight: "1rem", display: "block" }}
              >
                {contract.price.amount}&euro;
              </Typography>
            </Box>
            <Box>
              <Typography variant="caption">Povrsina</Typography>
              <Typography
                variant="p"
                sx={{ fontWeight: 600, lineHeight: "1rem", display: "block" }}
              >
                {contract.surface}m2
              </Typography>
            </Box>
            <Box>
              <Typography variant="caption">Datum prodaje</Typography>
              <Typography
                variant="p"
                sx={{ fontWeight: 600, lineHeight: "1rem", display: "block" }}
              >
                {contract.contractDate}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex", position: "relative" }}>
          <Box>
            <Typography variant="caption">Cena za m2</Typography>
            <Typography
              sx={{ fontWeight: 700, fontSize: "2.2rem", lineHeight: 1 }}
            >
              {Math.round(contract.price.amount / contract.surface)}&euro;
            </Typography>
          </Box>
          <Box>
            <Button
              onClick={toggleMap}
              sx={{
                bottom: "-.5rem",
                right: "-2rem",
                position: "absolute",
                height: "3rem",
                width: "12.5rem",
                backgroundColor: "#535EDE",
                color: "white",
                borderRadius: "40px 0px 0px 0px",
                fontSize: ".75rem",
                "&:hover": {
                  backgroundColor: "#535EDE",
                },
              }}
            >
              Prikazi na mapi
            </Button>
          </Box>
        </Box>
      </Box>
      <Collapse in={showMap} timeout="auto">
        <Box sx={{ height: "25rem" }}>
          <MapContainer
            center={contract.cordinates}
            zoom={14}
            scrollWheelZoom={true}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={contract.cordinates} />
          </MapContainer>
        </Box>
      </Collapse>
    </>
  );
};

export default Apartment;
