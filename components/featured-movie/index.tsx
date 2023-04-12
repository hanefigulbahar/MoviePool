import { FC } from "react";
import Image from "next/image";
import { HiOutlineTicket } from "react-icons/hi";
import styles from "./styles.module.css";
import selectLanguage, { Language } from "@/utils/translate";
import { store } from "@/store";
import Link from "next/link";

const imgBaseURL = "https://image.tmdb.org/t/p/original";

interface FeaturedMovieProps {}

const FeaturedMovie: FC<FeaturedMovieProps> = () => {
  const movieData = store.getState().topRatedMovie;

  const randomMovie = movieData.topRatedMovies
    ? movieData.topRatedMovies[
        Math.floor(Math.random() * movieData.topRatedMovies.length)
      ]
    : null;

  const { dictionary } = selectLanguage(Language.en);

  return (
    <div className={`${styles.sectionMovie} containe fluid`}>
      <div className={styles.movieContent}>
        <div className={styles.movieTitle}>
          <div className={styles.sectionIcon}>
            <HiOutlineTicket />
          </div>
          <div className={styles.movieName}>{randomMovie?.title}</div>
        </div>
        <div className={styles.movieDesc}>{randomMovie?.overview}</div>
        <div className={styles.movieDetail}>
          <div>
            {dictionary.LANG_KEY_IMDB}:
            <div className={styles.movieDetailValue}>
              {randomMovie?.vote_average}
            </div>
          </div>
          <div>
            {dictionary.LANG_KEY_RELEASE}:
            <div className={styles.movieDetailValue}>
              {randomMovie?.release_date.slice(0, 4)}
            </div>
          </div>
          <div>
            {dictionary.LANG_KEY_LANGUAGE}:
            <div className={styles.movieDetailValue}>
              {randomMovie?.original_language.toUpperCase()}
            </div>
          </div>
        </div>
      </div>
      <Link href={`/movie/${randomMovie?.id}`} className={styles.movieCard}>
        <Image
          src={imgBaseURL + randomMovie?.poster_path}
          alt="name"
          unoptimized
          fill
        />
      </Link>
      <div className={styles.moviePoster}>
        <div className={styles.moviePosterOverlay}></div>
        <Image
          unoptimized
          src={imgBaseURL + randomMovie?.backdrop_path}
          alt={"title"}
          fill
        />
      </div>
    </div>
  );
};

export default FeaturedMovie;
