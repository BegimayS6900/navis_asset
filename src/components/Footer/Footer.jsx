
import React from "react";
import { useTranslation } from "react-i18next";
import "./Footer.css";

import logo from "../../assets/images/logo.png";

import {
  FaWhatsapp,
  FaTelegramPlane,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container footer-top">

        <div className="footer-col col-main">
          <a href="/" className="footer-logo">
            <img src={logo} alt="Navis Asset" className="logo-img" />
          </a>

          <p className="footer-description">
            {t("footer.description")}
          </p>

          <a href="mailto:navisasset@mail.com" className="footer-email">
            NAVISASSET@MAIL.COM
          </a>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">
            {t("footer.main")}
          </h4>

          <ul className="footer-menu">
            <li><a href="/about">{t("footer.about")}</a></li>
            <li><a href="/contacts">{t("footer.contacts")}</a></li>
            <li><a href="#partners">{t("footer.partners")}</a></li>
            <li><a href="/about">{t("footer.whyUs")}</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">
            {t("footer.users")}
          </h4>

          <ul className="footer-menu">
            <li><a href="/services">{t("services")}</a></li>
            <li><a href="/reviews">{t("reviews")}</a></li>
            <li><a href="/price">{t("price")}</a></li>
            <li><a href="/news">{t("news")}</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">
            {t("footer.social")}
          </h4>

          <div className="social-links">
            <a
              href="https://www.whatsapp.com/"
              className="social-icon-link"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://web.telegram.org/a/"
              className="social-icon-link"
              aria-label="Telegram"
            >
              <FaTelegramPlane />
            </a>

            <a
              href="https://www.instagram.com/"
              className="social-icon-link"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.tiktok.com/"
              className="social-icon-link"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p>{t("footer.copyright")}</p>

          <p className="credits">
            {t("footer.madeWith")}{" "}
            <span className="heart">♥</span>{" "}
            {t("footer.by")}{" "}
            <a href="/" className="dev-link">NavisDevs</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
