import HomeContainer from "@/containers/home";
import { resetSelectedMovies } from "@/features/movie-features/selectedByGenreMoviesSlice";

import {
  fetchGenres,
  fetchByGenre,
  fetchPopular,
  fetchTopRated,
} from "@/service/movie";
import { store } from "@/store";

async function Home({ params }: any) {
  await store.dispatch(fetchTopRated("movie"));
  await store.dispatch(fetchPopular("movie"));
  await store.dispatch(fetchGenres("movie"));

  const { genres } = store.getState().genres;

  if (params.category !== undefined && params.category[0] !== "favicon.ico") {
    if (
      genres?.find((genre) => genre.id === Number(params.category[1])) &&
      genres?.find((genre) => genre.name == params?.category[0])
    ) {
      await store.dispatch(
        fetchByGenre({ type: "movie", id: params.category[1] })
      );
    } else {
      throw new Error();
    }
  } else {
    store.dispatch(resetSelectedMovies());
  }

  return (
    <div>
      <HomeContainer categoryName={params} />
    </div>
  );
}

export default Home;
