
import React from "react";
import "./NewsPage.css";
import c111bd592c250789a5a6d396e86d0a693ad8f40jpg from '../../assets/images/2c111bd592c250789a5a6d396e86d0a693ad8f40.jpg'
import cf244334f352836c1cb6e8942e6132df639a78b4jpg from '../../assets/images/cf244334f352836c1cb6e8942e6132df639a78b4.jpg'
import f39067531a181b2ab735852ae751d3aea60343aejpg from '../../assets/images/f39067531a181b2ab735852ae751d3aea60343ae.jpg'
import e50e24df5b6f0d3dc5b4db6f9b7fb19bf2d4024jpg from '../../assets/images/1e50e24df5b6f0d3dc5b4db6f9b7fb19bf2d4024.jpg'
import a65e8b280978f54d0ffd285de64caf6831d194ajpg from '../../assets/images/4a65e8b280978f54d0ffd285de64caf6831d194a.jpg'

const NewsPage = () => {
  return (
    <main className="news-page">
      <div className="container">
        <div className="news-grid-layout">

          {/* Левая часть */}
          <div className="news-left-col">

            {/* Главная новость */}
            <a href="/news-detail" className="news-card main-news-card">
              <div className="news-img-wrapper main-img">
                <img
                  src={c111bd592c250789a5a6d396e86d0a693ad8f40jpg}
                  alt="Главная новость"
                />
              </div>

              <div className="news-card-content">
                <h2 className="news-title">
                  Команда отец-сын говорит, что им удалось восстановить $6 млн утраченной криптовалюты
                </h2>

                <div className="news-card-footer">
                  <span className="news-date">11.06.2024 12:30</span>
                  <span className="arrow-btn">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </span>
                </div>
              </div>
            </a>

            {/* Две маленькие новости */}
            <div className="news-subrow">

              <a href="/news-detail" className="news-card mini-horizontal-card">
                <div className="news-img-wrapper thumb-img">
                  <img
                    src= {cf244334f352836c1cb6e8942e6132df639a78b4jpg}
                    alt="Новость"
                  />
                </div>

                <div className="news-card-content">
                  <h3 className="news-title">
                    Команда отец-сын говорит, что им удалось восстановить $6 млн утраченной криптовалюты
                  </h3>

                  <div className="news-card-footer">
                    <span className="news-date">11.06.2024 12:30</span>
                    <span className="arrow-btn">
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </span>
                  </div>
                </div>
              </a>

              <a href="/news-detail" className="news-card mini-horizontal-card">
                <div className="news-img-wrapper thumb-img">
                  <img
                    src= {f39067531a181b2ab735852ae751d3aea60343aejpg}
                    alt="Новость"
                  />
                </div>

                <div className="news-card-content">
                  <h3 className="news-title">
                    Команда отец-сын говорит, что им удалось восстановить $6 млн утраченной криптовалюты
                  </h3>

                  <div className="news-card-footer">
                    <span className="news-date">11.06.2024 12:30</span>
                    <span className="arrow-btn">
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </span>
                  </div>
                </div>
              </a>

            </div>
          </div>

          {/* Правая часть */}
          <div className="news-right-col">

            <a href="/news-detail" className="news-card mini-horizontal-card">
              <div className="news-img-wrapper thumb-img">
                <img
                  src= {cf244334f352836c1cb6e8942e6132df639a78b4jpg}
                  alt="Новость"
                />
              </div>

              <div className="news-card-content">
                <h3 className="news-title">
                  Команда отец-сын говорит, что им удалось восстановить $6 млн утраченной криптовалюты
                </h3>

                <div className="news-card-footer">
                  <span className="news-date">11.06.2024 12:30</span>
                  <span className="arrow-btn">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </span>
                </div>
              </div>
            </a>

            <a href="/news-detail" className="news-card mini-horizontal-card">
              <div className="news-img-wrapper thumb-img">
                <img
                  src= {f39067531a181b2ab735852ae751d3aea60343aejpg}
                  alt="Новость"
                />
              </div>

              <div className="news-card-content">
                <h3 className="news-title">
                  Команда отец-сын говорит, что им удалось восстановить $6 млн утраченной криптовалюты
                </h3>

                <div className="news-card-footer">
                  <span className="news-date">11.06.2024 12:30</span>
                  <span className="arrow-btn">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </span>
                </div>
              </div>
            </a>

            <a href="/news-detail" className="news-card mini-horizontal-card">
              <div className="news-img-wrapper thumb-img">
                <img
                  src= {e50e24df5b6f0d3dc5b4db6f9b7fb19bf2d4024jpg}
                  alt="Новость"
                />
              </div>

              <div className="news-card-content">
                <h3 className="news-title">
                  Команда отец-сын говорит, что им удалось восстановить $6 млн утраченной криптовалюты
                </h3>

                <div className="news-card-footer">
                  <span className="news-date">11.06.2024 12:30</span>
                  <span className="arrow-btn">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </span>
                </div>
              </div>
            </a>

            <a href="/news-detail" className="news-card mini-horizontal-card">
              <div className="news-img-wrapper thumb-img">
                <img
                  src= {a65e8b280978f54d0ffd285de64caf6831d194ajpg}
                  alt="Новость"
                />
              </div>

              <div className="news-card-content">
                <h3 className="news-title">
                  Команда отец-сын говорит, что им удалось восстановить $6 млн утраченной криптовалюты
                </h3>

                <div className="news-card-footer">
                  <span className="news-date">11.06.2024 12:30</span>
                  <span className="arrow-btn">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </span>
                </div>
              </div>
            </a>

            <a href="/news-detail" className="news-card mini-horizontal-card">
              <div className="news-img-wrapper thumb-img">
                <img
                  src= {cf244334f352836c1cb6e8942e6132df639a78b4jpg}
                  alt="Новость"
                />
              </div>

              <div className="news-card-content">
                <h3 className="news-title">
                  Команда отец-сын говорит, что им удалось восстановить $6 млн утраченной криптовалюты
                </h3>

                <div className="news-card-footer">
                  <span className="news-date">11.06.2024 12:30</span>
                  <span className="arrow-btn">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </span>
                </div>
              </div>
            </a>

            <a href="/news-detail" className="news-card mini-horizontal-card">
              <div className="news-img-wrapper thumb-img">
                <img
                  src= {f39067531a181b2ab735852ae751d3aea60343aejpg}
                  alt="Новость"
                />
              </div>

              <div className="news-card-content">
                <h3 className="news-title">
                  Команда отец-сын говорит, что им удалось восстановить $6 млн утраченной криптовалюты
                </h3>

                <div className="news-card-footer">
                  <span className="news-date">11.06.2024 12:30</span>
                  <span className="arrow-btn">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </span>
                </div>
              </div>
            </a>

          </div>
        </div>
      </div>
    </main>
  );
};

export default NewsPage;
