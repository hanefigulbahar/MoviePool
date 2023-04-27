import React from "react";
import styles from "./styles.module.css";

function Skeleton({ width, height }: any) {
  return <div className={styles.skeleton} style={{ width, height }}></div>;
}

export { Skeleton };
