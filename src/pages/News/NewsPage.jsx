
import React from "react";
import { Link } from "react-router-dom";
import "./NewsPage.css";
import newsData from "../../data/newsData";

const NewsCard = ({ news, main = false }) => {
  return (
    <Link
      to={`/news/${news.id}`}
      className={`news-card ${main ? "main-news-card" : "mini-horizontal-card"}`}
    >
      <div className={`news-img-wrapper ${main ? "main-img" : "thumb-img"}`}>
        <img src={news.image} alt={news.title} />
      </div>

      <div className="news-card-content">
        {main ? (
          <h2 className="news-title">{news.title}</h2>
        ) : (
          <h3 className="news-title">{news.title}</h3>
        )}

        <div className="news-card-footer">
          <span className="news-date">{news.date}</span>

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
              aria-hidden="true"
            >
              <path d="M7 17 17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
};

const NewsPage = () => {
  const mainNews = newsData[0];
  const leftNews = newsData.slice(1, 3);
  const rightNews = newsData.slice(3);

  return (
    <main className="news-page">
      <div className="container">
        <div className="news-grid-layout">
          <div className="news-left-col">
            {mainNews && <NewsCard news={mainNews} main />}

            <div className="news-subrow">
              {leftNews.map((news) => (
                <NewsCard key={news.id} news={news} />
              ))}
            </div>
          </div>

          <div className="news-right-col">
            {rightNews.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default NewsPage;
