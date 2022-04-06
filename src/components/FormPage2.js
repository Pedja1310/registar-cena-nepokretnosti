import { Button, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/system";
import PeriodPicker from "./PeriodPicker";
import { getData } from "../store/actions/dataActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";

const FormPage2 = ({ changeFormPage }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { requestData } = useSelector((state) => state);
  const { loading } = useSelector((state) => state.data);

  const getDataFromDB = () => {
    dispatch(getData(requestData, navigate));
  };

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "20%" },
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          marginBottom: "3rem",
          width: "100%",
        }}
      >
        <IconButton
          edge="start"
          disableRipple={true}
          sx={{ width: "43px", padding: 0 }}
          onClick={() =>
            setTimeout(() => {
              changeFormPage(1);
            }, 100)
          }
        >
          <img src="/images/arrow-back-white.png" alt="Back button" />
        </IconButton>
        <Typography variant="h5" sx={{ color: "white" }}>
          Izaberi Period
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
          src="/images/date-icon.png"
          alt="Planet icon"
          style={{ width: 100, alignSelf: "center" }}
        />
      </Box>
      <PeriodPicker />
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
        onClick={getDataFromDB}
      >
        {loading ? (
          <CircularProgress sx={{ color: "#080F58" }} size={25} />
        ) : (
          "Potvrdi"
        )}
      </Button>
      <Box sx={{ height: "3rem", textAlign: "center", width: "85%" }}>
        <Typography
          variant="caption"
          sx={{
            fontSize: ".6rem",
            color: "white",
            width: "85%",
            textAlign: "center",
          }}
        >
          Prosecna cena kvadrata je na teritoriji Beograda porasla za 27341% u
          odnosu na 2020. godinu
        </Typography>
      </Box>
    </Box>
  );
};

export default FormPage2;
