import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import municipalities from "../data/municipalities";
import { useDispatch } from "react-redux";
import { setMunicipalityAction } from "../store/actions/requestDataActions";
import { useSelector } from "react-redux";

const MunicipalityPicker = () => {
  const { municipality } = useSelector((state) => state.requestData);
  const dispatch = useDispatch();

  const setMunicipality = (municipality) => {
    if (municipality !== null && municipality.hasOwnProperty("id")) {
      dispatch(setMunicipalityAction(municipality));
    }
  };

  console.log(municipality);

  return (
    <Autocomplete
      variant={!municipality && "danger"}
      disablePortal
      id="combo-box-demo"
      options={municipalities}
      onChange={(e, value) => setMunicipality(value)}
      sx={{
        adornedStart: "none",
        width: "100%",
        backgroundColor: "white",
        borderRadius: "80px",
        marginBottom: "1rem",
        borderStyle: "none",
        outline: "none",
      }}
      renderInput={(params) => <TextField {...params} label="Opstina" />}
    />
  );
};

export default MunicipalityPicker;
