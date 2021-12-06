import DateAdapter from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import TextField from "@mui/material/TextField";

const CustomDatePicker = ({ value, valueUpdater, label }) => {
  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <DatePicker
        label={label}
        value={value}
        onChange={(newValue) => {
          valueUpdater(newValue.format("DD.MM.YYYY"));
        }}
        format="d"
        renderInput={(props) => (
          <TextField
            {...props}
            sx={{
              mb: "1rem",
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default CustomDatePicker;
