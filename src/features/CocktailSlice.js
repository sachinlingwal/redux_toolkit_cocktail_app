import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchCocktails = createAsyncThunk(
  "cocktails/fetchCocktails",
  async () => {
    let res = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
    );
    let data = await res.json();
    return data;
  }
);
export const fetchSingleCocktail = createAsyncThunk(
  "cocktail/fetchCocktail",
  async ({ id }) => {
    let res = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    let data = await res.json();
    console.log(data);
    return data;
  }
);

export const cocktailSlice = createSlice({
  name: "cocktails",
  initialState: {
    cocktails: [],
    cocktail: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [fetchCocktails.pending]: (state) => {
      state.loading = true;
    },
    [fetchCocktails.fulfilled]: (state, action) => {
      state.cocktails = action.payload.drinks;
      state.loading = false;
    },
    [fetchCocktails.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    [fetchSingleCocktail.pending]: (state) => {
      state.loading = true;
    },
    [fetchSingleCocktail.fulfilled]: (state, action) => {
      state.cocktail = action.payload.drinks;
      state.loading = false;
    },
    [fetchSingleCocktail.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});
export default cocktailSlice.reducer;
