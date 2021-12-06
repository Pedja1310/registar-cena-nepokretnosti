import CssBaseline from "@mui/material/CssBaseline";
import { Grid } from "@mui/material";

import Map from "./components/Map";
import Search from "./components/Search";
import DataDisplay from "./components/DataDisplay";

function App() {
  return (
    <>
      <CssBaseline />
      <Grid container>
        <Search />
        {/* <Map /> */}
        <DataDisplay />
      </Grid>
    </>
  );
}

export default App;
