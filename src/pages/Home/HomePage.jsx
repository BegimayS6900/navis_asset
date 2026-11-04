
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./HomePage.css";
import "./HomePage-icons.css";

import {
  KeyRound,
  Search,
  Wallet,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

// Partners
import image1899png from "../../assets/images/image 1899.png";
import image1895png from "../../assets/images/image 1895.png";
import image1896png from "../../assets/images/image 1896.png";
import image1898png from "../../assets/images/image 1898.png";
import image1897png from "../../assets/images/image 1897.png";

// Main images
import bannerImage from "../../assets/images/banner2.png";
import componentImage from "../../assets/images/Component 4.png";

// News images
import newsMainImage from "../../assets/images/2c111bd592c250789a5a6d396e86d0a693ad8f40.jpg";
import newsImage1 from "../../assets/images/cf244334f352836c1cb6e8942e6132df639a78b4.jpg";
import newsImage2 from "../../assets/images/f39067531a181b2ab735852ae751d3aea60343ae.jpg";
import newsImage3 from "../../assets/images/1e50e24df5b6f0d3dc5b4db6f9b7fb19bf2d4024.jpg";
import newsImage4 from "../../assets/images/4a65e8b280978f54d0ffd285de64caf6831d194a.jpg";

const partners = [
  { src: image1899png, alt: "Манас" },
  { src: image1895png, alt: "Газпром" },
  { src: image1896png, alt: "Кыргыз Аэронавигация" },
  { src: image1898png, alt: "MMC" },
  { src: image1897png, alt: "Партнёр" },
];

const services = [
  { icon: KeyRound, key: "service1", active: true },
  { icon: Search, key: "service2" },
  { icon: Wallet, key: "service3" },
  { icon: ShieldCheck, key: "service4" },
];

const questions = [
  "question1",
  "question2",
  "question3",
  "question4",
  "question5",
];

const news = [
  { image: newsImage1, key: "news1" },
  { image: newsImage2, key: "news2" },
  { image: newsImage3, key: "news3" },
  { image: newsImage4, key: "news4" },
];

function HomePage() {
  const { t } = useTranslation();
  const [activeQuestion, setActiveQuestion] = useState(0);

  return (
    <main className="home-page">
      {/* HERO */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              {t("home.heroTitle1")}<br />
              {t("home.heroTitle2")}<br />
              {t("home.heroTitle3")}<br />
              {t("home.heroTitle4")}
            </h1>

            <p className="hero-subtitle">
              {t("home.heroSubtitle")}
            </p>

            <div className="hero-buttons">
              <a href="/application" className="btn-primary">
                {t("home.apply")}
              </a>

              <a href="#services" className="btn-secondary">
                {t("home.more")} <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="hero-image-wrap">
            <img
              src={bannerImage}
              alt={t("home.heroImageAlt")}
              className="hero-image"
            />
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="partners-section">
        <div className="partners-container">
          <div className="partners-list">
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <img
                key={index}
                src={partner.src}
                alt={partner.alt}
                className="partner-logo"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="section why-section" id="about">
        <div className="container section-container">
          <h2 className="section-title">
            {t("home.whyTitle")}
          </h2>

          <div className="why-cards">
            {[1, 2, 3].map((number) => (
              <div className="why-card" key={number}>
                <p className="why-card-sub">
                  {t(`home.why${number}Sub`)}
                </p>

                <h3 className="why-card-heading">
                  {t(`home.why${number}Title`)}
                </h3>

                <span className="why-card-number">
                  {String(number).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section services-section" id="services">
        <div className="container section-container">
          <h2 className="section-title">
            {t("home.servicesTitle")}
          </h2>

          <div className="services-grid">
            {services.map((service) => {
              const ServiceIcon = service.icon;

              return (
                <div
                  className={`service-card${service.active ? " active" : ""}`}
                  key={service.key}
                >
                  <div className="service-icon-wrap">
                    <ServiceIcon
                      className="service-icon"
                      size={30}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="service-card-title">
                    {t(`home.${service.key}Title`)}
                  </h3>

                  <p className="service-card-text">
                    {t(`home.${service.key}Text`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq-section">
        <div className="container section-container">
          <h2 className="section-title">
            {t("home.faqTitle1")}<br />
            {t("home.faqTitle2")}
          </h2>

          <div className="faq-list">
            {questions.map((key, index) => (
              <details
                className="faq-item"
                key={key}
                open={activeQuestion === index}
              >
                <summary
                  className="faq-question"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveQuestion((prev) =>
                      prev === index ? -1 : index
                    );
                  }}
                >
                  <span>{t(`home.${key}Question`)}</span>
                  <span className="faq-toggle-icon" aria-hidden="true" />
                </summary>

                <div className="faq-answer">
                  <p>{t(`home.${key}Answer`)}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="section news-section">
        <div className="container section-container">
          <h2 className="section-title">
            {t("news")}
          </h2>

          <div className="news-grid">
            <a href="/news" className="news-main-card">
              <div className="news-main-img-wrap">
                <img
                  src={newsMainImage}
                  alt={t("home.mainNewsTitle")}
                  className="news-main-img"
                  loading="lazy"
                />
              </div>

              <h3 className="news-main-title">
                {t("home.mainNewsTitle")}
              </h3>

              <div className="news-main-bottom">
                <time className="news-date" dateTime="2024-06-11T12:30">
                  11.06.2024 12:30
                </time>

                <span className="news-arrow-btn" aria-hidden="true">
                  <ArrowRight size={22} />
                </span>
              </div>
            </a>

            <div className="news-list">
              {news.map((item) => (
                <a href="/news" className="news-item" key={item.key}>
                  <img
                    src={item.image}
                    alt=""
                    className="news-thumb"
                    loading="lazy"
                  />

                  <div className="news-item-info">
                    <h4 className="news-item-title">
                      {t(`home.${item.key}Title`)}
                    </h4>

                    <time className="news-date" dateTime="2024-06-11">
                      11.06.2024
                    </time>
                  </div>

                  <span className="news-arrow-btn" aria-hidden="true">
                    <ArrowRight size={22} />
                  </span>
                </a>
              ))}
            </div>
          </div>

          <a href="/news" className="btn-news-more">
            {t("home.more")} <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section" id="contacts">
        <div className="container section-container">
          <div className="cta-card">
            <h2 className="cta-title">
              {t("home.ctaTitle")}
            </h2>

            <img
              src={componentImage}
              alt=""
              className="cta-image"
              loading="lazy"
            />

            <div className="cta-action">
              <p className="cta-description">
                {t("home.ctaDescription")}
              </p>

              <a href="/application" className="cta-button">
                {t("home.apply")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
