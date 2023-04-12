import React, { FC } from "react";
import FeaturedMovie from "@/components/featured-movie";
import GenresSection from "@/components/genres-section";
import MovieSection from "@/components/movie-section";
import { store } from "@/store";

interface HomeContainerProps {
  categoryID: string[];
}

const HomeContainer: FC<HomeContainerProps> = ({ categoryID }) => {
  const { popularMovies } = store.getState().popularMovie;
  const { topRatedMovies } = store.getState().topRatedMovie;
  const { selectedByGenre } = store.getState().selectedByGender;

  return (
    <div>
      <FeaturedMovie />
      <GenresSection />
      {selectedByGenre?.length !== undefined && (
        <MovieSection popularMovies={selectedByGenre} title={categoryID[0]} />
      )}
      <MovieSection popularMovies={popularMovies} title="Popular Movies" />
      <MovieSection popularMovies={topRatedMovies} title="TopRated Movies" />
    </div>
  );
};

export default HomeContainer;
