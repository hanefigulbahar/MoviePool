import FeaturedMovie from "@/components/featured-movie";
import GenresSection from "@/components/genres-section";
import MovieSection from "@/components/movie-section";
import { store } from "@/store";

interface TvContainerProps {
  categoryName: any;
}

function TvContainer({ categoryName }: TvContainerProps) {
  const { topRatedTv } = store.getState().topRatedTv;
  const { tvGenres } = store.getState().genresTv;
  const { popularTv } = store.getState().popularTv;
  const { selectedTvGenre } = store.getState().selectedByGenreTv;

  return (
    <div>
      <FeaturedMovie type="tv" tvData={topRatedTv} />
      <GenresSection type="/tv/" genres={tvGenres} />
      {selectedTvGenre?.length !== 0 &&
        selectedTvGenre !== null &&
        !!categoryName && (
          <MovieSection
            type="tv"
            tv={selectedTvGenre}
            title={categoryName.tv[0]}
          />
        )}
      <MovieSection type="tv" tv={topRatedTv} title="Top Rated Tv Series" />
      <MovieSection type="tv" tv={popularTv} title="Popular Tv Series" />
    </div>
  );
}

export default TvContainer;
