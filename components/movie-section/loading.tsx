import React from "react";

import { Skeleton } from "@/components/skeleton";
import styles from "./styles.module.css";

function MoviesSectionLoading() {
  return (
    <div className={styles.moviesSection}>
      <Skeleton width={128} height={36} />
      <div className={styles.movies}>
        {Array(7)
          .fill(null)
          .map((_, index) => (
            <div key={index} className={styles.movie}>
              <Skeleton />
            </div>
          ))}
      </div>
    </div>
  );
}

export { MoviesSectionLoading };
