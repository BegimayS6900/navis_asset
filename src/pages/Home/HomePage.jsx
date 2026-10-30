
import React from 'react';
import './HomePage.css';

// Partners
import image1899png from '../../assets/images/image 1899.png';
import image1895png from '../../assets/images/image 1895.png';
import image1896png from '../../assets/images/image 1896.png';
import image1898png from '../../assets/images/image 1898.png';
import image1897png from '../../assets/images/image 1897.png';

// Main images
import bannerImage from '../../assets/images/banner2.png';
import groupImage from '../../assets/images/Group 1.png';
import recoveryImage from '../../assets/images/ChatGPT Image 29 сент. 2026 г., 21_53_44.png';
import walletImage from '../../assets/images/ChatGPT Image 29 сент. 2026 г., 21_55_57.png';
// import shieldImage from '../../assets/images/service-shield.png';
import componentImage from '../../assets/images/Component 4.png';

// News images
import newsMainImage from '../../assets/images/2c111bd592c250789a5a6d396e86d0a693ad8f40.jpg';
import newsImage1 from '../../assets/images/cf244334f352836c1cb6e8942e6132df639a78b4.jpg';
import newsImage2 from '../../assets/images/f39067531a181b2ab735852ae751d3aea60343ae.jpg';
import newsImage3 from '../../assets/images/1e50e24df5b6f0d3dc5b4db6f9b7fb19bf2d4024.jpg';
import newsImage4 from '../../assets/images/4a65e8b280978f54d0ffd285de64caf6831d194a.jpg';

const partners = [
  { src: image1899png, alt: 'Манас' },
  { src: image1895png, alt: 'Газпром' },
  { src: image1896png, alt: 'Кыргыз Аэронавигация' },
  { src: image1898png, alt: 'MMC' },
  { src: image1897png, alt: 'Партнёр' },
];

const services = [
  {
    image: groupImage,
    title: 'Ваш пароль не работает',
    text: 'Вы думали, что знаете свой пароль, но он не разблокирует кошелёк. Возможно, в нём другие цифры или другая заглавная буква, чем вы помните.',
    active: true,
  },
  {
    image: recoveryImage,
    title: 'Частичное восстановление исходной фразы',
    text: 'Вы записали список слов, а парольная фраза — некая комбинация этих слов.',
  },
  {
    image: walletImage,
    title: 'Потеряли доступ к кошельку крупной сети',
    text: 'Вы потеряли доступ к криптоактиву: Bitcoin, Ethereum, Litecoin, Dogecoin, NFT или другим альткоинам.',
  },
  {
    // image: shieldImage,
    title: 'Вас обманули мошенники',
    text: 'Мы предлагаем услуги по розыску для тех, кто хочет раскрыть реальную личность мошенника.',
  },
];

const questions = [
  {
    question: 'Как это всё работает?',
    answer: 'Методы восстановления различаются в зависимости от ситуации. Перед началом работ необходимо обсудить возможные варианты, условия и безопасность ваших данных.',
  },
  {
    question: 'Должен ли я сообщать вам пароль полностью?',
    answer: 'Не передавайте третьим лицам полный пароль, seed-фразу или приватные ключи. Сначала уточните безопасный порядок консультации.',
  },
  {
    question: 'Сколько времени занимает восстановление кошелька?',
    answer: 'Срок зависит от конкретной ситуации, сложности задачи и объёма данных. Его можно оценить после предварительной консультации.',
  },
  {
    question: 'Как мне вам довериться? Вы не украдёте мои деньги?',
    answer: 'До начала работы проверьте договор, условия предоставления услуг и репутацию исполнителя. Никому не сообщайте секретные данные кошелька.',
  },
  {
    question: 'Какие виды криптокошельков вы восстанавливаете?',
    answer: 'Возможность помочь зависит от типа кошелька и доступных данных. Уточните это во время консультации.',
  },
];

const news = [
  {
    image: newsImage1,
    title: 'Команда отец-сын говорит, что им удалось восстановить $6 млн утраченной криптовалюты',
  },
  {
    image: newsImage2,
    title: 'Новости и истории о восстановлении утраченной криптовалюты',
  },
  {
    image: newsImage3,
    title: 'Что важно знать о безопасности криптовалютных кошельков',
  },
  {
    image: newsImage4,
    title: 'Как защитить цифровые активы и избежать мошенничества',
  },
];

