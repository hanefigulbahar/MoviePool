import { FC } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import { Movie } from "@/types/movie";
import { Tv } from "@/types/tv";
import TvContainer from "@/containers/tv";
interface MovieCardProps {
  movie?: Movie;
  tv?: Tv;
}

const MovieCard = ({ movie, tv }: MovieCardProps): JSX.Element => {
  return (
    <>
      {movie && (
        <div className={styles.movie}>
          <Link href={`/movie/${movie.id}`}>
            <Image
              fill
              unoptimized
              alt={movie.title}
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            />
          </Link>
        </div>
      )}
      {tv && (
        <div className={styles.movie} key={tv?.id}>
          <Link href={`/tv/${tv.id}`}>
            <Image
              fill
              unoptimized
              alt={tv.name}
              src={`https://image.tmdb.org/t/p/original${tv.poster_path}`}
            />
          </Link>
        </div>
      )}
    </>
  );
};

export default MovieCard;
