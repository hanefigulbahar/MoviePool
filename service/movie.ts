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

export async function fetchTopRatedMovies() {
  try {
    const res = await fetchData("/movie/top_rated");
    return res.results;
  } catch (error) {}
}
