import { useEffect, useState } from "react";
import { MenuItem, Select, FormControl } from "@mui/material";
import { setStartAndEndDateAction } from "../store/actions/requestDataActions";
import { useDispatch } from "react-redux";

const PeriodPicker = () => {
  const dispatch = useDispatch();
  const [period, setPeriod] = useState(30);

  useEffect(() => {
    const to = new Date();
    const from = new Date(new Date().setDate(to.getDate() - period));

    dispatch(setStartAndEndDateAction({ from, to }));
  }, [period, dispatch]);

  const handleChange = (e) => {
    setPeriod(e.target.value);
  };

  return (
    <FormControl fullWidth>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={period}
        onChange={handleChange}
        hiddenLabel="true"
        sx={{
          width: "100%",
          backgroundColor: "white",
          borderRadius: "80px",
          marginBottom: "1rem",
          borderStyle: "none",
          outline: "none",
        }}
      >
        <MenuItem value={30}>Protekli mesec</MenuItem>
        <MenuItem value={90}>Poslednja tri meseca</MenuItem>
        <MenuItem value={183}>Poslednjih sest meseci</MenuItem>
        <MenuItem value={365}>Poslenjih godinu dana</MenuItem>
      </Select>
    </FormControl>
  );
};

export default PeriodPicker;
