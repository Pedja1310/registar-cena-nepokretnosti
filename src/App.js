import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import store from "./store";
import theme from "./muiTheme";

import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import FormPage from "./pages/FormPage";
import MapPage from "./pages/MapPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import DetailedResultsPage from "./pages/DetailedResultsPage";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/search-results" element={<SearchResultsPage />} />
            <Route path="/detailed-results" element={<DetailedResultsPage />} />
          </Routes>
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
