import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MunicipalityPicker from "./MunicipalityPicker";

const FormPage1 = ({ changeFormPage }) => {
  return (
    <Box
      sx={{
        width: "100%",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h5" sx={{ color: "white", marginBottom: "3rem" }}>
        Izaberi lokaciju
      </Typography>
      <img
        src="/images/planet-icon.png"
        alt="Planet icon"
        style={{ width: 100, alignSelf: "center", marginBottom: "5rem" }}
      />
      <MunicipalityPicker />
      <Button
        to="/form"
        sx={{
          backgroundColor: "#FFBB00",
          color: "#080F58",
          borderRadius: 80,
          width: "100%",
          height: "3rem",
          marginBottom: "1rem",
          fontSize: ".7rem",
          fontWeight: 800,
        }}
        onClick={() => changeFormPage(2)}
      >
        potvrdi
      </Button>
      <Typography
        variant="caption"
        sx={{ fontSize: ".6rem", color: "white", width: "85%" }}
      >
        U 2021. godini najveci broj prodatih stanova je bio u okviru opstine
        Novi Beograd
      </Typography>
    </Box>
  );
};

export default FormPage1;
