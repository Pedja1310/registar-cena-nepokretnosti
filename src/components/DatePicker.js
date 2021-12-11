import DateAdapter from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import TextField from "@mui/material/TextField";

const CustomDatePicker = ({ value, valueUpdater, label }) => {
  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <DatePicker
        label={label}
        value={value}
        views={["year", "month", "day"]}
        inputFormat={"dd/MM/yyyy"}
        onChange={(newValue) => {
          valueUpdater(newValue);
        }}
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
