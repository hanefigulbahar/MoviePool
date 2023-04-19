import { FC } from "react";
import Genres from "../genre";
import styles from "./styles.module.css";
import { Genre } from "@/types/movie";

interface GenresSectionProps {
  genres: Genre[] | null;
}

const GenresSection: FC<GenresSectionProps> = ({ genres }) => {
  return (
    <div className={styles.categoriesSection}>
      {genres?.map((genre: Genre) => (
        <Genres key={genre.id} name={genre.name} id={genre.id} />
      ))}
    </div>
  );
};

export default GenresSection;
