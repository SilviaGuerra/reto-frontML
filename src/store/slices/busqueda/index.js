import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const meliSlice = createSlice({
  name: "busqueda",
  initialState: {
    results: [],
  },
  reducers: {
    busqueda: (state, action) => {
      state.results = action.payload;
      console.log("Freddie", action.payload);
    },
  },
});

export const { busqueda } = meliSlice.actions;

export default meliSlice.reducer;

// export const fetchAllproducts = () => (state, dispatch) => {
//   axios
//     .get(`https://api.mercadolibre.com/sites/MLA/search?q=${state}`)
//     .then((response) => {
//       console.log(response, "rssponde");
//       dispatch(busqueda(response.data));
//     })
//     .catch((error) => console.log(error, "error"));
// };
