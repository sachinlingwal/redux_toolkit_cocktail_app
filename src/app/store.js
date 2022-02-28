import { configureStore } from "@reduxjs/toolkit";
import cocktailReducer from "../features/CocktailSlice";

export const store = configureStore({
  reducer: {
    cocktail: cocktailReducer,
  },
});
