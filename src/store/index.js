import { configureStore } from "@reduxjs/toolkit";
import meLiSlice from "./slices/busqueda";

export const store = configureStore({
  reducer: {
    mercadoL: meLiSlice,
  },
});
