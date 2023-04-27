import { FC } from "react";
import { MovieDetails } from "@/types/movie";
import styles from "./styles.module.css";
import { HiOutlineTicket } from "react-icons/hi";
import selectLanguage, { Language } from "@/utils/translate";
import Image from "next/image";
import YoutubeVideo from "../youtube-player/youtube-video";
import { TvDetail } from "@/types/tv";

interface MovieDetailProps {
  movie?: MovieDetails;
  tv?: TvDetail;
}

const imgBaseURL = "https://image.tmdb.org/t/p/original";

const MovieDetail: FC<MovieDetailProps> = ({ movie, tv }) => {
  const { dictionary } = selectLanguage(Language.en);

  const video = movie?.videos?.results.find(
    (video) => video.name === "Official Trailer"
  );
  /*if (movie.success === false || tv.success === false) {
    throw new Error();
  }*/
  return (
    <div className={`${styles.sectionMovie} containe fluid`}>
      {movie && (
        <>
          <div className={styles.movieContent}>
            <div className={styles.movieTitle}>
              <div className={styles.sectionIcon}>
                <HiOutlineTicket />
              </div>
              <div className={styles.movieName}>{movie?.title}</div>
            </div>
            <div className={styles.movieDesc}>{movie?.overview}</div>
            <div className={styles.movieDetail}>
              <div>
                {dictionary.LANG_KEY_IMDB}:
                <div className={styles.movieDetailValue}>
                  {movie?.vote_average?.toFixed(1)}
                </div>
              </div>
              <div>
                {dictionary.LANG_KEY_RELEASE}:
                <div className={styles.movieDetailValue}>
                  {movie?.release_date?.slice(0, 4)}
                </div>
              </div>
              <div>
                {dictionary.LANG_KEY_LANGUAGE}:
                <div className={styles.movieDetailValue}>
                  {movie?.original_language?.toUpperCase()}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.movieCard}>
            {video !== undefined && <YoutubeVideo id={video?.key} />}
          </div>
          <div className={styles.moviePoster}>
            <div className={styles.moviePosterOverlay}></div>
            <Image
              unoptimized
              src={imgBaseURL + movie?.backdrop_path}
              alt={"title"}
              fill
            />
          </div>
        </>
      )}
      {tv && (
        <div>
          <div className={styles.movieContent}>
            <div className={styles.movieTitle}>
              <div className={styles.sectionIcon}>
                <HiOutlineTicket />
              </div>
              <div className={styles.movieName}>{tv.name}</div>
            </div>
            <div className={styles.movieDesc}>{tv?.overview}</div>
            <div className={styles.movieDetail}>
              <div>
                {dictionary.LANG_KEY_IMDB}:
                <div className={styles.movieDetailValue}>
                  {tv?.vote_average?.toFixed(1)}
                </div>
              </div>
              <div>
                {dictionary.LANG_KEY_RELEASE}:
                <div className={styles.movieDetailValue}>
                  {tv.first_air_date?.slice(0, 4)}
                </div>
              </div>
              <div>
                {dictionary.LANG_KEY_LANGUAGE}:
                <div className={styles.movieDetailValue}>
                  {tv?.original_language?.toUpperCase()}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.moviePoster}>
            <div className={styles.moviePosterOverlay}></div>
            <Image
              unoptimized
              src={imgBaseURL + tv?.backdrop_path}
              alt={"title"}
              fill
            />
          </div>
          <div className={styles.seasons}></div>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
