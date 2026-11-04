
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./ServicesPage.css";

const services = [
  { id: 1, number: "01", key: "service1" },
  { id: 2, number: "02", key: "service2" },
  { id: 3, number: "03", key: "service3" },
  { id: 4, number: "04", key: "service4" },
  { id: 5, number: "05", key: "service5" },
  { id: 6, number: "06", key: "service6" },
];

const ServicesPage = () => {
  const { t } = useTranslation();

  return (
    <main className="services-page">
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content">
            <span className="services-label">NAVIS ASSET</span>

            <h1>
              {t("servicesPage.heroTitle")}{" "}
              <span>{t("servicesPage.heroTitleAccent")}</span>
            </h1>

            <p>{t("servicesPage.heroDescription")}</p>

            <Link to="/application" className="services-main-btn">
              {t("servicesPage.apply")}
            </Link>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="services-section-heading">
            <div>
              <span className="services-label">
                {t("servicesPage.sectionLabel")}
              </span>

              <h2>{t("servicesPage.sectionTitle")}</h2>
            </div>

            <p>{t("servicesPage.sectionDescription")}</p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.id}>
                <div className="service-card-top">
                  <span className="service-number">
                    {service.number}
                  </span>

                  <span className="service-arrow">↗</span>
                </div>

                <h3>{t(`servicesPage.${service.key}Title`)}</h3>

                <p>{t(`servicesPage.${service.key}Description`)}</p>

                <Link to="/application" className="service-link">
                  {t("servicesPage.more")} <span>→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="container services-cta-content">
          <div>
            <span className="services-label">NAVIS ASSET</span>

            <h2>{t("servicesPage.ctaTitle")}</h2>

            <p>{t("servicesPage.ctaDescription")}</p>
          </div>

          <Link to="/application" className="services-main-btn">
            {t("servicesPage.contact")}
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
