import { FC } from "react";
import Link from "next/link";
import { TbMovieOff } from "react-icons/tb";
import selectLanguage, { Language } from "@/utils/translate";
interface ErrorViewProps {
  page: string;
}

const ErrorView: FC<ErrorViewProps> = ({ page }) => {
  const { dictionary } = selectLanguage(Language.en);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}>
      <h1>
        <TbMovieOff />
      </h1>
      <h1> {dictionary.LANG_KEY_ERROR_MESSAGE} </h1>
      <Link
        href={page}
        style={{ textDecoration: "underline", fontSize: 20, marginTop: 8 }}>
        {dictionary.LANG_KEY_GO_HOME}
      </Link>
    </div>
  );
};

export default ErrorView;
