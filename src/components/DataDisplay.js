import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import {
  DataGrid,
  gridClasses,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { polygonFilter } from "../utils/polygonFilter";
import { useDispatch } from "react-redux";
import { toggleMarker } from "../store/actions/markerActions";

function CustomToolbar() {
  return (
    <GridToolbarContainer className={gridClasses.toolbarContainer}>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

const DataDisplay = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const polygon = useSelector((state) => state.polygon.polygon);

  const handleMarkerOnClick = (e) => {
    dispatch(toggleMarker(e.row.latlng));
  };

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
      <DataGrid
        rows={rows}
        columns={columns}
        autoHeight
        pageSize={25}
        components={{ Toolbar: CustomToolbar }}
        onRowClick={handleMarkerOnClick}
      />
    </Grid>
  );
};

export default DataDisplay;
