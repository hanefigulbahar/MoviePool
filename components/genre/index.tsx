"use client";
import Link from "next/link";
import { FC } from "react";
import styles from "./styles.module.css";

interface GenresProps {
  id: number;
  name: string;
  type?: string;
}

const Genres: FC<GenresProps> = ({ name, id, type = "" }) => {
  return (
    <Link className={styles.category} href={`${type}${name}/${id.toString()}`}>
      <div>{name}</div>
    </Link>
  );
};

export default Genres;
