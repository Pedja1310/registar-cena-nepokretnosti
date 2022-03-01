import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Map from "./Map";

const FormPage3 = () => {
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
        {/* <Typography variant="h5" sx={{ color: "white", marginBottom: "3rem" }}>
          Oznaci Zonu
        </Typography> */}
        <Box sx={{ width: "100%", padding: 0 }}>
          <Map />
        </Box>
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

export default FormPage3;
