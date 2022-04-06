import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MunicipalityPicker from "./MunicipalityPicker";

const FormPage1 = ({ changeFormPage }) => {
  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "50%", md: "35%", lg: "25%", xl: "20" },
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          marginBottom: "3rem",
          width: "100%",
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" sx={{ color: "white" }}>
          Izaberi lokaciju
        </Typography>
      </Box>
      <Box
        sx={{
          width: "10rem",
          height: "10rem",
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "3rem",
        }}
      >
        <img
          src="/images/planet-icon.png"
          alt="Planet icon"
          style={{ width: 100, alignSelf: "center" }}
        />
      </Box>
      <MunicipalityPicker />
      <Button
        to="/form"
        sx={{
          backgroundColor: "#FFBB00",
          color: "#080F58",
          borderRadius: 80,
          width: "100%",
          height: "3.5rem",
          marginBottom: "1rem",
          fontSize: ".7rem",
          fontWeight: 800,
          "&:hover": {
            backgroundColor: "#FFBB00",
          },
        }}
        onClick={() =>
          setTimeout(() => {
            changeFormPage(2);
          }, 150)
        }
      >
        potvrdi
      </Button>
      <Box sx={{ height: "3rem", textAlign: "center", width: "85%" }}>
        <Typography
          variant="caption"
          sx={{
            fontSize: ".6rem",
            color: "white",
          }}
        >
          U 2021. godini najveci broj prodatih stanova je bio u okviru opstine
          Novi Beograd
        </Typography>
      </Box>
    </Box>
  );
};

export default FormPage1;
