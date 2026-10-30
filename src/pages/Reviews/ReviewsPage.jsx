import React from 'react';
import './ReviewsPage.css';

// Компонент SVG звезды
const Star = () => (
  <svg className="star-icon" viewBox="0 0 24 24">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

// Компонент SVG иконки человечка как на макете
const UserIcon = () => (
  <svg className="user-avatar-icon" viewBox="0 0 14 16" fill="currentColor">
    <path d="M7 8c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);

const reviewsList = [
  {
    id: 1,
    text: '«Обмен прошёл успешно! Рекомендую!»',
    author: 'Орозали',
    date: '23.05.2024 12:30'
  },
  {
    id: 2,
    text: '«Я был в полной панике, когда потерял доступ к своему криптокошельку с большим количеством цифровых активов. Обратившись в этот сервис по восстановлению криптокошельков»',
    author: 'Бекболсун',
    date: '23.05.2024 12:30'
  },
  {
    id: 3,
    text: '«Отличная команда специалистов, которые помогли мне во всем разобраться. Спасибо!»',
    author: 'Талас',
    date: '23.05.2024 12:30'
  },
  {
    id: 4,
    text: '«Обмен прошёл успешно! Рекомендую!»',
    author: 'Курсант',
    date: '23.05.2024 12:30'
  },
  {
    id: 5,
    text: '«Я обратился в этот сервис по восстановлению криптокошельков и не пожалел. Профессиональный подход сотрудников и скорость решения проблемы поразили меня»',
    author: 'Ихсан',
    date: '23.05.2024 12:30'
  },
  {
    id: 6,
    text: '«Обмен прошёл успешно! Рекомендую!»',
    author: 'Курсант',
    date: '23.05.2024 12:30'
  },
  {
    id: 7,
    text: '«Сервис индивидуального подхода. Благодарю за отличную работу!»',
    author: 'Жоомарт',
    date: '23.05.2024 12:30'
  },
  {
    id: 8,
    text: '«Спасибо за помощь с восстановлением криптокошелька. Профессиональный подход и оперативное решение проблемы. Очень доволен!»',
    author: 'Айдар',
    date: '23.05.2024 12:30'
  }
];

export default function ReviewsPage() {
  return (
    <div className="reviews-container">
      <h1 className="reviews-title">Отзывы довольных клиентов</h1>
      
      <div className="reviews-grid">
        {reviewsList.map((review) => (
          <div key={review.id} className="review-card">
            <div>
              <div className="stars-row">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <p className="review-text">{review.text}</p>
            </div>
            
            <div className="author-block">
              <UserIcon />
              <div className="author-info">
                <span className="author-name">{review.author}</span>
                <span className="review-date">{review.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
