import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MunicipalityPicker from "./MunicipalityPicker";

const FormPage2 = ({ changeFormPage }) => {
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
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "3rem",
          width: "100%",
        }}
      >
        <Button onChange={() => changeFormPage(1)}>
          <img
            src="/images/arrow-back-white.png"
            alt="Back button"
            style={{ height: "1.25rem", marginRight: "2rem" }}
          />
        </Button>
        <Typography variant="h6" sx={{ color: "white" }}>
          Izaberi Period
        </Typography>
      </Box>
      <img
        src="/images/date-icon.png"
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
        onClick={() => changeFormPage(3)}
      >
        potvrdi
      </Button>
      <Typography
        variant="caption"
        sx={{ fontSize: ".6rem", color: "white", width: "85%" }}
      >
        Prosecna cena kvadrata je na teritoriji Beograda porasla za 27341% u
        odnosu na 2020. godinu
      </Typography>
    </Box>
  );
};

export default FormPage2;
