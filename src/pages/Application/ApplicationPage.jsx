
import React, { useState } from "react";
import "./ApplicationPage.css";

import {
  FaWallet,
  FaShieldAlt,
  FaCheck,
  FaChevronDown,
} from "react-icons/fa";

const ApplicationPage = () => {
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
    alert("Заявка заполнена! Для отправки подключите сервер.");
  };

  return (
    <main className="application-page">
      <div className="container">
        <div className="application-wrapper">

          {/* Левая часть — преимущества */}
          <div className="application-features">

            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <FaWallet className="feature-icon" />
              </div>

              <div className="feature-content">
                <h3 className="feature-title">
                  Доверенное восстановление кошелька
                </h3>

                <p className="feature-description">
                  Помогаем разобраться с доступом к цифровым активам
                  с учетом особенностей каждого случая.
                </p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <FaShieldAlt className="feature-icon" />
              </div>

              <div className="feature-content">
                <h3 className="feature-title">
                  Безопасность данных
                </h3>

                <p className="feature-description">
                  Бережно относитесь к своим данным и не передавайте
                  посторонним Seed-фразу или закрытые ключи.
                </p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <FaCheck className="feature-icon" />
              </div>

              <div className="feature-content">
                <h3 className="feature-title">
                  Оставьте заявку
                </h3>

                <p className="feature-description">
                  Опишите свою ситуацию, чтобы узнать о возможных
                  вариантах восстановления доступа.
                </p>
              </div>
            </div>

          </div>

          {/* Правая часть — форма */}
          <div className="application-form-card">
            <form
              className="application-form"
              onSubmit={handleSubmit}
            >

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">Имя</label>

                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Имя"
                    value={formData.firstName}
                    onChange={handleChange}
                    autoComplete="given-name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">Фамилия</label>

                  <input
                    type="text"
                    id="lastName"
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
                <label htmlFor="country">Страна</label>

                <div className="select-wrapper">
                  <select
                    id="country"
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
                  <label htmlFor="email">Почта</label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Электронная почта"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Номер телефона</label>

                  <input
                    type="tel"
                    id="phone"
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
                <label htmlFor="recoveryType">
                  Тип восстановления
                </label>

                <div className="select-wrapper">
                  <select
                    id="recoveryType"
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
                      Консультация по восстановлению доступа
                    </option>
                  </select>

                  <FaChevronDown className="select-arrow" />
                </div>
              </div>

              {/* Вид и объем кошелька */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="walletType">
                    Вид кошелька
                  </label>

                  <div className="select-wrapper">
                    <select
                      id="walletType"
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
                      <option value="other">Другой</option>
                    </select>

                    <FaChevronDown className="select-arrow" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="walletVolume">
                    Объем кошелька
                  </label>

                  <input
                    type="text"
                    id="walletVolume"
                    name="walletVolume"
                    placeholder="Объем кошелька"
                    value={formData.walletVolume}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Пользовательское соглашение */}
              <div className="form-checkbox-group">
                <input
                  type="checkbox"
                  id="agreement"
                  name="agreement"
                  checked={formData.agreement}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="agreement">
                  Нажимая на кнопку «Отправить заявку», я принимаю
                  условия{" "}
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
      </div>
    </main>
  );
};

export default ApplicationPage;
