
import React from 'react';
import { Link } from 'react-router-dom';
import './NewsPage.css';

const mainNews = {
  id: 1,
  image: '/image/2c111bd592c250789a5a6d396e86d0a693ad8f40.jpg',
  title:
    'Команда отец-сын говорит, что им удалось восстановить $6 млн утраченной криптовалюты',
  date: '11.06.2024 12:30',
};

const newsImages = [
  '/image/cf244334f352836c1cb6e8942e6132df639a78b4.jpg',
  '/image/f39067531a181b2ab735852ae751d3aea60343ae.jpg',
  '/image/1e50e24df5b6f0d3dc5b4db6f9b7fb19bf2d4024.jpg',
  '/image/4a65e8b280978f54d0ffd285de64caf6831d194a.jpg',
  '/image/cf244334f352836c1cb6e8942e6132df639a78b4.jpg',
  '/image/f39067531a181b2ab735852ae751d3aea60343ae.jpg',
];

const newsTitle =
  'Команда отец-сын говорит, что им удалось восстановить $6 млн утраченной криптовалюты';

const relatedNews = newsImages.map((image, index) => ({
  id: index + 2,
  image,
  title: newsTitle,
  date: '11.06.2024 12:30',
}));

function NewsCard({ news, main = false }) {
  return (
    <Link
      to="/news-detail"
      className={`news-card ${
        main ? 'main-news-card' : 'mini-horizontal-card'
      }`}
    >
      <div
        className={`news-img-wrapper ${
          main ? 'main-img' : 'thumb-img'
        }`}
      >
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
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </span>
        </div>
      </div>
    </Link>
  );
}

function NewsPage() {
  return (
    <main className="news-page">
      <div className="container">
        <div className="news-grid-layout">
          <div className="news-left-col">
            <NewsCard news={mainNews} main />

            <div className="news-subrow">
              {relatedNews.slice(0, 2).map((news) => (
                <NewsCard key={news.id} news={news} />
              ))}
            </div>
          </div>

          <div className="news-right-col">
            {relatedNews.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default NewsPage;
