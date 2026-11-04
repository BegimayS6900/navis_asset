
import React, { useState } from "react";
import "./ContactsPage.css";
import { useTranslation } from "react-i18next";

import {
  FaWhatsapp,
  FaTelegramPlane,
  FaInstagram,
  FaTiktok,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaChevronDown,
} from "react-icons/fa";

const ContactsPage = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    email: "",
    phone: "",
    recoveryType: "",
    walletType: "",
    walletVolume: "",
    agreement: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t("contactsPage.success"));
  };

  return (
    <main className="contacts-page">
      <div className="container">
        <div className="contacts-wrapper">

          {/* Левая часть */}
          <div className="contacts-info-card">
            <h1 className="contacts-title">
              {t("contactsPage.title")}
            </h1>

            <div className="contacts-details">

              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>{t("contactsPage.address")}</span>
              </div>

              <div className="contact-item">
                <FaPhoneAlt className="contact-icon" />
                <div className="phone-numbers">
                  <a href="tel:+996502800202">
                    +996 (502)-800-202
                  </a>
                  <a href="tel:+996502800202">
                    +996 (502)-800-202
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <a href="mailto:navisasset@mail.com">
                  navisasset@mail.com
                </a>
              </div>

            </div>

            {/* Социальные сети */}
            <div className="contacts-socials">
              <h3 className="socials-title">
                {t("contactsPage.socialsTitle")}
              </h3>

              <div className="social-icons">
                <a
                  href="https://www.whatsapp.com/"
                  className="social-icon-btn"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp />
                </a>

                <a
                  href="https://web.telegram.org/a/"
                  className="social-icon-btn"
                  aria-label="Telegram"
                >
                  <FaTelegramPlane />
                </a>

                <a
                  href="https://www.instagram.com/"
                  className="social-icon-btn"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://www.tiktok.com/"
                  className="social-icon-btn"
                  aria-label="TikTok"
                >
                  <FaTiktok />
                </a>
              </div>
            </div>

            <p className="contacts-note">
              {t("contactsPage.note")}
            </p>
          </div>

          {/* Правая часть — форма */}
          <form className="contacts-form" onSubmit={handleSubmit}>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-first-name">
                  {t("contactsPage.firstName")}
                </label>
                <input
                  type="text"
                  id="contact-first-name"
                  name="firstName"
                  placeholder={t("contactsPage.firstName")}
                  value={formData.firstName}
                  onChange={handleChange}
                  autoComplete="given-name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-last-name">
                  {t("contactsPage.lastName")}
                </label>
                <input
                  type="text"
                  id="contact-last-name"
                  name="lastName"
                  placeholder={t("contactsPage.lastName")}
                  value={formData.lastName}
                  onChange={handleChange}
                  autoComplete="family-name"
                  required
                />
              </div>
            </div>

            {/* Страна */}
            <div className="form-group">
              <label htmlFor="contact-country">
                {t("contactsPage.country")}
              </label>

              <div className="select-wrapper">
                <select
                  id="contact-country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    {t("contactsPage.selectCountry")}
                  </option>
                  <option value="kg">{t("contactsPage.kyrgyzstan")}</option>
                  <option value="ru">{t("contactsPage.russia")}</option>
                  <option value="kz">{t("contactsPage.kazakhstan")}</option>
                </select>

                <FaChevronDown className="select-arrow" />
              </div>
            </div>

            {/* Почта и телефон */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-email">
                  {t("contactsPage.email")}
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  placeholder={t("contactsPage.emailPlaceholder")}
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-phone">
                  {t("contactsPage.phone")}
                </label>
                <input
                  type="tel"
                  id="contact-phone"
                  name="phone"
                  placeholder="+996 502 800 202"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  required
                />
              </div>
            </div>

            {/* Тип восстановления */}
            <div className="form-group">
              <label htmlFor="contact-recovery-type">
                {t("contactsPage.recoveryType")}
              </label>

              <div className="select-wrapper">
                <select
                  id="contact-recovery-type"
                  name="recoveryType"
                  value={formData.recoveryType}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    {t("contactsPage.selectRecoveryType")}
                  </option>
                  <option value="pass">
                    {t("contactsPage.passwordRecovery")}
                  </option>
                  <option value="seed">
                    {t("contactsPage.seedRecovery")}
                  </option>
                </select>

                <FaChevronDown className="select-arrow" />
              </div>
            </div>

            {/* Кошелёк */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-wallet-type">
                  {t("contactsPage.walletType")}
                </label>

                <div className="select-wrapper">
                  <select
                    id="contact-wallet-type"
                    name="walletType"
                    value={formData.walletType}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      {t("contactsPage.selectWalletType")}
                    </option>
                    <option value="metamask">MetaMask</option>
                    <option value="trust">Trust Wallet</option>
                    <option value="ledger">Ledger</option>
                  </select>

                  <FaChevronDown className="select-arrow" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-wallet-volume">
                  {t("contactsPage.walletVolume")}
                </label>

                <input
                  type="text"
                  id="contact-wallet-volume"
                  name="walletVolume"
                  placeholder={t("contactsPage.walletVolume")}
                  value={formData.walletVolume}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Согласие */}
            <div className="form-checkbox-group">
              <input
                type="checkbox"
                id="contact-agreement"
                name="agreement"
                checked={formData.agreement}
                onChange={handleChange}
                required
              />

              <label htmlFor="contact-agreement">
                {t("contactsPage.agreementStart")}{" "}
                <a href="/agreement">
                  {t("contactsPage.agreementLink")}
                </a>
              </label>
            </div>

            <button type="submit" className="btn-submit">
              {t("contactsPage.submit")}
            </button>

          </form>
        </div>
      </div>
    </main>
  );
};

export default ContactsPage;
