import { FC } from "react";
import Genres from "../genre";
import { store } from "@/store";
import styles from "./styles.module.css";

interface GenresSectionProps {}

const GenresSection: FC<GenresSectionProps> = () => {
  const { genres } = store.getState().genres;

  return (
    <div className={styles.categoriesSection}>
      {genres?.map((genre) => (
        <Genres key={genre.id} name={genre.name} id={genre.id} />
      ))}
    </div>
  );
};

export default GenresSection;
