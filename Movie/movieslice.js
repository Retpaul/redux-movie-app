import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieApi from "./shared/movieApi";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "Harry";
    const res = await movieApi.get(
      `?apiKey=7dae4644&s=${movieText}&type=movie`
    );

    return res.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    const seriesText = "friends";
    const res = await movieApi.get(
      `?apiKey=7dae4644&s=${seriesText}&type=series`
    );

    return res.data;
  }
);
export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async (id) => {
    const res = await movieApi.get(`?apiKey=7dae4644&i=${id}&Plot=full`);

    return res.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectMovieOrShow: {},
};
const movieSLice = createSlice({
  name: "movies",
  initialState,
  reducers: {
   
    removeSelectedMovieOrShow: (state) => {
      state.selectMovieOrShow = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("PENDING");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetched succesfully");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected");
    },
    [fetchAsyncShows.pending]: () => {
      console.log("PENDING");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("Fetched succesfully");
      return { ...state, shows: payload };
    },
    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
      console.log("Fetched succesfully");
      return { ...state, selectMovieOrShow: payload };
    },
    [fetchAsyncShows.rejected]: () => {
      console.log("Rejected");
    },
  },
});

export const { addMovies } = movieSLice.actions;
export default movieSLice.reducer;
export const getMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
