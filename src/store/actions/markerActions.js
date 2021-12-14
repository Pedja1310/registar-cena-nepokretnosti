import { TOGGLE_MARKER } from "../constants";

export const toggleMarker = (payload) => (dispatch) => {
  dispatch({ type: TOGGLE_MARKER, payload });
};
