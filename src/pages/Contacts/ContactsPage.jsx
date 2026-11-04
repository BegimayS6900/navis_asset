
import React, { useState } from "react";
import "./ContactsPage.css";

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
    alert("Форма заполнена. Для отправки сообщений подключите сервер или API.");
  };

  return (
    <main className="contacts-page">
      <div className="container">
        <div className="contacts-wrapper">

          {/* Левая часть */}
          <div className="contacts-info-card">
            <h1 className="contacts-title">
              Техническая поддержка, сотрудничество и PR
            </h1>

            <div className="contacts-details">

              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>
                  Кыргызская Республика, г. Бишкек, проспект Манаса 64/1
                </span>
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
              <h3 className="socials-title">Мы в соцсетях</h3>

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
              Если у Вас возникли вопросы технического или финансового
              плана, напишите нам, и мы поможем разобраться в вашей ситуации.
              Время ответа зависит от загрузки сервиса.
            </p>
          </div>

          {/* Правая часть — форма */}
          <form className="contacts-form" onSubmit={handleSubmit}>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-first-name">Имя</label>
                <input
                  type="text"
                  id="contact-first-name"
                  name="firstName"
                  placeholder="Имя"
                  value={formData.firstName}
                  onChange={handleChange}
                  autoComplete="given-name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-last-name">Фамилия</label>
                <input
                  type="text"
                  id="contact-last-name"
                  name="lastName"
                  placeholder="Фамилия"
                  value={formData.lastName}
                  onChange={handleChange}
                  autoComplete="family-name"
                  required
                />
              </div>
            </div>

            {/* Страна */}
            <div className="form-group">
              <label htmlFor="contact-country">Страна</label>

              <div className="select-wrapper">
                <select
                  id="contact-country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Выберите страну
                  </option>
                  <option value="kg">Кыргызстан</option>
                  <option value="ru">Россия</option>
                  <option value="kz">Казахстан</option>
                </select>

                <FaChevronDown className="select-arrow" />
              </div>
            </div>

            {/* Почта и телефон */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-email">Почта</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  placeholder="Электронная почта"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-phone">Номер телефона</label>
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
                Тип восстановления
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
                    Выберите тип восстановления
                  </option>
                  <option value="pass">
                    Восстановление пароля
                  </option>
                  <option value="seed">
                    Восстановление Seed-фразы
                  </option>
                </select>

                <FaChevronDown className="select-arrow" />
              </div>
            </div>

            {/* Кошелёк */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-wallet-type">
                  Вид кошелька
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
                      Выберите тип
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
                  Объем кошелька
                </label>

                <input
                  type="text"
                  id="contact-wallet-volume"
                  name="walletVolume"
                  placeholder="Объем кошелька"
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
                Нажимая на кнопку «Отправить заявку», я принимаю условия{" "}
                <a href="/agreement">
                  Пользовательского соглашения
                </a>
              </label>
            </div>

            <button type="submit" className="btn-submit">
              Отправить заявку
            </button>

          </form>
        </div>
      </div>
    </main>
  );
};

export default ContactsPage;