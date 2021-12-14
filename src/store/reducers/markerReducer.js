import { TOGGLE_MARKER } from "../constants";
import equals from "array-equal";

const initialState = {
  marker: [],
};

const markerReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MARKER:
      return {
        ...state,
        marker:
          state.marker.length === 0 || !equals(state.marker, action.payload)
            ? [...action.payload]
            : [],
      };
    default:
      return state;
  }
};

export default markerReducer;
