import { useState } from "react";
import { useDispatch } from "react-redux";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import CustomDatePicker from "./DatePicker";
import LocationMenu from "./LocationMenu";
import MenuSectionWrapper from "./MenuSectionWrapper";
import { getData } from "../store/actions/dataActions";

const Search = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [cityId, setCityId] = useState("");
  const [cityCadasterId, setCityCadasterId] = useState("");
  const [realEstateType, setRealEstateType] = useState("831");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      startDate,
      endDate,
      cityId,
      cityCadasterId,
      realEstateType,
    };

    dispatch(getData(payload));
  };

  return (
    <Grid
      item
      xs={2}
      sx={{
        height: "100vh",
        mr: "20px",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <MenuSectionWrapper>
        <Typography varinat="h6" component="div" gutterBottom>
          Datum
        </Typography>
        <CustomDatePicker
          value={startDate}
          valueUpdater={setStartDate}
          label={"Pocetak"}
        />
        <CustomDatePicker
          value={endDate}
          valueUpdater={setEndDate}
          label={"Kraj"}
        />
      </MenuSectionWrapper>
      <MenuSectionWrapper>
        <Typography varinat="h6" component="div" gutterBottom>
          Opstina
        </Typography>
        <LocationMenu
          setCityId={setCityId}
          setCityCadasterId={setCityCadasterId}
        />
      </MenuSectionWrapper>
      <Button variant="outlined" onClick={handleSubmit}>
        Pretraga
      </Button>
    </Grid>
  );
};

export default Search;
