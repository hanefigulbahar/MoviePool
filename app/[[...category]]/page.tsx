import HomeContainer from "@/containers/home";
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

  if (params.category !== undefined)
    await store.dispatch(fetchMoviesByGenre(params.category[1]));
  return (
    <div>
      <HomeContainer categoryID={params.category} />
    </div>
  );
}
