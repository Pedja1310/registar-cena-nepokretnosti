import { Button, Container, Typography } from "@mui/material";
import LocationMenu from "../components/LocationMenu";
import { Box } from "@mui/system";

const FormPage2 = ({ changeFormPage }) => {
  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundImage: `url(${"/images/background-image.png"})`,
        backgroundSize: "cover",
        height: "85vh",
        paddingX: "2rem",
        width: "100%",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
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
            Izaberi Opstinu
          </Typography>
        </Box>
        <img
          src="/images/date-icon.png"
          alt="Planet icon"
          style={{ width: 100, alignSelf: "center", marginBottom: "5rem" }}
        />
        <LocationMenu />
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
    </Container>
  );
};

export default FormPage2;
