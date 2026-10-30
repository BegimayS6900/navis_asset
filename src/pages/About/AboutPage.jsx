
import React from 'react';
import './AboutPage.css';

// Images
import founderPhoto from '../../assets/images/photo.png';
import companyImage from '../../assets/images/cfc3332b61a4d605724a76a26f6711b1c1b1adf9.jpg';
import teamImage from '../../assets/images/173b638eb41eadaead3c70ded0f0bb933c470c01.jpg';

const AboutPage = () => {
  return (
    <main className="about-page">
      <div className="container section-container">
        <h1 className="section-title page-title">О Navis Asset</h1>

        <div className="about-grid">
          <div className="about-group">
            <div className="group-top-row">
              <div className="about-card founder-card">
                <div className="founder-info">
                  <img
                    src={founderPhoto}
                    alt="Основатель компании"
                    className="founder-img"
                  />

                  <div>
                    <span className="founder-role">Основатель:</span>
                    <h3 className="founder-name">
                      Тилек<br />Бегалиев
                    </h3>
                  </div>
                </div>
              </div>

              <div className="about-card stat-card stat-red">
                <div className="stat-number">45+</div>
                <div className="stat-label">Довольных клиентов</div>
              </div>
            </div>

            <div className="about-card stat-card stat-gray">
              <div className="stat-number">100%</div>
              <div className="stat-label">Качественная работа</div>
            </div>
          </div>

          <div className="about-card photo-card">
            <img
              src={companyImage}
              alt="Здание компании"
              className="about-img"
              loading="lazy"
            />
          </div>

          <div className="about-card photo-card">
            <img
              src={teamImage}
              alt="Наша команда"
              className="about-img"
              loading="lazy"
            />
          </div>

          <div className="about-group group-row">
            <div className="about-card stat-card stat-black">
              <div className="stat-number">10+</div>
              <div className="stat-label">
                Профессиональных<br />
                сотрудников команды
              </div>
            </div>

            <div className="about-card stat-card stat-light">
              <div className="stat-title">Гарантия</div>
              <div className="stat-label">
                Профессиональных<br />
                сотрудников команды
              </div>
            </div>
          </div>
        </div>

        <div className="about-text-sections">
          <div className="about-text-row">
            <h2 className="about-text-title">
              Гарантируем, что ваша криптовалюта всегда остается у вас
            </h2>

            <div className="about-text-content">
              <p>
                Методы, которые мы используем для восстановления учетных
                записей наших клиентов, различаются в зависимости от
                конкретного случая. При восстановлении пароля мы помогаем
                клиентам разобраться с резервными копиями и доступными
                способами восстановления. Никогда не передавайте третьим
                лицам свою секретную фразу или закрытый ключ.
              </p>
            </div>
          </div>

          <div className="about-text-row">
            <h2 className="about-text-title">О наших основателях</h2>

            <div className="about-text-content">
              <p>
                Navis Asset стремится помогать владельцам криптовалют
                разбираться с вопросами доступа к цифровым активам.
              </p>

              <p>
                Наша команда изучает особенности каждого случая и помогает
                клиентам понять доступные варианты восстановления доступа.
              </p>

              <p>
                Мы стремимся предоставлять понятную информацию и
                профессиональную поддержку. Результат восстановления
                зависит от конкретной ситуации и имеющихся данных.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
