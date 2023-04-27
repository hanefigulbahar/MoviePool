import MovieDetail from "@/components/movie-detail";
import YoutubeVideo from "@/components/youtube-player/youtube-video";
import { store } from "@/store";
import { MovieDetails } from "@/types/movie";
import { TvDetail } from "@/types/tv";
import { FC } from "react";

interface MovieContainerProps {
  selectedMovie?: MovieDetails | null;
  selectedTvSeries?: TvDetail | null;
}

const MovieContainer: FC<MovieContainerProps> = ({
  selectedMovie,
  selectedTvSeries,
}) => {
  return (
    <>
      {selectedMovie !== null && selectedMovie && (
        <MovieDetail movie={selectedMovie} />
      )}
      {selectedTvSeries !== null && selectedTvSeries && (
        <MovieDetail tv={selectedTvSeries} />
      )}
    </>
  );
};

export default MovieContainer;
