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
      <FeaturedMovie />
      <GenresSection />
      {selectedByGenre?.length !== 0 &&
        selectedByGenre !== null &&
        !!categoryName && (
          <MovieSection
            movie={selectedByGenre}
            title={categoryName.category[0]}
          />
        )}
      <MovieSection movie={popularMovies} title="Popular Movies" />
      <MovieSection movie={topRatedMovies} title="TopRated Movies" />
    </div>
  );
};

export default HomeContainer;
