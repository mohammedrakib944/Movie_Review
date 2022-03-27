import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies/movieSlice";
import authReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    auth: authReducer,
  },
});
