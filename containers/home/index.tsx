import React, { FC } from "react";
import FeaturedMovie from "@/components/featured-movie";
import { Movie } from "@/types/movie";

interface HomeContainerProps {
  topRatedMovies: Movie[];
}

const HomeContainer: FC<HomeContainerProps> = ({ topRatedMovies }) => {
  return (
    <div>
      <FeaturedMovie
        movie={
          topRatedMovies[Math.floor(Math.random() * topRatedMovies.length)]
        }
      />
    </div>
  );
};

export default HomeContainer;
