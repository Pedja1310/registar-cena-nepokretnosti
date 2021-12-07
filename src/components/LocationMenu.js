import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import opstine from "../data/opstine";
import { useState } from "react";

const LocationMenu = ({ setCityId, setCityCadasterId }) => {
  const [katastarskeOpstine, setKatastarskeOpstine] = useState([]);

  const handleDisabledDropdown = (e) => {
    setCityId(e.target.value);

    const opstina = opstine.find((item) => item.id === e.target.value);

    setKatastarskeOpstine(opstina.katastarskeOpstine);
  };

  const handleCityCadasterId = (e) => {
    setCityCadasterId(e.target.value);
  };

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="opstina">Opstina</InputLabel>
        <Select
          defaultValue=""
          labelId="opstina"
          label="Opstina"
          sx={{ mb: "1rem" }}
          onChange={handleDisabledDropdown}
        >
          {opstine.map((op) => (
            <MenuItem value={op.id} key={op.id}>
              {op.nazivOpstine}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth disabled={katastarskeOpstine.length === 0}>
        <InputLabel id="katastarskeOpstine">Kat. Opstina</InputLabel>
        <Select
          defaultValue=""
          labelId="opstina"
          label="Opstina"
          sx={{ mb: "1rem" }}
          onChange={handleCityCadasterId}
        >
          {katastarskeOpstine.map((katOp) => (
            <MenuItem value={katOp.id} key={katOp.id}>
              {katOp.naziv}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default LocationMenu;
