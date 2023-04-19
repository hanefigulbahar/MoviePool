"use client";
import React, { FC } from "react";
import Link from "next/link";

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
        <Link href={"/"} className={styles.logo}>
          <BiCameraMovie />
          MoviePool
        </Link>
        <nav className={styles.navigationMenu}>
          <Link href={"/tv"}>{dictionary.LANG_KEY_TV.toLocaleUpperCase()}</Link>
          <LanguageSwich />
        </nav>
      </div>
    </header>
  );
};

export default Header;
