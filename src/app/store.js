import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import recipesSlice from "../features/recipesSlice";

export const store = configureStore({
  reducer: {
    recipes: recipesSlice.reducer,
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});
