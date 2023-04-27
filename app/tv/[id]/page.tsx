import MovieContainer from "@/containers/movie";
import { fetchByID } from "@/service/movie";
import { store } from "@/store";

async function TvDetailPage({ params }: any) {
  await store.dispatch(fetchByID({ type: "tv", movieID: params.id }));

  const { selectedTvSeries } = store.getState().tvByID;

  return <MovieContainer selectedTvSeries={selectedTvSeries} />;
}

export default TvDetailPage;
