"use client";
import Link from "next/link";
import { FC } from "react";
import styles from "./styles.module.css";
import selectedGenre from "@/utils/selectedGenres";
interface GenresProps {
  id: number;
  name: string;
}

const Genres: FC<GenresProps> = ({ name, id }) => {
  return (
    <Link
      onClick={() => selectedGenre(id)}
      className={styles.category}
      href={`${name}/${id.toString()}`}>
      <div>{name}</div>
    </Link>
  );
};

export default Genres;
