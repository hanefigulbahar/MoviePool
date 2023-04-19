import FeaturedMovie from "@/components/featured-movie";
import GenresSection from "@/components/genres-section";
import MovieSection from "@/components/movie-section";
import { store } from "@/store";

interface TvContainerProps {}

function TvContainer() {
  const { topRatedTv } = store.getState().topRatedTv;
  const { tvGenres } = store.getState().genresTv;
  const { popularTv } = store.getState().popularTv;
  return (
    <div>
      <FeaturedMovie type="tv" tvData={topRatedTv} />
      <GenresSection genres={tvGenres} />
      <MovieSection type="tv" tv={topRatedTv} title="Top Rated Tv Series" />
      <MovieSection type="tv" tv={popularTv} title="Popular Tv Series" />
    </div>
  );
}

export default TvContainer;
