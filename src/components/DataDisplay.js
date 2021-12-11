import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { polygonFilter } from "../utils/polygonFilter";

const DataDisplay = () => {
  const data = useSelector((state) => state.data);
  const polygon = useSelector((state) => state.polygon.polygon);

  let rows = [];

  if (Object.keys(data).length) {
    for (const [key, value] of Object.entries(data.Ugovori)) {
      rows.push({
        id: key,
        datum: value.datumU,
        kvadratura: value.n[0].pov,
        cena: value.cena,
        cenaKvadrat: Math.ceil(value.cena / value.n[0].pov),
        latlng: [value.n[0].latlon.Lat, value.n[0].latlon.Lon],
      });
    }
  }

  if (polygon.length > 0) {
    rows = polygonFilter(rows, polygon);
  }

  const columns = [
    { field: "datum", headerName: "Datum Prodaje", width: 250 },
    { field: "kvadratura", headerName: "Povrsina", width: 250 },
    { field: "cena", headerName: "Cena (EUR)", width: 250 },
    { field: "cenaKvadrat", headerName: "Cena za kvadrat", width: 250 },
    { field: "latlng", headerName: "Koordinate", width: 250 },
  ];

  return (
    <Grid item sx={{ padding: "1rem" }}>
      <DataGrid rows={rows} columns={columns} autoHeight pageSize={20} />
    </Grid>
  );
};

export default DataDisplay;
