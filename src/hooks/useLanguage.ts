import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export type Lang = "en" | "es";

export function useLanguage() {
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const currentLang: Lang = i18n.language === "es" ? "es" : "en";

  function switchLanguage(lang: Lang) {
    localStorage.setItem("vocals_language", lang);
    navigate(`/${lang}`, { replace: true });
  }

  return { currentLang, switchLanguage };
}
