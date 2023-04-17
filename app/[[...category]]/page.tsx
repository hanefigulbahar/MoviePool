import HomeContainer from "@/containers/home";
import { resetSelectedMovies } from "@/features/selectedByGenreMoviesSlice";

import {
  fetchGenres,
  fetchMoviesByGenre,
  fetchPopularMovies,
  fetchTopRatedMovies,
} from "@/service/movie";
import { store } from "@/store";

export default async function Home({ params }: any) {
  await store.dispatch(fetchTopRatedMovies());
  await store.dispatch(fetchPopularMovies());
  await store.dispatch(fetchGenres());

  const { genres } = store.getState().genres;

  if (params.category !== undefined) {
    if (
      genres?.find((genre) => genre.id === Number(params.category[1])) &&
      genres?.find((genre) => genre.name == params?.category[0])
    ) {
      await store.dispatch(fetchMoviesByGenre(params.category[1]));
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
