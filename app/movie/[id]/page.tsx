import MovieSection from "@/components/movie-section";
import MovieContainer from "@/containers/movie";
import { fetchMoviesByID } from "@/service/movie";
import { store } from "@/store";

async function MovieDetail({ params }: any) {
  await store.dispatch(fetchMoviesByID({ type: "movie", movieID: params.id }));

  return (
    <div>
      <MovieContainer />
    </div>
  );
}

export default MovieDetail;
