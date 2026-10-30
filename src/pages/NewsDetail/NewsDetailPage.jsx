
import React from 'react';
import { Link } from 'react-router-dom';
import './NewsDetailPage.css';

const relatedNews = [
  {
    id: 1,
    image: '/image/cf244334f352836c1cb6e8942e6132df639a78b4.jpg',
    title:
      'Команда отец-сын говорит, что им удалось восстановить $6 млн утраченной криптовалюты',
    date: '11.06.2024 12:30',
  },
  {
    id: 2,
    image: '/image/f39067531a181b2ab735852ae751d3aea60343ae.jpg',
    title: 'Новости о восстановлении доступа к цифровым активам',
    date: '11.06.2024 12:30',
  },
  {
    id: 3,
    image: '/image/1e50e24df5b6f0d3dc5b4db6f9b7fb19bf2d4024.jpg',
    title: 'Последние новости мира криптовалют',
    date: '11.06.2024 12:30',
  },
  {
    id: 4,
    image: '/image/4a65e8b280978f54d0ffd285de64caf6831d194a.jpg',
    title: 'Что нужно знать о безопасности цифровых активов',
    date: '11.06.2024 12:30',
  },
];

const NewsDetailPage = () => {
  return (
    <main className="news-detail-page">
      <div className="container">
        <Link to="/news" className="btn-back" aria-label="Назад к новостям">
          <i className="fa-solid fa-arrow-left"></i>
        </Link>

        <div className="news-detail-layout">
          <article className="news-article">
            <h1 className="article-title">
              Команда отец-сын говорит, что им удалось восстановить $6 млн
              утраченной криптовалюты
            </h1>

            <span className="article-date">11.06.2024 12:30</span>

            <div className="article-hero-img">
              <img
                src="/image/2c111bd592c250789a5a6d396e86d0a693ad8f40.jpg"
                alt="Иллюстрация к новости о восстановлении криптовалюты"
              />
            </div>

            <div className="article-body">
              <p>
                Президент Сальвадора Найиб Букеле сообщил, что доходы страны,
                связанные с биткойном, могут поступать из нескольких
                источников. Они включают результаты инвестиций в биткойн
                и другие связанные с ним государственные инициативы.
              </p>

              <h2>«Сальвадор — страна биткойна»</h2>

              <p>
                Сальвадор сделал биткойн законным платежным средством наряду
                с долларом США в сентябре 2021 года. После этого страна
                продолжила развивать инициативы, связанные с использованием
                цифровых активов.
              </p>

              <p>
                Среди упоминаемых источников дохода — программа паспортов,
                обмен BTC на доллары для местного бизнеса, майнинг и
                государственные услуги. Такие заявления привлекли внимание
                к стратегии страны в отношении биткойна.
              </p>

              <p>
                Историю о восстановлении цифровых активов важно оценивать
                с учетом конкретных обстоятельств. Возможность восстановления
                зависит от доступных данных, а гарантировать результат
                заранее нельзя.
              </p>
            </div>
          </article>

          <aside className="read-also-sidebar">
            <h3 className="sidebar-title">Читать также:</h3>

            <div className="sidebar-news-list">
              {relatedNews.map((news) => (
                <Link
                  to={`/news/${news.id}`}
                  className="news-card mini-horizontal-card"
                  key={news.id}
                >
                  <div className="news-img-wrapper thumb-img">
                    <img src={news.image} alt="" />
                  </div>

                  <div className="news-card-content">
                    <h4 className="news-title">{news.title}</h4>

                    <div className="news-card-footer">
                      <span className="news-date">{news.date}</span>
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
