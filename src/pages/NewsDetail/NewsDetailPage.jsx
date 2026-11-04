
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./NewsDetailPage.css";
import newsData from "../../data/newsData";

const NewsDetailPage = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  const news = newsData.find(
    (item) => item.id === Number(id)
  );

  if (!news) {
    return (
      <main className="news-detail-page">
        <div className="container">
          <h2>{t("newsDetail.notFound")}</h2>

          <Link to="/news" className="btn-back">
            {t("newsDetail.backToNews")}
          </Link>
        </div>
      </main>
    );
  }

  const relatedNews = newsData.filter(
    (item) => item.id !== news.id
  );

  return (
    <main className="news-detail-page">
      <div className="container">

        <Link
          to="/news"
          className="btn-back"
          aria-label={t("newsDetail.backToNews")}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5" />
            <path d="m12 19-7-7 7-7" />
          </svg>
        </Link>

        <div className="news-detail-layout">

          {/* Основная новость */}
          <article className="news-article">

            <h1 className="article-title">
              {t(news.titleKey)}
            </h1>

            <span className="article-date">
              {news.date}
            </span>

            <div className="article-hero-img">
              <img
                src={news.image}
                alt={t(news.titleKey)}
              />
            </div>

            <div className="article-body">

              <h2>{t(news.subtitleKey)}</h2>

              {news.descriptionKeys.map((key, index) => (
                <p key={index}>
                  {t(key)}
                </p>
              ))}

            </div>

          </article>

          {/* Читать также */}
          <aside className="read-also-sidebar">

            <h3 className="sidebar-title">
              {t("newsDetail.readAlso")}
            </h3>

            <div className="sidebar-news-list">

              {relatedNews.map((item) => (
                <Link
                  to={`/news/${item.id}`}
                  className="news-card mini-horizontal-card"
                  key={item.id}
                >
                  <div className="news-img-wrapper thumb-img">
                    <img
                      src={item.image}
                      alt={t(item.titleKey)}
                    />
                  </div>

                  <div className="news-card-content">

                    <h4 className="news-title">
                      {t(item.titleKey)}
                    </h4>

                    <div className="news-card-footer">

                      <span className="news-date">
                        {item.date}
                      </span>

                      <span className="arrow-btn">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M7 17 17 7" />
                          <path d="M7 7h10v10" />
                        </svg>
                      </span>

                    </div>
                  </div>
                </Link>
              ))}

            </div>

          </aside>

        </div>
      </div>
    </main>
  );
};

export default NewsDetailPage;
