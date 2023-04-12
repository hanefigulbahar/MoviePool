import { FC } from "react";
import styles from "./styles.module.css";
import MovieCard from "../movie-card";
import { store } from "@/store";
import { Movie } from "@/types/movie";

interface MovieSectionProps {
  title: string;
  popularMovies: Movie[] | null;
}

const MovieSection: FC<MovieSectionProps> = ({ title, popularMovies }) => {
  return (
    <div className={styles.moviesSection}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.movies}>
        {popularMovies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieSection;
