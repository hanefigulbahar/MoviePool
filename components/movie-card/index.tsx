import { FC } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import { Movie } from "@/types/movie";
interface MovieCardProps {
  movie: Movie;
}

const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className={styles.movie} key={movie.id}>
      <Link href={`/movie/${movie.id}`}>
        <Image
          fill
          unoptimized
          alt={movie.title}
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        />
      </Link>
    </div>
  );
};

export default MovieCard;
