
import React from "react";
import "./Footer.css";
import logo from "../../assets/images/logo.png";

import {
  FaWhatsapp,
  FaTelegramPlane,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-top">

        <div className="footer-col col-main">
          <a href="/" className="footer-logo">
            <img src={logo} alt="Navis Asset" className="logo-img" />
          </a>

          <p className="footer-description">
            Международный сервис, где вам быстро и надёжно
            восстановят забытый криптокошелёк
          </p>

          <a href="mailto:navisasset@mail.com" className="footer-email">
            NAVISASSET@MAIL.COM
          </a>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Основное</h4>
          <ul className="footer-menu">
            <li><a href="/about">О нас</a></li>
            <li><a href="/contacts">Контакты</a></li>
            <li><a href="#partners">Партнёры</a></li>
            <li><a href="/about">Почему NavisAsset?</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Пользователям</h4>
          <ul className="footer-menu">
            <li><a href="/services">Услуги</a></li>
            <li><a href="/reviews">Отзывы</a></li>
            <li><a href="/price">Прайс</a></li>
            <li><a href="/news">Новости</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Мы в соцсетях</h4>

          <div className="social-links">
            <a href="https://www.whatsapp.com/" className="social-icon-link" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>

            <a href="https://web.telegram.org/a/" className="social-icon-link" aria-label="Telegram">
              <FaTelegramPlane />
            </a>

            <a href="https://www.instagram.com/" className="social-icon-link" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="https://www.tiktok.com/" className="social-icon-link" aria-label="TikTok">
              <FaTiktok />
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p>© 2024 NavisAsset. Все права защищены</p>

          <p className="credits">
            Made with <span className="heart">♥</span> by{" "}
            <a href="/" className="dev-link">NavisDevs</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
