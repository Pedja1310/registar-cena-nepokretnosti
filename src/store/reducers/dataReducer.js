import { GET_CONTRACTS, GET_AVERAGE_PRICE, SET_LOADING } from "../constants";

const initialState = {
	loading: false,
	contracts: [
		{
			contractId: "001",
			price: { amount: 92000 },
			surface: 68,
			contractDate: "2025-11-15",
			cordinates: [44.8145, 20.4125],
		},
		{
			contractId: "002",
			price: { amount: 75000 },
			surface: 55,
			contractDate: "2025-10-22",
			cordinates: [44.8165, 20.4085],
		},
		{
			contractId: "003",
			price: { amount: 125000 },
			surface: 85,
			contractDate: "2025-12-08",
			cordinates: [44.8195, 20.4155],
		},
		{
			contractId: "004",
			price: { amount: 58000 },
			surface: 42,
			contractDate: "2025-09-30",
			cordinates: [44.8125, 20.4095],
		},
		{
			contractId: "005",
			price: { amount: 110000 },
			surface: 72,
			contractDate: "2025-11-28",
			cordinates: [44.8175, 20.4205],
		},
		{
			contractId: "006",
			price: { amount: 88000 },
			surface: 60,
			contractDate: "2025-12-15",
			cordinates: [44.8155, 20.4175],
		},
		{
			contractId: "007",
			price: { amount: 145000 },
			surface: 98,
			contractDate: "2025-10-10",
			cordinates: [44.8205, 20.4065],
		},
		{
			contractId: "008",
			price: { amount: 67000 },
			surface: 48,
			contractDate: "2025-11-05",
			cordinates: [44.8135, 20.4145],
		},
		{
			contractId: "009",
			price: { amount: 95000 },
			surface: 65,
			contractDate: "2025-12-20",
			cordinates: [44.8185, 20.4115],
		},
		{
			contractId: "010",
			price: { amount: 102000 },
			surface: 70,
			contractDate: "2025-11-18",
			cordinates: [44.8165, 20.4195],
		},
	],
	averagePrice: { amount: 1436 },
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
