import TvContainer from "@/containers/tv";
import { fetchGenres, fetchPopular, fetchTopRated } from "@/service/movie";
import { store } from "@/store";

async function TVPage() {
  await store.dispatch(fetchTopRated("tv"));
  await store.dispatch(fetchPopular("tv"));
  await store.dispatch(fetchGenres("tv"));
  return (
    <div>
      <TvContainer />
    </div>
  );
}

export default TVPage;
