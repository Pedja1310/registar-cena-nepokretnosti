import { GET_DATA } from "../constants";

const initialState = {};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      console.log("data reducer");
      return state;
    default:
      return state;
  }
};

export default dataReducer;
