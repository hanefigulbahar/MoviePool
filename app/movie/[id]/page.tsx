import MovieSection from "@/components/movie-section";
import MovieContainer from "@/containers/movie";
import { fetchByID } from "@/service/movie";
import { store } from "@/store";

async function MovieDetail({ params }: any) {
  await store.dispatch(fetchByID({ type: "movie", movieID: params.id }));

  const { selectedMovie } = store.getState().selectedByID;
  return (
    <div>
      <MovieContainer selectedMovie={selectedMovie} />
    </div>
  );
}

export default MovieDetail;
