import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import polygonReducer from "./polygonReducer";
import markerReducer from "./markerReducer";

const rootReducer = combineReducers({
  data: dataReducer,
  polygon: polygonReducer,
  marker: markerReducer,
});

export default rootReducer;
