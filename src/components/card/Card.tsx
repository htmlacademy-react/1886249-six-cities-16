import React from 'react';
import BookmarkButton from '../bookmark-button/bookmark-button';
import { Link } from 'react-router-dom';

export type CardProps = {
  previewImage: string;
  price: number;
  title: string;
  id: string;
};

function Card({ previewImage, price, title, id }: CardProps): JSX.Element {
  const [isActive, setIstActive] = React.useState(false);

  return (
    <article
      onMouseOver={() => {
        setIstActive(isActive ? isActive === true : isActive === false);
      }}
      className="cities__card place-card"
    >
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width="260"
            height="200"
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkButton />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>
  );
}

export default Card;
