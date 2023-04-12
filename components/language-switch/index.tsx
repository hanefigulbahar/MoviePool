"use client";
import { setLanguage } from "@/features/languageSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { Language } from "@/utils/translate";

import { FC } from "react";

interface LanguageSwichProps {}

const LanguageSwich: FC<LanguageSwichProps> = () => {
  const { language } = useAppSelector((state) => state.language);

  const dispatch = useAppDispatch();
  function languageHandle() {
    language === Language.tr
      ? dispatch(setLanguage(Language.en))
      : dispatch(setLanguage(Language.tr));
    language === Language.tr
      ? localStorage.setItem("language", Language.en)
      : localStorage.setItem("language", Language.tr);
    window.location.reload();
  }

  return (
    <button onClick={languageHandle}>
      {language === Language.en ? Language.tr : Language.en}
    </button>
  );
};

export default LanguageSwich;
