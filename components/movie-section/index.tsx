import { FC } from "react";
import styles from "./styles.module.css";
import MovieCard from "../movie-card";
import { Movie } from "@/types/movie";
import { Tv } from "@/types/tv";

interface MovieSectionProps {
  title: string;
  movie?: Movie[] | null;
  tv?: Tv[] | null;
  type: string;
}

const MovieSection: FC<MovieSectionProps> = ({ title, movie, tv }) => {
  return (
    <div className={styles.moviesSection}>
      <h3 className={styles.title}>{title}</h3>

      <div className={styles.movies}>
        {movie?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
        {tv?.map((tv) => (
          <MovieCard key={tv.id} tv={tv} />
        ))}
      </div>
    </div>
  );
};

export default MovieSection;
