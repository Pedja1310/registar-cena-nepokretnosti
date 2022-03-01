import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import opstine from "../data/opstine";
import { useState } from "react";

const LocationMenu = ({ setCityId, setCityCadasterId }) => {
  // const [katastarskeOpstine, setKatastarskeOpstine] = useState([]);

  // const handleDisabledDropdown = (e) => {
  //   setCityId(e.target.value);

  //   const opstina = opstine.find((item) => item.id === e.target.value);

  //   setKatastarskeOpstine(opstina.katastarskeOpstine);
  // };

  // const handleCityCadasterId = (e) => {
  //   setCityCadasterId(e.target.value);
  // };

  return (
    <>
      <FormControl fullWidth sx={{ marginBottom: "1rem" }}>
        <InputLabel
          id="opstina"
          shrink={false}
          sx={{ fontSize: ".9rem", color: "#535EDE" }}
        >
          Unesite Naziv Opstine
        </InputLabel>
        <Select
          defaultValue=""
          labelId="opstina"
          label="Opstina"
          // onChange={}
          sx={{ backgroundColor: "white", borderRadius: 80 }}
        >
          {opstine.map((op) => (
            <MenuItem value={op.id} key={op.id}>
              {op.nazivOpstine}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default LocationMenu;
