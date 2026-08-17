import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/language_switcher.css";

const LANGUAGES = [
  { code: "ro", label: "RO" },
  { code: "uk", label: "UK" },
  { code: "nl", label: "NL" },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language?.slice(0, 2);

  return (
    <div className="language_switcher d-flex flex-row align-items-center">
      {LANGUAGES.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          className={`lang_btn ${currentLang === code ? "active" : ""}`}
          onClick={() => i18n.changeLanguage(code)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
