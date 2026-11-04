
import React from "react";
import { useTranslation } from "react-i18next";
import "./AboutPage.css";

// Images
import founderPhoto from "../../assets/images/photo.png";
import companyImage from "../../assets/images/cfc3332b61a4d605724a76a26f6711b1c1b1adf9.jpg";
import teamImage from "../../assets/images/173b638eb41eadaead3c70ded0f0bb933c470c01.jpg";

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <main className="about-page">
      <div className="container section-container">
        <h1 className="section-title page-title">
          {t("aboutPage.title")}
        </h1>

        <div className="about-grid">
          <div className="about-group">
            <div className="group-top-row">
              <div className="about-card founder-card">
                <div className="founder-info">
                  <img
                    src={founderPhoto}
                    alt={t("aboutPage.founderAlt")}
                    className="founder-img"
                  />

                  <div>
                    <span className="founder-role">
                      {t("aboutPage.founder")}
                    </span>
                    <h3 className="founder-name">
                      Тилек<br />Бегалиев
                    </h3>
                  </div>
                </div>
              </div>

              <div className="about-card stat-card stat-red">
                <div className="stat-number">45+</div>
                <div className="stat-label">
                  {t("aboutPage.clients")}
                </div>
              </div>
            </div>

            <div className="about-card stat-card stat-gray">
              <div className="stat-number">100%</div>
              <div className="stat-label">
                {t("aboutPage.quality")}
              </div>
            </div>
          </div>

          <div className="about-card photo-card">
            <img
              src={companyImage}
              alt={t("aboutPage.companyAlt")}
              className="about-img"
              loading="lazy"
            />
          </div>

          <div className="about-card photo-card">
            <img
              src={teamImage}
              alt={t("aboutPage.teamAlt")}
              className="about-img"
              loading="lazy"
            />
          </div>

          <div className="about-group group-row">
            <div className="about-card stat-card stat-black">
              <div className="stat-number">10+</div>
              <div className="stat-label">
                {t("aboutPage.employees")}
              </div>
            </div>

            <div className="about-card stat-card stat-light">
              <div className="stat-title">
                {t("aboutPage.guarantee")}
              </div>
              <div className="stat-label">
                {t("aboutPage.professionalTeam")}
              </div>
            </div>
          </div>
        </div>

        <div className="about-text-sections">
          <div className="about-text-row">
            <h2 className="about-text-title">
              {t("aboutPage.promiseTitle")}
            </h2>

            <div className="about-text-content">
              <p>{t("aboutPage.promiseText")}</p>
            </div>
          </div>

          <div className="about-text-row">
            <h2 className="about-text-title">
              {t("aboutPage.foundersTitle")}
            </h2>

            <div className="about-text-content">
              <p>{t("aboutPage.foundersText1")}</p>
              <p>{t("aboutPage.foundersText2")}</p>
              <p>{t("aboutPage.foundersText3")}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
