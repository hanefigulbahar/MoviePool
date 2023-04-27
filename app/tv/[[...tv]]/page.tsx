import TvContainer from "@/containers/tv";
import { resetSelectedTv } from "@/features/tv-features/selectedByGenreTvSlice";
import {
  fetchByGenre,
  fetchGenres,
  fetchPopular,
  fetchTopRated,
} from "@/service/movie";
import { store } from "@/store";

async function TVPage({ params }: any) {
  await store.dispatch(fetchTopRated("tv"));
  await store.dispatch(fetchPopular("tv"));
  await store.dispatch(fetchGenres("tv"));

  const { tvGenres } = store.getState().genresTv;
  if (params.tv !== undefined && params.tv !== "favicon.ico") {
    if (
      tvGenres?.find((genre) => genre.id === Number(params.tv[1])) &&
      tvGenres?.find((genre) => genre.name == params?.tv[0])
    ) {
      await store.dispatch(fetchByGenre({ type: "tv", id: params.tv[1] }));
    } else {
      throw new Error();
    }
  } else {
    store.dispatch(resetSelectedTv());
  }

  return (
    <div>
      <TvContainer categoryName={params} />
    </div>
  );
}

export default TVPage;
