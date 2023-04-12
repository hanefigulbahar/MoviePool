import MovieSection from "@/components/movie-section";
import MovieContainer from "@/containers/movie";
import { fetchMoviesByID } from "@/service/movie";
import { store } from "@/store";

async function MovieDetail({ params }: any) {
  const movieDetail = await store.dispatch(fetchMoviesByID(params.id));

  return (
    <div>
      <MovieContainer />
    </div>
  );
}

export default MovieDetail;
