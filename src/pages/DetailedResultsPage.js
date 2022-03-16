import { Container, Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import Apartment from "../components/Apartment";

const DetailedResultsPage = () => {
  const { averagePrice, contracts } = useSelector((state) => state.data);

  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundImage: `url(${"/images/background-image.png"})`,
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingX: 0,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${"/images/result-background.png"})`,
          height: "5rem",
          marginTop: "2.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingX: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            justifyContent: "center",
            // alignItems: "center",
          }}
        >
          <Typography
            variant="caption"
            sx={{
              fontWeight: 500,
              padding: 0,
              color: "#080F58",
            }}
          >
            Prosecna cena za m2
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 800,
              padding: 0,
              lineHeight: "1.5rem",
              color: "#080F58",
            }}
          >
            {averagePrice.amount}.00&euro;
          </Typography>
        </Box>
        <Box
          sx={{
            width: "50%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button sx={{ minWidth: 0, paddingRight: "15%" }}>
            <img
              src="/images/filter-icon.png"
              alt="filter icon"
              style={{ width: "28px" }}
            />
          </Button>
          <Button sx={{ minWidth: 0 }}>
            <img
              src="/images/save-icon.png"
              alt="save icon"
              style={{ width: "38px" }}
            />
          </Button>
        </Box>
      </Box>
      <Box sx={{ height: "100%", width: "100%" }}>
        {contracts.map((contract, index) => (
          <Apartment
            key={contract.contractId}
            contract={contract}
            index={index}
          />
        ))}
      </Box>
    </Container>
  );
};

export default DetailedResultsPage;
