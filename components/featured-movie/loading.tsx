import React from "react";
import { Loading } from "../loading";
import styles from "./styles.module.css";

function FeatureMovieLoading() {
  return (
    <div className={styles.sectionMovie}>
      <Loading />
    </div>
  );
}

export { FeatureMovieLoading };
