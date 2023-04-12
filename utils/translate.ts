import TR from "../language/tr.json";
import EN from "../language/en.json";

export enum Language {
  en = "en-US",
  tr = "tr-TR",
}

export default function selectLanguage(lang: Language) {
  switch (lang) {
    case Language.en:
      return EN;

    case Language.tr:
      return TR;
  }
}
