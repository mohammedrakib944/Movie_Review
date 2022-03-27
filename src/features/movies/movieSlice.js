import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../components/apis/movieApi";
import { APIkey } from "../../components/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (searchText) => {
    const response = await movieApi.get(
      `?apikey=${APIkey}&s=${searchText}&type=movie`
    );
    const data = await response.data;
    return data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (searchText) => {
    const response = await movieApi.get(
      `?apikey=${APIkey}&s=${searchText}&type=series`
    );
    const data = await response.data;
    return data;
  }
);

export const fetchDetails = createAsyncThunk(
  "movies/fetchDetails",
  async (id) => {
    const response = await movieApi.get(`?apikey=${APIkey}&i=${id}&Plot=full`);
    const data = await response.data;
    return data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  details: {},
};
const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    // addMovies: (state, { payload }) => {
    //   state.movies = payload;
    // },
    removeDetails: (state) => {
      state.details = {};
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

    // if data is fetching successfully (for shows)
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, shows: payload };
    },
    // if data is fetching successfully (for shows)
    [fetchDetails.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, details: payload };
    },
  },
});

export const { removeDetails } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getDetails = (state) => state.movies.details;
export default movieSlice.reducer;
