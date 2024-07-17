import OfferGalery from '../offer-galery/offer-galery';
import OfferHost from '../offer-host/offer-host';
import OfferInside from '../offer-inside/offer-inside';
import OfferReviews from '../offer-reviews/offer-reviews';
import { OFFER_FULL_DATA } from '../../mocks/offer.mocks';

export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  bedrooms: number;
  goods: string;
  image: string;
  maxAdults: number;
};

export type OfferProps = {
  offer: Offer;
};

function OfferContent() {
  return (
    <section className="offer">
      <div className="offer__gallery-container container">
        <OfferGalery />
      </div>
      <div className="offer__container container">
        <div className="offer__wrapper">
          <div className="offer__mark">
            <span>Premium</span>
          </div>
          <div className="offer__name-wrapper">
            <h1 className="offer__name">{OFFER_FULL_DATA.title}</h1>
            <button className="offer__bookmark-button button" type="button">
              <svg className="offer__bookmark-icon" width="31" height="33">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="offer__rating rating">
            <div className="offer__stars rating__stars">
              <span style={{ width: '80%' }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="offer__rating-value rating__value">
              {OFFER_FULL_DATA.rating}
            </span>
          </div>
          <ul className="offer__features">
            <li className="offer__feature offer__feature--entire">
              {OFFER_FULL_DATA.type}
            </li>
            <li className="offer__feature offer__feature--bedrooms">
              {OFFER_FULL_DATA.bedrooms}
            </li>
            <li className="offer__feature offer__feature--adults">
              {OFFER_FULL_DATA.maxAdults}
            </li>
          </ul>
          <div className="offer__price">
            <b className="offer__price-value">&euro;{OFFER_FULL_DATA.price}</b>
            <span className="offer__price-text">&nbsp;night</span>
          </div>
          <OfferInside />
          <OfferHost />
          <OfferReviews />
        </div>
      </div>
      <section className="offer__map map"></section>
    </section>
  );
}

export default OfferContent;
