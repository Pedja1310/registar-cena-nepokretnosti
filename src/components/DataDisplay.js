import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const DataDisplay = () => {
  const data = useSelector((state) => state.data);

  const rows = [];

  if (Object.keys(data).length) {
    for (const [key, value] of Object.entries(data.Ugovori)) {
      rows.push({
        id: key,
        datum: value.datumU,
        kvadratura: value.n[0].pov,
        cena: value.cena,
        cenaKvadrat: Math.ceil(value.cena / value.n[0].pov),
      });
    }
  }

  const columns = [
    { field: "datum", headerName: "Datum Prodaje", width: 250 },
    { field: "kvadratura", headerName: "Povrsina", width: 250 },
    { field: "cena", headerName: "Cena (EUR)", width: 250 },
    { field: "cenaKvadrat", headerName: "Cena za kvadrat", width: 250 },
  ];

  return (
    <Grid item style={{ flexGrow: 1, padding: "1rem" }}>
      <DataGrid rows={rows} columns={columns} autoHeight />
    </Grid>
  );
};

export default DataDisplay;
