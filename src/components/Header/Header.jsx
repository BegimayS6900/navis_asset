import React from "react";
import "./Header.css";
import logo from "../../assets/images/logo.png"
import flag from '../../assets/images/flag.png'

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">

        {/* Чекбоксы для управления меню и языком */}
        <input
          type="checkbox"
          id="burger-toggle"
          className="burger-checkbox"
        />

        <input
          type="checkbox"
          id="lang-toggle"
          className="lang-checkbox"
        />

        {/* Кнопка бургера */}
        <label
          htmlFor="burger-toggle"
          className="burger-menu"
          aria-label="Открыть меню"
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
              <a href="/#services" className="nav-link">
                Услуги
              </a>
            </li>
            <li>
              <a href="/price" className="nav-link">
                Прайс
              </a>
            </li>
            <li>
              <a href="/reviews" className="nav-link">
                Отзывы
              </a>
            </li>
            <li>
              <a href="/about" className="nav-link">
                О нас
              </a>
            </li>
            <li>
              <a href="/contacts" className="nav-link">
                Контакты
              </a>
            </li>
          </ul>
        </nav>

        {/* Действия в шапке */}
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
              className="flag-img flag-ru"
            />

            <span className="lang-text lang-text-ru">
              РУС
            </span>

            <img
              src="/image/flag-eng.png"
              alt="ENG"
              className="flag-img flag-en"
            />

            <span className="lang-text lang-text-en">
              ENG
            </span>

            <i
              className="fa-solid fa-chevron-down arrow-icon"
              aria-hidden="true"
            ></i>
          </label>

          {/* Кнопка начала */}
          <a href="/application" className="btn-start">
            Начать
          </a>

        </div>
      </div>
    </header>
  );
};

export default Header;