function HomePage() {
  return (
    <main className="home-page">
      {/* HERO */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Простое<br />
              и прозрачное<br />
              восстановление<br />
              кошелька
            </h1>

            <p className="hero-subtitle">
              Самый простой способ восстановить потерянный пароль от
              кошелька и расследовать кражу криптовалюты
            </p>

            <div className="hero-buttons">
              <a href="/application" className="btn-primary">
                Оставить заявку
              </a>

              <a href="#services" className="btn-secondary">
                Подробнее <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="hero-image-wrap">
            <img
              src={bannerImage}
              alt="Восстановление криптокошелька"
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
            Почему выбирают Navis Asset?
          </h2>

          <div className="why-cards">
            <div className="why-card">
              <p className="why-card-sub">
                Наша панель пользователя позволяет загружать данные в любое время
              </p>
              <h3 className="why-card-heading">
                Восстановим ваш заблокированный кошелёк
              </h3>
              <span className="why-card-number">01</span>
            </div>

            <div className="why-card">
              <p className="why-card-sub">
                Заботимся о конфиденциальности данных
              </p>
              <h3 className="why-card-heading">
                Ваш кошелёк будет защищён
              </h3>
              <span className="why-card-number">02</span>
            </div>

            <div className="why-card">
              <p className="why-card-sub">
                Помогаем разобраться с возможными вариантами восстановления
              </p>
              <h3 className="why-card-heading">
                Поможем оценить варианты восстановления доступа
              </h3>
              <span className="why-card-number">03</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section services-section" id="services">
        <div className="container section-container">
          <h2 className="section-title">Мы поможем вам, если</h2>

          <div className="services-grid">
            {services.map((service) => (
              <div
                className={`service-card${service.active ? ' active' : ''}`}
                key={service.title}
              >
                <div className="service-icon-wrap">
                  <img
                    src={service.image}
                    alt=""
                    className="service-icon"
                    loading="lazy"
                  />
                </div>

                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-text">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq-section">
        <div className="container section-container">
          <h2 className="section-title">
            Ответы на часто<br />
            задаваемые вопросы
          </h2>

          <div className="faq-list">
            {questions.map((item, index) => (
              <details
                className="faq-item"
                key={item.question}
                open={index === 0}
              >
                <summary className="faq-question">
                  <span>{item.question}</span>
                  <span className="faq-toggle-icon" aria-hidden="true" />
                </summary>

                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="section news-section">
        <div className="container section-container">
          <h2 className="section-title">Новости</h2>

          <div className="news-grid">
            <a href="/news" className="news-main-card">
              <div className="news-main-img-wrap">
                <img
                  src={newsMainImage}
                  alt="Новость о восстановлении криптовалюты"
                  className="news-main-img"
                  loading="lazy"
                />
              </div>

              <h3 className="news-main-title">
                Команда отец-сын говорит, что им удалось восстановить $6 млн
                утраченной криптовалюты
              </h3>

              <div className="news-main-bottom">
                <time className="news-date" dateTime="2024-06-11T12:30">
                  11.06.2024 12:30
                </time>
                <span className="news-arrow-btn" aria-hidden="true">→</span>
              </div>
            </a>

            <div className="news-list">
              {news.map((item) => (
                <a href="/news" className="news-item" key={item.image}>
                  <img
                    src={item.image}
                    alt=""
                    className="news-thumb"
                    loading="lazy"
                  />

                  <div className="news-item-info">
                    <h4 className="news-item-title">{item.title}</h4>
                    <time className="news-date" dateTime="2024-06-11">
                      11.06.2024
                    </time>
                  </div>

                  <span className="news-arrow-btn" aria-hidden="true">→</span>
                </a>
              ))}
            </div>
          </div>

          <a href="/news" className="btn-news-more">
            Подробнее <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section" id="contacts">
        <div className="container section-container">
          <div className="cta-card">
            <h2 className="cta-title">
              Ваши деньги обратно в вашем кармане!
            </h2>

            <img
              src={componentImage}
              alt=""
              className="cta-image"
              loading="lazy"
            />

            <div className="cta-action">
              <p className="cta-description">
                Возьмите свои финансы снова под контроль. Нажмите
                «Оставить заявку», чтобы получить помощь.
              </p>

              <a href="/application" className="cta-button">
                Оставить заявку
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
