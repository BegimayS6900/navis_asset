
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./PricePage.css";

function PricePage() {
  const { t } = useTranslation();

  const features = [
    t("pricePage.feature1"),
    t("pricePage.feature2"),
    t("pricePage.feature3"),
    t("pricePage.feature4"),
    t("pricePage.feature5"),
  ];

  return (
    <main className="price-page">
      <div className="container">
        <div className="price-wrapper">

          {/* Левый текстовый блок */}
          <div className="price-info-card">
            <h1 className="price-title">
              {t("pricePage.title")}
            </h1>

            <div className="price-description">
              <p>{t("pricePage.description1")}</p>
              <p>{t("pricePage.description2")}</p>
              <p>{t("pricePage.description3")}</p>
              <p>{t("pricePage.description4")}</p>
            </div>
          </div>

          {/* Правая карточка с тарифом */}
          <div className="price-card">
            <h2 className="price-card-title">
              {t("pricePage.cardTitle")}
            </h2>

            <div className="price-value-box">
              <span className="price-number">25%</span>
              <span className="price-subtext">
                {t("pricePage.priceSubtext")}
              </span>
            </div>

            <ul className="price-features">
              {features.map((feature, index) => (
                <li key={index}>
                  <div className="feature-check">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link to="/application" className="btn-price-action">
              {t("pricePage.button")}
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}

export default PricePage;
