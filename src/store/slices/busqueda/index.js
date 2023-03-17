import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const meliSlice = createSlice({
  name: "busqueda",
  initialState: {
    results: [],
  },
  reducers: {
    busqueda: (state, action) => {
      state.results.push(action.payload);
    },
    resultado: (state, action) => {
      state.results = [action.payload];
    },
  },
});

export const { busqueda, resultado } = meliSlice.actions;

export default meliSlice.reducer;

export const fetchAllproducts = (results) => (dispatch) => {
  axios
    .get(`https://api.mercadolibre.com/sites/MLA/search?q=${results}`)
    .then((response) => {
      dispatch(resultado(response.data));
    })
    .catch((error) => console.log(error, "error"));
};
