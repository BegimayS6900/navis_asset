import React from "react";
import { Link, useParams } from "react-router-dom";
import "./NewsDetailPage.css";
import newsData from "../../data/newsData";

const NewsDetailPage = () => {
  const { id } = useParams();

  // Находим нужную новость по ID
  const news = newsData.find((item) => item.id === Number(id));

  // Если новости с таким ID нет
  if (!news) {
    return (
      <main className="news-detail-page">
        <div className="container">
          <h2>Новость не найдена</h2>
          <Link to="/news" className="btn-back">
            Вернуться к новостям
          </Link>
        </div>
      </main>
    );
  }

  // Другие новости для блока "Читать также"
  const relatedNews = newsData.filter(
    (item) => item.id !== news.id
  );

  return (
    <main className="news-detail-page">
      <div className="container">

        <Link to="/news" className="btn-back" aria-label="Назад к новостям">
          <i className="fa-solid fa-arrow-left"></i>
        </Link>

        <div className="news-detail-layout">

          <article className="news-article">

            <h1 className="article-title">
              {news.title}
            </h1>

            <span className="article-date">
              {news.date}
            </span>

            <div className="article-hero-img">
              <img src={news.image} alt={news.title} />
            </div>

            <div className="article-body">

              <h2>{news.subtitle}</h2>

              {news.description.map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}

            </div>

          </article>

          <aside className="read-also-sidebar">

            <h3 className="sidebar-title">
              Читать также:
            </h3>

            <div className="sidebar-news-list">

              {relatedNews.map((item) => (
                <Link
                  to={`/news/${item.id}`}
                  className="news-card mini-horizontal-card"
                  key={item.id}
                >
                  <div className="news-img-wrapper thumb-img">
                    <img src={item.image} alt={item.title} />
                  </div>

                  <div className="news-card-content">

                    <h4 className="news-title">
                      {item.title}
                    </h4>

                    <div className="news-card-footer">
                      <span className="news-date">
                        {item.date}
                      </span>

                      <span className="arrow-btn">
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
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