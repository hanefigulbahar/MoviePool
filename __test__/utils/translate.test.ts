import selectLanguage, { Language } from "@/utils/translate";

describe("Languages", () => {
  it("should language is eng", () => {
    const language = selectLanguage(Language.en);
    expect(language.dictionary.LANG_KEY).toBe("English");
  });
  it("should language is tr", () => {
    const language = selectLanguage(Language.tr);
    expect(language.dictionary.LANG_KEY).toBe("Türkçe");
  });
});
