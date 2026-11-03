
import React from "react";
import { Link } from "react-router-dom";
import "./ServicesPage.css";

const services = [
  {
    id: 1,
    number: "01",
    title: "Возврат криптовалют",
    description:
      "Помогаем вернуть цифровые активы, утраченные в результате мошенничества и других неправомерных действий.",
  },
  {
    id: 2,
    number: "02",
    title: "Расследование криптовалютных транзакций",
    description:
      "Проводим анализ блокчейн-транзакций и помогаем установить движение цифровых активов.",
  },
  {
    id: 3,
    number: "03",
    title: "Юридическое сопровождение",
    description:
      "Предоставляем консультации и сопровождаем клиентов по вопросам, связанным с цифровыми активами.",
  },
  {
    id: 4,
    number: "04",
    title: "Анализ мошеннических схем",
    description:
      "Изучаем обстоятельства инцидентов, связанных с криптовалютным мошенничеством.",
  },
  {
    id: 5,
    number: "05",
    title: "Консультации специалистов",
    description:
      "Помогаем разобраться в сложных ситуациях и определить возможные дальнейшие действия.",
  },
  {
    id: 6,
    number: "06",
    title: "Сопровождение клиентов",
    description:
      "Оказываем поддержку на протяжении всего процесса работы с обращением.",
  },
];

const ServicesPage = () => {
  return (
    <main className="services-page">
      <section className="services-hero">
        <div className="container">
          

          <div className="services-hero-content">
            <span className="services-label">NAVIS ASSET</span>

            <h1>
              Наши <span>услуги</span>
            </h1>

            <p>
              Комплексная помощь в вопросах, связанных
              с цифровыми активами, криптовалютами
              и финансовыми расследованиями.
            </p>

            <Link to="/application" className="services-main-btn">
              Оставить заявку
            </Link>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="services-section-heading">
            <div>
              <span className="services-label">ЧТО МЫ ПРЕДЛАГАЕМ</span>
              <h2>Направления нашей работы</h2>
            </div>

            <p>
              Индивидуальный подход к каждому обращению
              и профессиональная поддержка на всех этапах.
            </p>
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

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <Link
                  to="/application"
                  className="service-link"
                >
                  Подробнее <span>→</span>
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
            <h2>Нужна помощь специалиста?</h2>
            <p>
              Оставьте заявку, и наша команда поможет
              разобраться в вашей ситуации.
            </p>
          </div>

          <Link to="/application" className="services-main-btn">
            Связаться с нами
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
