import { GET_CONTRACTS, GET_AVERAGE_PRICE, SET_LOADING } from "../constants";

const initialState = {
  loading: false,
  contracts: [],
  averagePrice: {},
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTRACTS:
      return { ...state, contracts: action.payload };
    case GET_AVERAGE_PRICE:
      return { ...state, averagePrice: action.payload };
    case SET_LOADING:
      return { ...state, loading: !state.loading };
    default:
      return state;
  }
};

export default dataReducer;
