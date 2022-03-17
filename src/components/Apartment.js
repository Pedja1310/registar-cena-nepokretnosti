import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Apartment = ({ contract, index }) => {
  return (
    <Box
      sx={{
        backgroundColor: `${index % 2 ? "white" : "#eff3ff"}`,
        paddingX: "2rem",
        paddingY: ".5rem",
        color: "#080F58",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: ".5rem",
          }}
        >
          <Box>
            <Typography variant="caption">Cena</Typography>
            <Typography
              variant="p"
              sx={{ fontWeight: 600, lineHeight: "1rem", display: "block" }}
            >
              {contract.price.amount}&euro;
            </Typography>
          </Box>
          <Box>
            <Typography variant="caption">Povrsina</Typography>
            <Typography
              variant="p"
              sx={{ fontWeight: 600, lineHeight: "1rem", display: "block" }}
            >
              {contract.surface}m2
            </Typography>
          </Box>
          <Box>
            <Typography variant="caption">Datum prodaje</Typography>
            <Typography
              variant="p"
              sx={{ fontWeight: 600, lineHeight: "1rem", display: "block" }}
            >
              {contract.contractDate}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", position: "relative" }}>
        <Box>
          <Typography variant="caption">Cena za m2</Typography>
          <Typography
            sx={{ fontWeight: 700, fontSize: "2.2rem", lineHeight: 1 }}
          >
            {Math.round(contract.price.amount / contract.surface)}&euro;
          </Typography>
        </Box>
        <Box>
          <Button
            sx={{
              bottom: "-.5rem",
              right: "-2rem",
              position: "absolute",
              height: "3rem",
              width: "12.5rem",
              backgroundColor: "#535EDE",
              color: "white",
              borderRadius: "40px 0px 0px 0px",
              fontSize: ".75rem",
            }}
          >
            Prikazi na mapi
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Apartment;
