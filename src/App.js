import { Provider } from "react-redux";

import CssBaseline from "@mui/material/CssBaseline";
import { Grid } from "@mui/material";

import Map from "./components/Map";
import Search from "./components/Search";
import DataDisplay from "./components/DataDisplay";

import store from "./store";
import Header from "./components/Header";

function App() {
  return (
    <>
      <CssBaseline />
      <Grid container direction="row">
        <Provider store={store}>
          <Header />
        </Provider>
      </Grid>
    </>
  );
}

export default App;
