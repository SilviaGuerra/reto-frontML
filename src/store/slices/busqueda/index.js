import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const meliSlice = createSlice({
  name: "busqueda",
  initialState: {
    results: [],
    details: {},
  },
  reducers: {
    details: (state, action) => {
      state.details = action.payload;
    },
    resultado: (state, action) => {
      state.results = action.payload;
    },
  },
});

export const { details, resultado } = meliSlice.actions;

export default meliSlice.reducer;

export const fetchAllproducts = (results) => (dispatch) => {
  axios
    .get(
      `https://seashell-app-fpkyl.ondigitalocean.app/api/items?q=${results}&limit=4`
    )
    .then((response) => {
      dispatch(resultado(response.data));
    })
    .catch((error) => console.log(error, "error"));
};
export const fetchItemDetails = (id) => (dispatch) => {
  axios
    .get(`https://seashell-app-fpkyl.ondigitalocean.app/api/items/${id}`)
    .then((response) => {
      dispatch(details(response.data));
    })
    .catch((error) => console.log(error, "error"));
};
