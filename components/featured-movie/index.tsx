import { FC, ReactNode } from "react";
import Image from "next/image";
import { HiOutlineTicket } from "react-icons/hi";

import styles from "./styles.module.css";
import { Movie } from "@/types/movie";
const imgBaseURL = "https://image.tmdb.org/t/p/original";
interface FeaturedMovieProps {
  movie: Movie;
}

const FeaturedMovie: FC<FeaturedMovieProps> = ({ movie }) => {
  console.log(movie);
  return (
    <div className={`${styles.sectionMovie} containe fluid`}>
      <div className={styles.movieContent}>
        <div className={styles.movieTitle}>
          <div className={styles.sectionIcon}>
            <HiOutlineTicket />
          </div>
          <div className={styles.movieName}>{movie.title}</div>
        </div>
        <div className={styles.movieDesc}>{movie.overview}</div>
        <div className={styles.movieDetail}>
          <div>
            IMDB:{" "}
            <div className={styles.movieDetailValue}>{movie.vote_average}</div>
          </div>
          <div>
            RELEASE:
            <div className={styles.movieDetailValue}>
              {movie.release_date.slice(0, 4)}
            </div>
          </div>
          <div>
            LANGUAGE:
            <div className={styles.movieDetailValue}>
              {movie.original_language.toUpperCase()}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.movieCard}>
        <Image
          src={imgBaseURL + movie.poster_path}
          alt="name"
          unoptimized
          fill
        />
      </div>
      <div className={styles.moviePoster}>
        <div className={styles.moviePosterOverlay}></div>
        <Image
          unoptimized
          src={imgBaseURL + movie.backdrop_path}
          alt={"title"}
          fill
        />
      </div>
    </div>
  );
};

export default FeaturedMovie;
