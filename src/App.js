import { Provider } from "react-redux";

// import CssBaseline from "@mui/material/CssBaseline";
// import { Grid } from "@mui/material";

// import Map from "./components/Map";
// import Search from "./components/Search";
// import DataDisplay from "./components/DataDisplay";

import store from "./store";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import FormPage from "./pages/FormPage";
import MapPage from "./pages/MapPage";

function App() {
  return (
    <>
      {/* <CssBaseline /> */}
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/map" element={<MapPage />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
