import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import polygonReducer from "./polygonReducer";

const rootReducer = combineReducers({
  data: dataReducer,
  polygon: polygonReducer,
});

export default rootReducer;
