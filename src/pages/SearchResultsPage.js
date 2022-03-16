import { Container, Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SearchResultsPage = () => {
  const { averagePrice } = useSelector((state) => state.data);

  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundImage: `url(${"/images/background-image.png"})`,
        backgroundSize: "cover",
        height: "90vh",
        width: "100%",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingX: 0,
        paddingTop: "3rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "50%",
          backgroundImage: `url(${"/images/result-background.png"})`,
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="subtitle"
          sx={{ color: "#080F58", fontWeight: "600" }}
        >
          Prosecna cena kvadrata
        </Typography>
        <Typography
          variant="h2"
          sx={{
            display: "block",
            fontWeight: "900",
            color: "#080F58",
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          {averagePrice.amount}.00&euro;
        </Typography>
      </Box>
      <Box sx={{ alignSelf: "center", width: "85%", marginTop: "2rem" }}>
        <Button
          component={Link}
          to="/detailed-results"
          sx={{
            backgroundColor: "#FFBB00",
            color: "#080F58",
            borderRadius: 80,
            width: "100%",
            height: "3.5rem",
            marginBottom: "1rem",

            fontSize: ".7rem",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#FFBB00",
            },
          }}
        >
          Detalji pretrage
        </Button>
        <Button
          variant="outlined"
          sx={{
            borderColor: "white",
            color: "white",
            borderRadius: 80,
            width: "100%",
            height: "3.5rem",
            fontWeight: "bold",
            fontSize: ".7rem",
            "&:hover": {
              backgroundColor: "transparent",
              borderColor: "white",
            },
          }}
        >
          Nova pretraga
        </Button>
      </Box>
    </Container>
  );
};

export default SearchResultsPage;
