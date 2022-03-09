import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import polygonReducer from "./polygonReducer";
import markerReducer from "./markerReducer";
import requestDataReducer from "./requestDataReducer";

const rootReducer = combineReducers({
  requestData: requestDataReducer,
  data: dataReducer,
  polygon: polygonReducer,
  marker: markerReducer,
});

export default rootReducer;
