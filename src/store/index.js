import { configureStore } from "@reduxjs/toolkit";
import resultsReducer from "./slices/busqueda";

export const store = configureStore({
  reducer: {
    busqueda: resultsReducer,
  },
});
