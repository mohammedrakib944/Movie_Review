import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../components/apis/movieApi";
import { APIkey } from "../../components/apis/MovieApiKey";

const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "harry";
    const response = await movieApi.get(
      `?apikey=${APIkey}&s=${movieText}&type=movie`
    );
    const data = await response.data;
    return data;
  }
);

const initialState = {
  movies: {},
};
const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: {
    // when fetching data
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
    // if data is fetching successfully
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, movies: payload };
    },
    // if there is an error
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected");
    },
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;
