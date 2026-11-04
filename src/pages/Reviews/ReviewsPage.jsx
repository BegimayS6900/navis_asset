
import React from "react";
import { useTranslation } from "react-i18next";
import "./ReviewsPage.css";

// Компонент SVG звезды
const Star = () => (
  <svg className="star-icon" viewBox="0 0 24 24">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

// Компонент SVG иконки пользователя
const UserIcon = () => (
  <svg className="user-avatar-icon" viewBox="0 0 14 16" fill="currentColor">
    <path d="M7 8c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);

const reviewsList = [
  { id: 1, key: "review1", author: "Орозали", date: "23.05.2024 12:30" },
  { id: 2, key: "review2", author: "Бекболсун", date: "23.05.2024 12:30" },
  { id: 3, key: "review3", author: "Талас", date: "23.05.2024 12:30" },
  { id: 4, key: "review4", author: "Курсант", date: "23.05.2024 12:30" },
  { id: 5, key: "review5", author: "Ихсан", date: "23.05.2024 12:30" },
  { id: 6, key: "review6", author: "Курсант", date: "23.05.2024 12:30" },
  { id: 7, key: "review7", author: "Жоомарт", date: "23.05.2024 12:30" },
  { id: 8, key: "review8", author: "Айдар", date: "23.05.2024 12:30" },
];

export default function ReviewsPage() {
  const { t } = useTranslation();

  return (
    <div className="reviews-container">
      <h1 className="reviews-title">
        {t("reviewsPage.title")}
      </h1>

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

              <p className="review-text">
                {t(`reviewsPage.${review.key}`)}
              </p>
            </div>

            <div className="author-block">
              <UserIcon />

              <div className="author-info">
                <span className="author-name">
                  {review.author}
                </span>

                <span className="review-date">
                  {review.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
