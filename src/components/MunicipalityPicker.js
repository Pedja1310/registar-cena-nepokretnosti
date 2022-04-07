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

  return (
    <Autocomplete
      disablePortal
      options={municipalities}
      value={municipality?.id ? municipality : "Opstina"}
      isOptionEqualToValue={(option, value) => option.id !== value.id}
      onChange={(e, value) => setMunicipality(value)}
      blurOnSelect={"touch"}
      sx={{
        width: "100%",
        color: "#535EDE",
        backgroundColor: "white",
        borderRadius: "80px",
        marginBottom: "1rem",
        borderStyle: "none",
        outline: "none",
        notchedOutline: "false",
        "& fieldset": {
          borderRadius: "80px",
        },
      }}
      renderInput={(params) => <TextField {...params} />}
    />
  );
};

export default MunicipalityPicker;
