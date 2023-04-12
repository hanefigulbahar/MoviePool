import { createAsyncThunk } from "@reduxjs/toolkit";
const BASE_URL = "https://api.themoviedb.org/3";

async function fetchData(path: string, { query = "" } = {}) {
  try {
    const res = await fetch(
      `${BASE_URL}${path}?api_key=${process.env.API_KEY}&${query}`
    );
    return res.json();
  } catch (error) {
    throw new Error("opsssss");
  }
}
export const fetchGenres = createAsyncThunk(
  "categories/fetchGenres",
  async () => {
    try {
      const res = await fetchData("/genre/movie/list");
      return res.genres;
    } catch (error) {
      console.log("genres error");
    }
  }
);

export const fetchTopRatedMovies = createAsyncThunk(
  "movies/fetchTopRatedMovies",
  async () => {
    try {
      const res = await fetchData("/movie/top_rated");
      return res.results;
    } catch (error) {
      console.log("top rated movies error");
    }
  }
);

export const fetchPopularMovies = createAsyncThunk(
  "movies/fetchPopularMovies",
  async () => {
    try {
      const res = await fetchData("/movie/popular");
      return res.results;
    } catch (error) {
      console.log("popular movies error");
    }
  }
);

export const fetchMoviesByGenre = createAsyncThunk(
  "movies/fetchMoviesByGenre",
  async (id: string) => {
    try {
      const res = await fetchData(`/discover/movie`, {
        query: `with_genres=${id}`,
      });
      return res.results;
    } catch (error) {
      throw new Error("Error happened while fetching top rated movies");
    }
  }
);
