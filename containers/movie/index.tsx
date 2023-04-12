import MovieDetail from "@/components/movie-detail";
import YoutubeVideo from "@/components/youtube-player/youtube-video";
import { store } from "@/store";
import { FC } from "react";

interface MovieContainerProps {}

const MovieContainer: FC<MovieContainerProps> = () => {
  const { selectedMovie } = store.getState().selectedByID;
  const video = selectedMovie?.videos.results.find(
    (video) => video.name === "Official Trailer"
  );

  return <>{selectedMovie !== null && <MovieDetail movie={selectedMovie} />}</>;
};

export default MovieContainer;
