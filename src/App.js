import { Provider } from "react-redux";

import store from "./store";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import FormPage from "./pages/FormPage";
import SearchResultsPage from "./pages/SearchResultsPage";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/search-results" element={<SearchResultsPage />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
