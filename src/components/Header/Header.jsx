
import React from "react";
import { useTranslation } from "react-i18next";
import "./Header.css";

import logo from "../../assets/images/logo.png";
import flag from "../../assets/images/flag.png";
import flagengpng from "../../assets/images/flageng.png";

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const currentLanguage = i18n.language.startsWith("en") ? "en" : "ru";

  return (
    <header className="header">
      <div className="container header-container">

        {/* Чекбокс бургер-меню */}
        <input
          type="checkbox"
          id="burger-toggle"
          className="burger-checkbox"
        />

        {/* Чекбокс языка */}
        <input
          type="checkbox"
          id="lang-toggle"
          className="lang-checkbox"
          checked={currentLanguage === "en"}
          onChange={(e) =>
            changeLanguage(e.target.checked ? "en" : "ru")
          }
        />

        {/* Бургер */}
        <label
          htmlFor="burger-toggle"
          className="burger-menu"
          aria-label={t("openMenu")}
        >
          <span></span>
          <span></span>
          <span></span>
        </label>

        {/* Логотип */}
        <a href="/" className="logo">
          <img
            src={logo}
            alt="Navis Asset"
            className="logo-img"
          />
        </a>

        {/* Навигация */}
        <nav className="nav">
          <ul className="nav-list">
            <li>
              <a href="/services" className="nav-link">
                {t("services")}
              </a>
            </li>

            <li>
              <a href="/price" className="nav-link">
                {t("price")}
              </a>
            </li>

            <li>
              <a href="/reviews" className="nav-link">
                {t("reviews")}
              </a>
            </li>

            <li>
              <a href="/about" className="nav-link">
                {t("about")}
              </a>
            </li>

            <li>
              <a href="/contacts" className="nav-link">
                {t("contacts")}
              </a>
            </li>
          </ul>
        </nav>

        {/* Правая часть */}
        <div className="header-actions">

          {/* Переключатель языка */}
          <label
            htmlFor="lang-toggle"
            className="lang-select"
            title="Сменить язык"
          >
            <img
              src={flag}
              alt="РУС"
              className={`flag-img flag-ru ${
                currentLanguage === "ru" ? "active" : ""
              }`}
            />

            <span className="lang-text lang-text-ru">
              РУС
            </span>

            <img
              src={flagengpng}
              alt="ENG"
              className={`flag-img flag-en ${
                currentLanguage === "en" ? "active" : ""
              }`}
            />

            <span className="lang-text lang-text-en">
              ENG
            </span>

            <i className="fa-solid fa-chevron-down arrow-icon"></i>
          </label>

          {/* Кнопка */}
          <a href="/application" className="btn-start">
            {t("start")}
          </a>

        </div>
      </div>
    </header>
  );
};

export default Header;
