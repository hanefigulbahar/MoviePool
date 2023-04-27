"use client";
import React, { FC } from "react";

import { BiCameraMovie } from "react-icons/bi";
import styles from "./styles.module.css";
import selectLanguage from "@/utils/translate";
import LanguageSwich from "../language-switch";
import { useAppSelector } from "@/hooks";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const language = useAppSelector((state) => state.language);
  const { dictionary } = selectLanguage(language.language);
  return (
    <header className={`${styles.header} container fluid`}>
      <div className={styles.headerWrapper}>
        <a href={"/"} className={styles.logo}>
          <BiCameraMovie />
          MoviePool
        </a>
        <nav className={styles.navigationMenu}>
          <a href={"/tv"}>{dictionary.LANG_KEY_TV.toLocaleUpperCase()}</a>
          <LanguageSwich />
        </nav>
      </div>
    </header>
  );
};

export default Header;
