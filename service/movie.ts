import { createAsyncThunk } from "@reduxjs/toolkit";
const BASE_URL = "https://api.themoviedb.org/3";

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function fetchData(path: string, { query = "" } = {}) {
  await delay(500);

  try {
    const res = await fetch(
      `${BASE_URL}${path}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&${query}`
    );
    return res.json();
  } catch (error) {
    throw new Error("opsssss");
  }
}
export const fetchGenres = createAsyncThunk(
  "fetchGenres",
  async (type: string) => {
    try {
      const res = await fetchData(`/genre/${type}/list`);
      return res.genres;
    } catch (error) {
      console.log("genres error");
    }
  }
);

export const fetchTopRated = createAsyncThunk(
  "fetchTopRated",
  async (type: string) => {
    try {
      const res = await fetchData(`/${type}/top_rated`);
      return res.results;
    } catch (error) {
      console.log("top rated error");
    }
  }
);

export const fetchPopular = createAsyncThunk(
  "fetchPopular",
  async (type: string) => {
    try {
      const res = await fetchData(`/${type}/popular`);
      return res.results;
    } catch (error) {
      console.log("popular error");
    }
  }
);

export const fetchByGenre = createAsyncThunk(
  "fetchByGenre",
  async (pathParams: { type: string; id: string }) => {
    const { type, id } = pathParams;
    try {
      const res = await fetchData(`/discover/${type}`, {
        query: `with_genres=${id}`,
      });
      return res.results;
    } catch (error) {
      throw new Error("Error happened while fetching top rated movies");
    }
  }
);

export const fetchByID = createAsyncThunk(
  "fetchByID",
  async (pathParams: { type: string; movieID: string }) => {
    const { type, movieID } = pathParams;
    try {
      const res = await fetchData(`/${type}/${movieID}`, {
        query: "append_to_response=videos",
      });
      return res;
    } catch (error) {
      throw new Error("error");
    }
  }
);
