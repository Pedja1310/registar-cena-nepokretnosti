import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

const LandingPage = () => {
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
      <Box>
        <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>
          U <span style={{ textDecoration: "underline" }}>3 laka koraka</span>{" "}
          saznaj realnu prosecnu cenu kvadrata na zeljenoj lokaciji u Beogradu
        </Typography>
        <Button
          component={Link}
          to="/form"
          sx={{
            backgroundColor: "#FFBB00",
            color: "#080F58",
            borderRadius: 80,
            width: "100%",
            height: "3rem",
            marginBottom: "1rem",
            marginTop: "5rem",
            fontSize: ".7rem",
            fontWeight: "bold",
          }}
        >
          saznaj cenu kvadrata
        </Button>
        <Button
          variant="outlined"
          sx={{
            borderColor: "white",
            color: "white",
            borderRadius: 80,
            width: "100%",
            height: "3rem",
            fontWeight: "bold",
            fontSize: ".7rem",
          }}
        >
          vise informacija
        </Button>
      </Box>
    </Container>
  );
};

export default LandingPage;
