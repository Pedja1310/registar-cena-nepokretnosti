import { Button, Container, Typography } from "@mui/material";
import LocationMenu from "../components/LocationMenu";
import { Box } from "@mui/system";

const FormPage1 = ({ changeFormPage }) => {
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
        <Typography variant="h5" sx={{ color: "white", marginBottom: "3rem" }}>
          Izaberi period
        </Typography>
        <img
          src="/images/planet-icon.png"
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
    </Container>
  );
};

export default FormPage1;
