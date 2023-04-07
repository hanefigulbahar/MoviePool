import React from "react";
import Link from "next/link";
import { BiCameraMovie } from "react-icons/bi";
import styles from "./styles.module.css";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className={`${styles.header} container fluid`}>
      <div className={styles.headerWrapper}>
        <div className={styles.logo}>
          <BiCameraMovie />
          MoviePool
        </div>
        <nav className={styles.navigationMenu}>
          <Link href={"/movie"}>Movie</Link>
          <Link href={"/kids"}>Kids</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
