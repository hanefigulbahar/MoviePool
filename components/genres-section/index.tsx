import { FC } from "react";
import Genres from "../genre";
import styles from "./styles.module.css";
import { Genre } from "@/types/movie";

interface GenresSectionProps {
  genres: Genre[] | null;
  type?: string;
}

const GenresSection: FC<GenresSectionProps> = ({ genres, type }) => {
  return (
    <div className={styles.categoriesSection}>
      {genres?.map((genre: Genre) => (
        <Genres type={type} key={genre.id} name={genre.name} id={genre.id} />
      ))}
    </div>
  );
};

export default GenresSection;
