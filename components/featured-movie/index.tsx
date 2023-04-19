import { FC } from "react";
import Image from "next/image";
import { HiOutlineTicket } from "react-icons/hi";
import Link from "next/link";

import selectLanguage, { Language } from "@/utils/translate";
import styles from "./styles.module.css";

import { Movie } from "@/types/movie";
import { Tv } from "@/types/tv";

const imgBaseURL = "https://image.tmdb.org/t/p/original";

interface FeaturedMovieProps {
  movieData?: Movie[] | null;
  tvData?: Tv[] | null;
  type: string;
}

const FeaturedMovie: FC<FeaturedMovieProps> = ({ movieData, tvData, type }) => {
  const randomMovie = movieData
    ? movieData[Math.floor(Math.random() * movieData.length)]
    : null;

  const randomTv = tvData
    ? tvData[Math.floor(Math.random() * tvData.length)]
    : null;

  const { dictionary } = selectLanguage(Language.en);

  return (
    <div className={`${styles.sectionMovie} containe fluid`}>
      <div className={styles.movieContent}>
        <div className={styles.movieTitle}>
          <div className={styles.sectionIcon}>
            <HiOutlineTicket />
          </div>
          <div className={styles.movieName}>
            {randomMovie?.title}
            {randomTv?.name}
          </div>
        </div>
        <div className={styles.movieDesc}>
          {randomMovie?.overview}
          {randomTv?.overview}
        </div>
        <div className={styles.movieDetail}>
          <div>
            {dictionary.LANG_KEY_IMDB}:
            <div className={styles.movieDetailValue}>
              {randomMovie?.vote_average}
              {randomTv?.vote_average}
            </div>
          </div>
          <div>
            {dictionary.LANG_KEY_RELEASE}:
            <div className={styles.movieDetailValue}>
              {randomMovie?.release_date?.slice(0, 4)}
              {randomTv?.first_air_date.slice(0, 4)}
            </div>
          </div>
          <div>
            {dictionary.LANG_KEY_LANGUAGE}:
            <div className={styles.movieDetailValue}>
              {randomMovie?.original_language.toUpperCase()}
              {randomTv?.original_language.toUpperCase()}
            </div>
          </div>
        </div>
      </div>
      <Link href={`/${type}/${randomMovie?.id}`} className={styles.movieCard}>
        {randomMovie && (
          <Image
            src={imgBaseURL + randomMovie?.poster_path}
            alt="name"
            unoptimized
            fill
          />
        )}
        {randomTv && (
          <Image
            src={imgBaseURL + randomTv?.poster_path}
            alt="name"
            unoptimized
            fill
          />
        )}
      </Link>
      <div className={styles.moviePoster}>
        <div className={styles.moviePosterOverlay}></div>
        {randomMovie && (
          <Image
            unoptimized
            src={imgBaseURL + randomMovie?.backdrop_path}
            alt={"title"}
            fill
          />
        )}
        {randomTv && (
          <Image
            unoptimized
            src={imgBaseURL + randomTv?.backdrop_path}
            alt={"title"}
            fill
          />
        )}
      </div>
    </div>
  );
};

export default FeaturedMovie;
