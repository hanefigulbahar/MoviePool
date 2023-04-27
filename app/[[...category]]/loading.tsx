import React from "react";

import { FeatureMovieLoading } from "@/components/featured-movie/loading";
import { GenreLoading } from "@/components/genres-section/loading";
import { MoviesSectionLoading } from "@/components/movie-section/loading";

function HomeLoading() {
  return (
    <>
      <FeatureMovieLoading />
      <GenreLoading />
      <MoviesSectionLoading />
      <MoviesSectionLoading />
      <MoviesSectionLoading />
    </>
  );
}

export default HomeLoading;
