import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRecipes = createAsyncThunk("fetchRecipes", async () => {
  const result = await axios.get("/data/recipes.json").then((res) => res.data);
  return result;
});

const recipesSlice = createSlice({
  name: "recipesSlice",
  initialState: {
    recipes: [],
    status: "idle", // loading, failed, succeeded
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRecipes.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchRecipes.rejected, (state) => {
      state.status = "failed";
    });
    builder.addCase(fetchRecipes.fulfilled, (state, { payload }) => {
      state.recipes = payload;
      state.status = "succeeded";
    });
  },
});

export default recipesSlice;
