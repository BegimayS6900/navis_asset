
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./ApplicationPage.css";

import {
  FaWallet,
  FaShieldAlt,
  FaCheck,
  FaChevronDown,
} from "react-icons/fa";

const ApplicationPage = () => {
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
    alert(t("application.success"));
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
                  {t("application.feature1Title")}
                </h3>

                <p className="feature-description">
                  {t("application.feature1Text")}
                </p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <FaShieldAlt className="feature-icon" />
              </div>

              <div className="feature-content">
                <h3 className="feature-title">
                  {t("application.feature2Title")}
                </h3>

                <p className="feature-description">
                  {t("application.feature2Text")}
                </p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <FaCheck className="feature-icon" />
              </div>

              <div className="feature-content">
                <h3 className="feature-title">
                  {t("application.feature3Title")}
                </h3>

                <p className="feature-description">
                  {t("application.feature3Text")}
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
                  <label htmlFor="firstName">
                    {t("application.firstName")}
                  </label>

                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder={t("application.firstName")}
                    value={formData.firstName}
                    onChange={handleChange}
                    autoComplete="given-name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">
                    {t("application.lastName")}
                  </label>

                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder={t("application.lastName")}
                    value={formData.lastName}
                    onChange={handleChange}
                    autoComplete="family-name"
                    required
                  />
                </div>
              </div>

              {/* Страна */}
              <div className="form-group">
                <label htmlFor="country">
                  {t("application.country")}
                </label>

                <div className="select-wrapper">
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      {t("application.selectCountry")}
                    </option>

                    <option value="kg">{t("application.kyrgyzstan")}</option>
                    <option value="ru">{t("application.russia")}</option>
                    <option value="kz">{t("application.kazakhstan")}</option>
                  </select>

                  <FaChevronDown className="select-arrow" />
                </div>
              </div>

              {/* Почта и телефон */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">
                    {t("application.email")}
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder={t("application.emailPlaceholder")}
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    {t("application.phone")}
                  </label>

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
                  {t("application.recoveryType")}
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
                      {t("application.selectRecoveryType")}
                    </option>

                    <option value="pass">
                      {t("application.passwordRecovery")}
                    </option>

                    <option value="seed">
                      {t("application.accessConsultation")}
                    </option>
                  </select>

                  <FaChevronDown className="select-arrow" />
                </div>
              </div>

              {/* Вид и объем кошелька */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="walletType">
                    {t("application.walletType")}
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
                        {t("application.selectWalletType")}
                      </option>

                      <option value="metamask">MetaMask</option>
                      <option value="trust">Trust Wallet</option>
                      <option value="ledger">Ledger</option>
                      <option value="other">{t("application.other")}</option>
                    </select>

                    <FaChevronDown className="select-arrow" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="walletVolume">
                    {t("application.walletVolume")}
                  </label>

                  <input
                    type="text"
                    id="walletVolume"
                    name="walletVolume"
                    placeholder={t("application.walletVolume")}
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
                  {t("application.agreementStart")}{" "}
                  <a href="/agreement">
                    {t("application.agreementLink")}
                  </a>
                </label>
              </div>

              <button type="submit" className="btn-submit">
                {t("application.submit")}
              </button>

            </form>
          </div>

        </div>
      </div>
    </main>
  );
};

export default ApplicationPage;
