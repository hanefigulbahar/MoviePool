import React from "react";
import { Skeleton } from "@/components/skeleton";
import styles from "./styles.module.css";

function GenreLoading() {
  return (
    <div className={styles.categoriesSection}>
      {Array(10)
        .fill(null)
        .map((_, index) => (
          <div key={index}>
            <Skeleton width={170} height={72} />
          </div>
        ))}
    </div>
  );
}

export { GenreLoading };
