import React, { FC } from "react";
import FeaturedMovie from "@/components/featured-movie";
import GenresSection from "@/components/genres-section";
import MovieSection from "@/components/movie-section";
import { store } from "@/store";

interface HomeContainerProps {
  categoryName: any;
}

const HomeContainer: FC<HomeContainerProps> = ({ categoryName }) => {
  const { popularMovies } = store.getState().popularMovie;
  const { topRatedMovies } = store.getState().topRatedMovie;
  const { selectedByGenre } = store.getState().selectedByGender;
  const { genres } = store.getState().genres;
  return (
    <div>
      <FeaturedMovie type="movie" movieData={topRatedMovies} />
      <GenresSection genres={genres} />
      {selectedByGenre?.length !== 0 &&
        selectedByGenre !== null &&
        !!categoryName && (
          <MovieSection
            type="movie"
            movie={selectedByGenre}
            title={categoryName.category[0]}
          />
        )}
      <MovieSection type="movie" movie={popularMovies} title="Popular Movies" />
      <MovieSection
        type="movie"
        movie={topRatedMovies}
        title="TopRated Movies"
      />
    </div>
  );
};

export default HomeContainer;
