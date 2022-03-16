import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Apartment = ({ contract, index }) => {
  return (
    <Box
      sx={{ height: "7rem", backgroundColor: index % 2 ? "white" : "#eff3ff" }}
    >
      <Typography>{contract.price.amount}</Typography>
    </Box>
  );
};

export default Apartment;
